const http = require('http');
const fs = require('fs');
const path = require('path');

let express, Server;
try {
  express = require('express');
  ({ Server } = require('socket.io'));
} catch (e) {}

let TikTokLiveConnection = null;
async function loadTikTokConnector() {
  if (TikTokLiveConnection) return TikTokLiveConnection;
  try {
    const mainMod = await import('tiktok-live-connector');
    TikTokLiveConnection = mainMod.TikTokLiveConnection || mainMod.WebcastPushConnection || mainMod.default?.TikTokLiveConnection;
    if (TikTokLiveConnection) return TikTokLiveConnection;
  } catch (e) {
    console.error('Lỗi import tiktok-live-connector:', e.message);
  }
  return TikTokLiveConnection;
}

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

function extractTikTokUsername(input) {
  let str = String(input || '').trim();
  const urlMatch = str.match(/tiktok\.com\/@([^/?&\s]+)/i);
  if (urlMatch) {
    return urlMatch[1];
  }
  return str.replace(/^@+/, '').trim();
}

function extractUserFields(data) {
  const userObj = data?.user || data || {};
  const uniqueId =
    userObj?.uniqueId ||
    userObj?.displayId ||
    userObj?.id ||
    userObj?.idStr ||
    data?.uniqueId ||
    userObj?.nickname ||
    'situ_' + Math.floor(Math.random() * 9999);
  const nickname =
    userObj?.nickname ||
    data?.nickname ||
    uniqueId;
  const avatar =
    userObj?.avatarThumb?.url?.[0] ||
    userObj?.avatarThumb?.urlList?.[0] ||
    userObj?.avatarMedium?.url?.[0] ||
    userObj?.avatarMedium?.urlList?.[0] ||
    userObj?.avatarLarge?.url?.[0] ||
    userObj?.avatarLarge?.urlList?.[0] ||
    userObj?.profilePicture?.url?.[0] ||
    userObj?.profilePicture?.urls?.[0] ||
    data?.profilePictureUrl ||
    userObj?.profilePictureUrl ||
    null;
  return { uniqueId: String(uniqueId), nickname: String(nickname), avatar };
}

if (express && Server) {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, { cors: { origin: '*' } });

  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
  });

  app.use(express.static(PUBLIC_DIR));
  app.get('/live', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
  });

  let tiktokConnection = null;
  let currentUsername = null;
  let currentRoomId = null;
  let latestStateSnapshot = null;
  let recentEventsBuffer = [];
  let userProvidedEulerKey = process.env.EULERSTREAM_API_KEY || process.env.SIGN_API_KEY || '';

  // ===== LƯU ĐIỂM & NGƯỜI NẠP VÀO FILE (giữ nguyên khi tắt/mở lại game) =====
  const fs = require('fs');
  const SAVE_DIR = path.join(__dirname, 'data');
  const SAVE_FILE = path.join(SAVE_DIR, 'save.json');
  let saveData = { donors: {}, profiles: {} };
  try {
    if (fs.existsSync(SAVE_FILE)) {
      const loaded = JSON.parse(fs.readFileSync(SAVE_FILE, 'utf8'));
      saveData = { donors: loaded.donors || {}, profiles: loaded.profiles || {} };
    }
  } catch (e) {
    console.error('Không đọc được save.json:', e.message);
  }
  let saveTimer = null;
  function scheduleSaveToDisk() {
    if (saveTimer) return;
    saveTimer = setTimeout(() => {
      saveTimer = null;
      try {
        if (!fs.existsSync(SAVE_DIR)) fs.mkdirSync(SAVE_DIR, { recursive: true });
        fs.writeFileSync(SAVE_FILE, JSON.stringify(saveData), 'utf8');
      } catch (e) {
        console.error('Không ghi được save.json:', e.message);
      }
    }, 2000);
  }

  function broadcastTikTokEvent(evt) {
    recentEventsBuffer.push(evt);
    if (recentEventsBuffer.length > 35) {
      recentEventsBuffer.shift();
    }
    io.emit('tiktok_event', evt);
  }

  async function connectToTikTokRoom(rawInput) {
    const ConnectorClass = await loadTikTokConnector();
    if (!ConnectorClass) {
      io.emit('tiktok_status', {
        connected: false,
        error: 'Chưa tải được tiktok-live-connector. Hãy khởi động lại CHAY_GAME.bat!'
      });
      return;
    }

    const cleanUser = extractTikTokUsername(rawInput);
    if (!cleanUser) return;

    if (/\s/.test(cleanUser)) {
      io.emit('tiktok_status', {
        connected: false,
        error: `⚠️ "${cleanUser}" có dấu cách (Tên hiển thị). Hãy nhập ID TikTok viết liền sau dấu @ (ví dụ: @cng.tn.uyn.nhi)!`
      });
      return;
    }

    if (tiktokConnection) {
      try { await tiktokConnection.disconnect(); } catch (e) {}
      tiktokConnection = null;
    }

    console.log(`Đang kết nối tới TikTok LIVE của @${cleanUser} (TikTokLiveConnection v2.5)...`);
    io.emit('tiktok_status', { connecting: true, username: cleanUser });

    const connOptions = {
      processInitialData: true,
      fetchRoomInfoOnConnect: false,
      enableExtendedGiftInfo: false
    };
    const activeKey = userProvidedEulerKey || process.env.EULERSTREAM_API_KEY || process.env.SIGN_API_KEY;
    if (activeKey) {
      connOptions.signApiKey = activeKey;
      connOptions.apiKey = activeKey;
    }
    tiktokConnection = new ConnectorClass(cleanUser, connOptions);

    tiktokConnection.on('error', (err) => {
      console.error('⚠️ [TikTok Stream Warning]:', err?.message || err?.info || err);
    });

    // Đăng ký listener TRƯỚC khi gọi connect() để nhận luôn cả các comment vừa gõ trong phòng!
    tiktokConnection.on('chat', (data) => {
      try {
        const u = extractUserFields(data);
        // Trong tiktok-live-connector v2.5 (tiktok-live-proto v3), nội dung chat nằm ở data.content!
        const comment = data?.content || data?.comment || '';
        console.log(`💬 [CHAT] ${u.nickname} (@${u.uniqueId}): ${comment}`);
        broadcastTikTokEvent({
          type: 'chat',
          uniqueId: u.uniqueId,
          nickname: u.nickname,
          avatar: u.avatar,
          comment
        });
      } catch (e) {
        console.error('Lỗi xử lý chat:', e);
      }
    });

    tiktokConnection.on('gift', (data) => {
      try {
        const giftType = data?.gift?.type ?? data?.giftDetails?.giftType ?? data?.gift?.giftType ?? data?.giftType;
        const repeatEnd = data?.repeatEnd ?? data?.gift?.repeatEnd;
        if (giftType === 1 && !repeatEnd) return;
        const u = extractUserFields(data);
        const unitCoins = data?.gift?.diamondCount || data?.diamondCount || data?.giftDetails?.diamondCount || 1;
        const repeatCount = data?.repeatCount || data?.comboCount || 1;
        const diamondCount = Number(unitCoins) * Number(repeatCount);
        const giftName = data?.gift?.name || data?.giftName || data?.giftDetails?.giftName || data?.describe || `Quà (${diamondCount} xu)`;
        console.log(`🎁 [GIFT] ${u.nickname}: ${giftName} (${diamondCount} xu)`);
        broadcastTikTokEvent({
          type: 'gift',
          uniqueId: u.uniqueId,
          nickname: u.nickname,
          avatar: u.avatar,
          giftName,
          diamondCount,
          repeatCount
        });
      } catch (e) {
        console.error('Lỗi xử lý gift:', e);
      }
    });

    tiktokConnection.on('like', (data) => {
      try {
        const u = extractUserFields(data);
        console.log(`❤️ [LIKE] ${u.nickname} (@${u.uniqueId}): +${data?.count || data?.likeCount || 15} tim`);
        broadcastTikTokEvent({
          type: 'like',
          uniqueId: u.uniqueId,
          nickname: u.nickname,
          avatar: u.avatar,
          likeCount: Number(data?.count || data?.likeCount || 15)
        });
      } catch (e) {}
    });

    tiktokConnection.on('share', (data) => {
      try {
        const u = extractUserFields(data);
        broadcastTikTokEvent({
          type: 'share',
          uniqueId: u.uniqueId,
          nickname: u.nickname,
          avatar: u.avatar
        });
      } catch (e) {}
    });

    tiktokConnection.on('social', (data) => {
      try {
        const displayType = String(data?.displayType || data?.common?.displayText?.key || '').toLowerCase();
        const u = extractUserFields(data);
        if (displayType.includes('share')) {
          broadcastTikTokEvent({
            type: 'share',
            uniqueId: u.uniqueId,
            nickname: u.nickname,
            avatar: u.avatar
          });
        } else if (displayType.includes('follow')) {
          broadcastTikTokEvent({
            type: 'follow',
            uniqueId: u.uniqueId,
            nickname: u.nickname,
            avatar: u.avatar
          });
        }
      } catch (e) {}
    });

    tiktokConnection.on('member', (data) => {
      try {
        const u = extractUserFields(data);
        broadcastTikTokEvent({
          type: 'member',
          uniqueId: u.uniqueId,
          nickname: u.nickname,
          avatar: u.avatar
        });
      } catch (e) {}
    });

    tiktokConnection.on('streamEnd', () => {
      currentUsername = null;
      currentRoomId = null;
      io.emit('tiktok_status', { connected: false, error: 'Phiên LIVE đã kết thúc.' });
    });

    try {
      const state = await tiktokConnection.connect();
      currentUsername = cleanUser;
      currentRoomId = state?.roomId || tiktokConnection.roomId || 'LIVE';
      console.log(`✅ ĐÃ KẾT NỐI TIKTOK LIVE @${cleanUser} (Room ID: ${currentRoomId})`);
      io.emit('tiktok_status', { connected: true, username: cleanUser, roomId: currentRoomId });
    } catch (err) {
      currentUsername = null;
      currentRoomId = null;
      const msg = err?.message || String(err);
      console.error('❌ Lỗi kết nối TikTok:', msg);
      let friendlyError = `Không kết nối được @${cleanUser}. Hãy chắc chắn kênh @${cleanUser} ĐANG PHÁT LIVE trên TikTok! (${msg.slice(0, 120)})`;
      if (msg.includes('rate_limit') || msg.includes('Too many connections')) {
        friendlyError = `⚠️ IP server Render đang chạm giới hạn lượt kết nối miễn phí của EulerStream. Bạn có thể đăng ký API key miễn phí tại eulerstream.com rồi điền vào Render Environment Variable: EULERSTREAM_API_KEY hoặc kết nối TikTok trực tiếp từ máy cá nhân!`;
      }
      io.emit('tiktok_status', {
        connected: false,
        error: friendlyError
      });
    }
  }

  io.on('connection', (socket) => {
    socket.on('set_euler_key', (key) => {
      userProvidedEulerKey = String(key || '').trim();
      console.log('🔑 Đã cập nhật EulerStream API Key từ giao diện.');
    });
    if (currentUsername) {
      socket.emit('tiktok_status', { connected: true, username: currentUsername, roomId: currentRoomId });
    }
    if (latestStateSnapshot && Array.isArray(latestStateSnapshot.players) && latestStateSnapshot.players.length > 0) {
      socket.emit('state_snapshot', latestStateSnapshot);
    } else if (recentEventsBuffer.length > 0) {
      recentEventsBuffer.forEach((evt) => socket.emit('tiktok_event', evt));
    }

    socket.emit('save_data', saveData);

    socket.on('persist_save', (payload) => {
      if (!payload) return;
      if (payload.donors && typeof payload.donors === 'object') {
        Object.keys(payload.donors).forEach((uid) => {
          const d = payload.donors[uid];
          const cur = saveData.donors[uid];
          if (d && typeof d.coins === 'number' && (!cur || d.coins >= cur.coins)) saveData.donors[uid] = d;
        });
      }
      if (payload.profiles && typeof payload.profiles === 'object') {
        Object.assign(saveData.profiles, payload.profiles);
        const keys = Object.keys(saveData.profiles);
        if (keys.length > 2000) {
          keys.sort((a, b) => saveData.profiles[b].score - saveData.profiles[a].score);
          keys.slice(2000).forEach((k) => delete saveData.profiles[k]);
        }
      }
      scheduleSaveToDisk();
    });

    socket.on('admin_action', (payload) => {
      socket.broadcast.emit('admin_action', payload);
    });

    socket.on('stop_all_speech', () => {
      io.emit('stop_all_speech');
    });

    socket.on('sync_snapshot', (snapshot) => {
      latestStateSnapshot = snapshot;
      socket.broadcast.emit('state_snapshot', snapshot);
    });

    socket.on('connect_tiktok', async (rawInput) => {
      await connectToTikTokRoom(rawInput);
    });
  });

  server.listen(PORT, () => {
    printBanner(PORT);
    setTimeout(() => {
      connectToTikTokRoom('cng.tn.uyn.nhi');
    }, 500);
  });
}

function printBanner(port) {
  console.log('====================================================');
  console.log(`🐉 TRÀ QUÁN KHOA CỬ - TIKTOK LIVE GAME ĐÃ KHỞI ĐỘNG!`);
  console.log(`👉 Mở trình duyệt (Bảng điều khiển + Game): http://localhost:${port}`);
  console.log(`👉 Link dán vào TikTok LIVE Studio: http://localtest.me:${port}/?live=1`);
  console.log('====================================================');
}
