// =========================================================================
// TRÀ QUÁN KHOA CỬ - ĐƯỜNG LÊN NGÔI VƯƠNG (V5 - ULTRA CLEAN HD & DISTINCT AVATARS)
// =========================================================================

// 1. TỌA ĐỘ GHẾ THOÁNG ĐÃNG TRÊN SÂN CHẦU ĐIỆN THI ĐÌNH (KHÔNG CHỒNG CHÉO)
// Cơ chế điểm chuẩn mới: Thăng quan đòi hỏi thực tài và kiên trì qua nhiều kỳ thi!
// Toàn bộ ghế sĩ tử được neo vững chắc ở nửa dưới màn hình (y: 72% - 94%), giải phóng 100% không gian giữa cho Đề Thi!
const DEFAULT_SEATS = [
  // TẦNG 6: CỬU NGŨ CHÍ TÔN - HOÀNG ĐẾ (Ngồi bục rồng sân chầu)
  { id: 'T6_1', tier: 6, title: 'HOÀNG ĐẾ', hat: '👑', x: 50.0, y: 72.0, minScore: 3500 },

  // HÀNG 1 (y: 73.5%): ĐẠI THẦN THỪA TƯỚNG & TAM KHÔI (5 ghế trải đều trên thềm điện chầu)
  { id: 'T5_1', tier: 5, title: 'Tả Thừa Tướng', hat: '🟣', x: 18.0, y: 73.5, minScore: 1500 },
  { id: 'T4_2', tier: 4, title: 'Bảng Nhãn', hat: '🌺', x: 34.0, y: 73.5, minScore: 500 },
  { id: 'T4_1', tier: 4, title: 'Trạng Nguyên', hat: '🏵️', x: 50.0, y: 73.5, minScore: 500 },
  { id: 'T4_3', tier: 4, title: 'Thám Hoa', hat: '🌸', x: 66.0, y: 73.5, minScore: 500 },
  { id: 'T5_2', tier: 5, title: 'Hữu Thừa Tướng', hat: '🟣', x: 82.0, y: 73.5, minScore: 1500 },

  // HÀNG 2 (y: 80.5%): CỬ NHÂN (5 ghế đối xứng)
  { id: 'T3_1', tier: 3, title: 'Cử Nhân', hat: '📘', x: 18.0, y: 80.5, minScore: 200 },
  { id: 'T3_2', tier: 3, title: 'Cử Nhân', hat: '📘', x: 34.0, y: 80.5, minScore: 200 },
  { id: 'T3_3', tier: 3, title: 'Cử Nhân', hat: '📘', x: 50.0, y: 80.5, minScore: 200 },
  { id: 'T3_4', tier: 3, title: 'Cử Nhân', hat: '📘', x: 66.0, y: 80.5, minScore: 200 },
  { id: 'T3_5', tier: 3, title: 'Cử Nhân', hat: '📘', x: 82.0, y: 80.5, minScore: 200 },

  // HÀNG 3 (y: 87.5%): TÚ TÀI (5 ghế đối xứng)
  { id: 'T2_1', tier: 2, title: 'Tú Tài', hat: '🍵', x: 18.0, y: 87.5, minScore: 60 },
  { id: 'T2_2', tier: 2, title: 'Tú Tài', hat: '🍵', x: 34.0, y: 87.5, minScore: 60 },
  { id: 'T2_3', tier: 2, title: 'Tú Tài', hat: '🍵', x: 50.0, y: 87.5, minScore: 60 },
  { id: 'T2_4', tier: 2, title: 'Tú Tài', hat: '🍵', x: 66.0, y: 87.5, minScore: 60 },
  { id: 'T2_5', tier: 2, title: 'Tú Tài', hat: '🍵', x: 82.0, y: 87.5, minScore: 60 },

  // HÀNG 4 (y: 94.0%): ĐỒNG SINH (5 ghế hàng đầu sân lát gạch chuẩn đối xứng)
  { id: 'T1_1', tier: 1, title: 'Đồng Sinh', hat: '📜', x: 18.0, y: 94.0, minScore: 0 },
  { id: 'T1_2', tier: 1, title: 'Đồng Sinh', hat: '📜', x: 34.0, y: 94.0, minScore: 0 },
  { id: 'T1_3', tier: 1, title: 'Đồng Sinh', hat: '📜', x: 50.0, y: 94.0, minScore: 0 },
  { id: 'T1_4', tier: 1, title: 'Đồng Sinh', hat: '📜', x: 66.0, y: 94.0, minScore: 0 },
  { id: 'T1_5', tier: 1, title: 'Đồng Sinh', hat: '📜', x: 82.0, y: 94.0, minScore: 0 }
];

// =========================================================================
// BỘ 6 AVATAR 2D MÈO MEME KHOA CỬ HD (ĐỒNG SINH -> HOÀNG ĐẾ)
// =========================================================================
function getCatMemeAvatar(tier, uniqueId) {
  const t = Number(tier) || 1;
  if (t >= 6) return 'assets/avatars/cat_tier_6_hoang_thuong.png';
  if (t === 5) return 'assets/avatars/cat_tier_5_thua_tuong.png';
  if (t === 4) return 'assets/avatars/cat_tier_4_trang_nguyen.png';
  if (t === 3) return 'assets/avatars/cat_tier_3_cu_nhan.png';
  if (t === 2) return 'assets/avatars/cat_tier_2_tu_tai.png';
  return 'assets/avatars/cat_tier_1_dong_sinh.png';
}

function getDistinctAvatar(uniqueId, nickname, providedAvatar, tier = 1) {
  return getCatMemeAvatar(tier, uniqueId);
}

// 2. NGÂN HÀNG 80 CÂU HỎI KỲ THI ĐÌNH (ĐƯỢC NẠP TỪ QUIZZES.JS)
const IMPERIAL_QUIZZES = (window.IMPERIAL_QUIZ_BANK && window.IMPERIAL_QUIZ_BANK.length)
  ? window.IMPERIAL_QUIZ_BANK
  : [
      {
        q: 'Vị Trạng Nguyên trẻ tuổi nhất lịch sử khoa cử Việt Nam (đỗ năm 13 tuổi) là ai?',
        options: { A: 'Nguyễn Hiền', B: 'Mạc Đĩnh Chi', C: 'Lương Thế Vinh', D: 'Nguyễn Bỉnh Khiêm' },
        correct: 'A'
      }
    ];

let unusedQuizIndices = [];
function getNextRandomQuiz() {
  if (unusedQuizIndices.length === 0) {
    unusedQuizIndices = IMPERIAL_QUIZZES.map((_, idx) => idx);
    for (let i = unusedQuizIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [unusedQuizIndices[i], unusedQuizIndices[j]] = [unusedQuizIndices[j], unusedQuizIndices[i]];
    }
  }
  const nextIdx = unusedQuizIndices.pop();
  return IMPERIAL_QUIZZES[nextIdx];
}

const SAMPLE_SCHOLARS = [
  'Lê Văn Thịnh', 'Mạc Đĩnh Chi', 'Nguyễn Hiền', 'Lương Thế Vinh',
  'Nguyễn Bỉnh Khiêm', 'Chu Văn An', 'Phạm Đôn Lễ', 'Nguyễn Khuyến',
  'Trần Quốc Tuấn', 'Lý Thường Kiệt', 'Tô Hiến Thành', 'Đặng Dung',
  'Đào Tiểu Thư', 'Công Tử Thăng Long', 'Sĩ Tử Nghèo', 'Trạng Quỳnh'
];

// Trạng thái toàn cục
let seats = loadSeatsConfig();
let players = new Map();
let currentEmperorId = null;
let dragonQi = 0;
let kingSmiteTokens = 3; // Tối đa 3 Lệnh Bài Trảm mỗi nhiệm kỳ Vua
let kingSmiteCooldownUntil = 0; // Hồi chiêu 45 giây giữa 2 lần Trảm
let audioEnabled = true;
let editSeatsMode = false;
let autoBotTimer = null;
let activeQuiz = (typeof IMPERIAL_QUIZZES !== 'undefined' && IMPERIAL_QUIZZES.length) ? IMPERIAL_QUIZZES[0] : null;
let quizCountdown = 40;
let quizResolved = false;
let cycleSecondsLeft = 15 * 60;
let fireworksBurstList = [];
let evoCutsceneTimer1 = null;
let evoCutsceneTimer2 = null;
let socketRef = null;
let usingCleanBg = true;
let bgmEnabled = true;
let bgmVolume = 0.45;
let isSpeakingNow = false;
let currentBgmTrackName = 'Yume to Hazakura (Không lời)';
const isCleanLiveView = new URLSearchParams(window.location.search).get('live') === '1' || window.location.pathname.includes('/live');

// =========================================================================
// 3. HỆ THỐNG ÂM THANH, NHẠC NỀN YUME TO HAZAKURA & GIỌNG ĐỌC (WEB AUDIO + TTS)
// =========================================================================
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function applyBgmVolume() {
  const bgmEl = document.getElementById('bgmAudio');
  if (!bgmEl) return;
  if (!audioEnabled || !bgmEnabled || isCleanLiveView) {
    bgmEl.volume = 0;
    return;
  }
  // Tự động hạ nhẹ nhạc nền khi giọng đọc AI đang đọc câu hỏi để nghe rõ 100%
  const targetVol = isSpeakingNow ? Math.max(0.08, bgmVolume * 0.32) : bgmVolume;
  bgmEl.volume = Math.max(0, Math.min(1, targetVol));
}

function ensureBgmPlaying() {
  if (isCleanLiveView) return; // Chỉ phát ở tab điều khiển để tránh vọng tiếng Kép
  const bgmEl = document.getElementById('bgmAudio');
  if (!bgmEl) return;
  applyBgmVolume();
  if (audioEnabled && bgmEnabled && bgmEl.paused) {
    bgmEl.play().catch(() => {});
  } else if ((!audioEnabled || !bgmEnabled) && !bgmEl.paused) {
    bgmEl.pause();
  }
}

function ensureAudio() {
  if (!audioCtx && AudioCtx) {
    audioCtx = new AudioCtx();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  ensureBgmPlaying();
}

function playSound(type) {
  if (!audioEnabled) return;
  try {
    ensureAudio();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    if (type === 'join') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(840, now + 0.16);
      gain.gain.setValueAtTime(0.08, now); // Giảm âm lượng xuống ~35%
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'streak') {
      [587, 880, 1174].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.09, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } else if (type === 'wrong') {
      [220, 165].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.08, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.18);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.18);
      });
    } else if (type === 'evo_charge') {
      for (let i = 0; i < 8; i++) {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300 + i * 95, now + i * 0.075);
        gain.gain.setValueAtTime(0.07, now + i * 0.075);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.075 + 0.12);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + i * 0.075);
        osc.stop(now + i * 0.075 + 0.12);
      }
    } else if (type === 'promote') {
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.10, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.42);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.42);
      });
    } else if (type === 'emperor' || type === 'gong') {
      const chord = [130.81, 196.0, 261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
      chord.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.055);
        gain.gain.setValueAtTime(0.10, now + idx * 0.055);
        gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.8);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(now + idx * 0.055);
        osc.stop(now + 1.85);
      });
    } else if (type === 'smite') {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.5);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    }
  } catch (e) {}
}

// =========================================================================
// 1. BỘ LỌC TÊN NGƯỜI DÙNG CHO GIỌNG ĐỌC AI (TTS CLEANER)
// Loại bỏ 100% ký tự lạ, emoji, chuỗi vô nghĩa để giọng đọc trôi chảy, tự nhiên
// =========================================================================
function cleanUsernameForSpeech(rawName) {
  if (!rawName) return 'sĩ tử';
  let str = String(rawName).trim();

  // 1. Loại bỏ tiền tố kỹ thuật nếu có (bot_, situ_, user...)
  str = str.replace(/^(?:bot_|situ_|user_?)/i, '');

  // 2. Loại bỏ toàn bộ emoji và biểu tượng unicode đồ họa
  str = str.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/gu, '');

  // 3. Loại bỏ ký tự đặc biệt, dấu câu, gạch chân, a còng, chấm phẩy
  str = str.replace(/[@#\-_.*~|\\/+=<>()[\]{}!?:;"'`^&$%]/g, ' ');

  // 4. Loại bỏ các chuỗi số dài vô nghĩa (ví dụ: "nam98721345" -> "nam")
  str = str.replace(/\d{3,}/g, '');

  // 5. Loại bỏ các từ viết tắt lặp cụm vô nghĩa (như "cf", "fp", "ff", "vn", "tiktok")
  str = str.replace(/\b(?:cf|fp|ff|vn|tt|fb|yt|id|acc|live|tv)\b/gi, ' ');

  // 6. Gộp nhiều khoảng trắng thành 1
  str = str.replace(/\s+/g, ' ').trim();

  // 7. Nếu tên sau khi lọc quá ngắn (< 2 ký tự) hoặc chỉ toàn số: gán danh xưng cổ phong
  if (!str || str.length < 2 || /^\d+$/.test(str)) {
    return 'sĩ tử';
  }

  // Giới hạn độ dài để giọng đọc ngắn gọn, dứt khoát (tối đa 3 từ)
  const words = str.split(' ').filter(Boolean).slice(0, 3);
  return words.join(' ');
}

// BỘ HIỆU ỨNG ÂM THANH NGẮN (SFX) THUẦN WEB AUDIO API (KHÔNG TRỄ, KHÔNG CẦN TẢI FILE)
const AudioFX = {
  ctx: null,
  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  },
  // Tiếng lật trang giấy trúc sột soạt tự nhiên khi ra câu hỏi mới
  playPaperFlip() {
    if (!audioEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.18);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(700, now + 0.18);
      filter.Q.value = 2.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.14, now); // Giảm âm lượng xuống ~35%
      gain.gain.linearRampToValueAtTime(0.005, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  },
  // Tiếng chuông ngân vàng trong trẻo khi đáp đúng
  playBellDing() {
    if (!audioEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [880, 1320, 1760].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const initialVol = 0.10 / (idx + 1); // Giảm âm lượng xuống ~35%
        gain.gain.setValueAtTime(initialVol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + (idx === 0 ? 0.9 : 0.45));

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.95);
      });
    } catch (e) {}
  },
  // Tiếng gõ mõ sai trầm dứt khoát
  playWrongBuzz() {
    if (!audioEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(75, now + 0.22);

      gain.gain.setValueAtTime(0.11, now); // Giảm âm lượng xuống ~35%
      gain.gain.linearRampToValueAtTime(0.005, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    } catch (e) {}
  }
};

let currentSpeechToken = 0;

function stopAllSpeech(broadcast = true) {
  currentSpeechToken++;
  isSpeakingNow = false;
  applyBgmVolume();
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
      window.speechSynthesis.cancel();
    }
  } catch (e) {}
  if (broadcast && socketRef) {
    socketRef.emit('stop_all_speech');
  }
}

let isReadingQuiz = false;
const imperialSpeechQueue = [];

function speakImperial(text, priority = false, isQuizQuestion = false) {
  if (isCleanLiveView) return;
  if (!audioEnabled || !('speechSynthesis' in window)) return;

  // Nếu hệ thống đang đọc Câu hỏi thi và 4 đáp án A/B/C/D:
  // TUYỆT ĐỐI KHÔNG HỦY ĐỀ THI! Xếp vào hàng đợi để đọc ngay sau khi đọc xong đề bài!
  if (isReadingQuiz && !isQuizQuestion) {
    if (priority && imperialSpeechQueue.length < 2) {
      imperialSpeechQueue.push(text);
    }
    return;
  }

  if (isQuizQuestion) {
    isReadingQuiz = true;
  }

  try {
    ensureBgmPlaying();
    if (priority || isQuizQuestion) {
      currentSpeechToken++;
      window.speechSynthesis.pause();
      window.speechSynthesis.cancel();
    }
    const myToken = currentSpeechToken;
    const chunks = String(text)
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(Boolean);

    let idx = 0;
    function speakNextChunk() {
      if (myToken !== currentSpeechToken || !audioEnabled) {
        isSpeakingNow = false;
        applyBgmVolume();
        window.speechSynthesis.cancel();
        if (isQuizQuestion) isReadingQuiz = false;
        return;
      }
      if (idx >= chunks.length) {
        isSpeakingNow = false;
        applyBgmVolume();
        if (isQuizQuestion) {
          isReadingQuiz = false;
          if (imperialSpeechQueue.length > 0) {
            const nextItem = imperialSpeechQueue.shift();
            speakImperial(nextItem, false, false);
          }
        }
        return;
      }
      isSpeakingNow = true;
      applyBgmVolume();
      const utter = new SpeechSynthesisUtterance(chunks[idx++]);
      utter.lang = 'vi-VN';
      utter.rate = 1.85;
      utter.pitch = 1.1;
      utter.onend = () => {
        if (myToken === currentSpeechToken) {
          speakNextChunk();
        }
      };
      utter.onerror = () => {
        if (myToken === currentSpeechToken) {
          speakNextChunk();
        }
      };
      window.speechSynthesis.speak(utter);
    }
    speakNextChunk();
  } catch (e) {
    if (isQuizQuestion) isReadingQuiz = false;
  }
}


// =========================================================================
// HỆ THỐNG ĐỌC NHANH TÍNH NĂNG & HƯỚNG DẪN KHI RẢNH RỖI (GIỮ NHỊP LIVE)
// =========================================================================
const IDLE_FEATURE_TIPS = [
  "Sĩ tử comment bất kỳ để vào bàn, chọn A B C D khi có đề để thăng quan!",
  "Hoàng Đế có lệnh bài trảm quan, gõ chém kèm tên để giáng chức đối thủ!",
  "Tặng Bảo Kiếm mười xu giúp Hoàng Đế hồi ngay Lệnh Bài Trảm và xóa thời gian chờ!",
  "Thừa Tướng hãy gõ đoạt ngôi đủ năm mươi lần để mở trận quyết đấu cướp ngai vàng!",
  "Tặng Pháo Hoa một trăm xu để mở Giờ Vàng nhân ba điểm toàn trường thi trong sáu mươi giây!",
  "Thần tử dâng Thiên Nga thăng cấp Thừa Tướng và đại xá phục hồi điểm cho toàn triều!",
  "Tặng Hộ Thân Phù nhận Khiên Kim Cang miễn trảm năm phút, Vua không thể chém!",
  "Gõ chấm than điểm để xem thứ hạng, chấm than vua để xem long thể Hoàng Đế!",
  "Đáp đúng liên tiếp để kích hoạt chuỗi bốc lửa và nhận thêm điểm thưởng!",
  "Cứ mười lăm phút điểm sẽ giảm một nửa, hãy tích cực tương tác để giữ vững phẩm hàm!"
];
let idleTipIdx = 0;

function speakImperialQuick(text) {
  if (isCleanLiveView) return;
  if (!audioEnabled || !('speechSynthesis' in window)) return;
  try {
    ensureBgmPlaying();
    currentSpeechToken++;
    window.speechSynthesis.pause();
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'vi-VN';
    utter.rate = 1.95; // Tốc độ siêu nhanh, dứt khoát trong 1.5 - 2s
    utter.pitch = 1.1;
    isSpeakingNow = true;
    applyBgmVolume();

    utter.onend = () => {
      isSpeakingNow = false;
      applyBgmVolume();
    };
    utter.onerror = () => {
      isSpeakingNow = false;
      applyBgmVolume();
    };
    window.speechSynthesis.speak(utter);
  } catch (e) {
    isSpeakingNow = false;
    applyBgmVolume();
  }
}

function readRandomFeatureTipQuickly() {
  if (isSpeakingNow || activeQuiz || isMajorEventActive() || isCleanLiveView) return;
  const tip = IDLE_FEATURE_TIPS[idleTipIdx % IDLE_FEATURE_TIPS.length];
  idleTipIdx++;

  updateTopHighlightPill(
    null,
    '📢 <b>Bí Kíp Triều Đình</b>',
    tip,
    '📜'
  );
  speakImperialQuick(tip);
}

// =========================================================================
// 4. MÀN HÌNH CHUYỂN CẢNH "TIẾN HÓA PHẨM HÀM" (DIGIMON EVOLUTION CUTSCENE)
// =========================================================================
function getTierHat(tier) {
  switch (tier) {
    case 6: return '👑';
    case 5: return '🟣';
    case 4: return '🏵️';
    case 3: return '📘';
    case 2: return '🍵';
    default: return '📜';
  }
}

function spawnFireworksAt(xPercent, yPercent, count = 36, isRoyal = false) {
  if (fxEngine) {
    fxEngine.triggerFireworks(xPercent, yPercent, count, isRoyal);
    if (isRoyal) {
      fxEngine.triggerShockwave(xPercent, yPercent, '#ffd700', 360);
      fxEngine.triggerSkyLanterns(5);
    } else {
      fxEngine.triggerShockwave(xPercent, yPercent, '#fff1a8', 220);
    }
  }
}

let pendingCutscenes = [];

function processPendingCutscenes() {
  if (!pendingCutscenes.length) return;
  if (isMajorEventActive() || (activeQuiz && !quizResolved)) return;
  const c = pendingCutscenes.shift();
  if (!c) return;
  const cur = players.get(c.player.uniqueId);
  if (cur && cur.tier === c.newTier && c.newTier < 6) {
    playDigivolveCutscene(cur, c.oldTier, c.newTier, seats.find(x => x.id === cur.seatId), c.oldEmp);
  }
}

function playDigivolveCutscene(player, oldTier, newTier, newSeat, oldEmp = null) {
  // Tránh đè lên câu hỏi thi hoặc sự kiện lớn (Đoạt ngôi, Giặc xâm lăng, Sứ thần, Đấu giá)
  if (throneDuelState || bossState || envoyState || (auctionLeft > 0) || (activeQuiz && !quizResolved)) {
    pendingCutscenes.push({ player, oldTier, newTier, newSeat, oldEmp });
    return;
  }
  const stageEl = document.getElementById('digivolveStage');
  const avatarStage = document.getElementById('evoAvatarStage');
  const flashEl = document.getElementById('evoFlashWhite');
  const dragonsEl = document.getElementById('evoDragons');
  const headerTag = document.getElementById('evoHeaderTag');
  const playerNameEl = document.getElementById('evoPlayerName');
  const hatIconEl = document.getElementById('evoHatIcon');
  const avatarImgEl = document.getElementById('evoAvatarImg');
  const oldRankEl = document.getElementById('evoOldRank');
  const newRankEl = document.getElementById('evoNewRank');
  const subCaptionEl = document.getElementById('evoSubCaption');

  clearTimeout(evoCutsceneTimer1);
  clearTimeout(evoCutsceneTimer2);

  const isEmperorEvo = newTier === 6;
  const oldTitle = oldTier > 0 ? getTierTitle(oldTier) : 'Tân Sĩ Tử';
  const newTitle = getTierTitle(newTier);
  const oldHat = getTierHat(oldTier || 1);
  const newHat = getTierHat(newTier);

  stageEl.className = `digivolve-stage tier-${newTier} ${isEmperorEvo ? 'king-mode' : ''}`;
  const sealEl = document.getElementById('evoSealStamp');
  if (sealEl) sealEl.className = 'evo-seal-stamp hidden';
  dragonsEl.classList.toggle('hidden', !isEmperorEvo);

  playSound('evo_charge');
  headerTag.textContent = isEmperorEvo
    ? '🐉 SIÊU TIẾN HÓA CỬU NGŨ CHÍ TÔN 🐉'
    : '⚡ TIẾN HÓA KHOA CỬ • THĂNG QUAN ⚡';
  playerNameEl.textContent = player.nickname;
  avatarImgEl.src = getCatMemeAvatar(oldTier || 1, player.uniqueId);
  hatIconEl.textContent = oldHat;
  oldRankEl.textContent = `${oldHat} ${oldTitle}`;
  newRankEl.textContent = '???';
  subCaptionEl.textContent = 'Đang tụ hội Văn Khí đất trời...';

  avatarStage.className = 'evo-avatar-stage evo-stage-phase-1';
  flashEl.classList.remove('flash-now');
  stageEl.classList.remove('hidden');

  evoCutsceneTimer1 = setTimeout(() => {
    void flashEl.offsetWidth;
    flashEl.classList.add('flash-now');

    playSound(isEmperorEvo ? 'emperor' : 'promote');
    avatarStage.className = 'evo-avatar-stage evo-stage-phase-2';
    player.avatar = getCatMemeAvatar(newTier, player.uniqueId);
    avatarImgEl.src = player.avatar;
    renderSeats();

    const stampEl = document.getElementById('evoSealStamp');
    if (stampEl) {
      stampEl.textContent = isEmperorEvo ? '👑 ĐĂNG CƠ' : (newTier >= 4 ? '💮 ĐỀ DANH' : '📜 ĐỖ ĐẠT');
      stampEl.className = 'evo-seal-stamp stamp-drop';
    }
    hatIconEl.textContent = newHat;
    newRankEl.textContent = `${newHat} ${newTitle}`;

    if (isEmperorEvo) {
      if (pendingUsurpQuote) {
        pendingUsurpQuote = false;
        subCaptionEl.textContent = `💬 "${player.nickname}": "Ngươi lên ngôi chỉ vì may mắn!"`;
        speakImperial(
          `Thừa tướng ${player.nickname} đoạt ngôi thành công, bước lên Ngai Vàng và phán: Ngươi lên ngôi chỉ vì may mắn!`,
          true
        );
      } else if (oldEmp && oldEmp.uniqueId !== player.uniqueId) {
        subCaptionEl.textContent = `Soán ngôi ${oldEmp.nickname} • Độc chiếm Ngai Vàng!`;
        speakImperial(
          `Thánh chỉ đến! ${player.nickname} siêu tiến hóa Cửu Ngũ Chí Tôn, chính thức soán ngôi của ${oldEmp.nickname}, đăng cơ Hoàng Đế!`,
          true
        );
      } else {
        subCaptionEl.textContent = 'Bước lên đỉnh Cửu Ngũ Chí Tôn • Bách quan bái phục!';
        speakImperial(
          `Thánh chỉ đến! Chúc mừng ${player.nickname} siêu tiến hóa lên ngôi báu Cửu Ngũ Chí Tôn, đăng cơ Hoàng Đế!`,
          true
        );
      }
      spawnFireworksAt(25, 35, 45, true);
      spawnFireworksAt(75, 35, 45, true);
      spawnFireworksAt(50, 25, 55, true);
    } else {
      subCaptionEl.textContent = `Chúc mừng ${player.nickname} chính thức đỗ đạt ${newTitle}!`;
      spawnFireworksAt(50, 45, 38, newTier >= 4);
    }
  }, 680);

  const totalDuration = isEmperorEvo ? 3400 : 2100;
  evoCutsceneTimer2 = setTimeout(() => {
    stageEl.classList.add('hidden');
    if (newSeat) {
      strikeSeatWithLight(newSeat, isEmperorEvo);
    }
  }, totalDuration);
}

function strikeSeatWithLight(seat, isEmperor = false) {
  const fxLayer = document.getElementById('fxLayer');
  if (!fxLayer || !seat) return;

  const pillar = document.createElement('div');
  pillar.className = 'light-pillar';
  pillar.style.left = `${seat.x}%`;
  pillar.style.top = `${seat.y}%`;
  fxLayer.appendChild(pillar);

  if (fxEngine) {
    fxEngine.triggerAscension(seat.x, seat.y, isEmperor);
  }
  spawnFireworksAt(seat.x, seat.y, isEmperor ? 50 : 26, isEmperor);

  setTimeout(() => {
    pillar.remove();
  }, 1050);
}

// =========================================================================
// 5. QUẢN LÝ TỌA ĐỘ GHẾ & HIỂN THỊ AVATAR RIÊNG TỪNG SĨ TỬ SẮC NÉT
// =========================================================================
function resetSeatPositions() {
  localStorage.removeItem('tra_quan_seats_v10');
  localStorage.removeItem('tra_quan_seats_v8');
  localStorage.removeItem('tra_quan_seats_v6');
  localStorage.removeItem('tra_quan_seats_v5');
  localStorage.removeItem('tra_quan_seats_v3');
  seats = DEFAULT_SEATS.map(s => ({ ...s, occupantId: null }));
  reassignAllSeats();
}
window.resetSeatPositions = resetSeatPositions;

function loadSeatsConfig() {
  try {
    localStorage.removeItem('tra_quan_seats_v8');
    localStorage.removeItem('tra_quan_seats_v6');
    localStorage.removeItem('tra_quan_seats_v5');
    localStorage.removeItem('tra_quan_seats_v3');
    const saved = localStorage.getItem('tra_quan_seats_v10');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === DEFAULT_SEATS.length) {
        return parsed.map(s => ({ ...s, occupantId: null }));
      }
    }
  } catch (e) {}
  return DEFAULT_SEATS.map(s => ({ ...s, occupantId: null }));
}

function saveSeatsConfig() {
  const clean = seats.map(({ occupantId, ...rest }) => rest);
  localStorage.setItem('tra_quan_seats_v10', JSON.stringify(clean));
}

function renderSeats() {
  const layer = document.getElementById('seatsLayer');
  if (!layer) return;

  seats.forEach(seat => {
    let node = document.getElementById(`seat_${seat.id}`);
    const occupant = seat.occupantId ? players.get(seat.occupantId) : null;
    const hasShield = occupant && occupant.shieldUntil && occupant.shieldUntil > Date.now();
    const hasStreak = occupant && (occupant.correctStreak || 0) >= 2;
    const isJailed = occupant && occupant.jailedUntil && occupant.jailedUntil > Date.now();
    const targetClass = `seat-node tier-${seat.tier} ${occupant ? 'occupied' : 'empty'} ${editSeatsMode ? 'editable' : ''} ${hasShield ? 'shielded' : ''} ${hasStreak ? 'on-fire' : ''} ${isJailed ? 'is-jailed' : ''}`;

    if (!node) {
      node = document.createElement('div');
      node.id = `seat_${seat.id}`;
      node.dataset.seatId = seat.id;
      layer.appendChild(node);
      if (editSeatsMode) attachDragHandler(node, seat);
    }

    if (node.className !== targetClass) node.className = targetClass;
    node.style.left = `${seat.x}%`;
    node.style.top = `${seat.y}%`;

    const occKey = occupant
      ? `${occupant.uniqueId}_${occupant.score}_${getAvatarFrame(occupant)}_${getDonorTitle(occupant.uniqueId)}_${occupant.streak || 1}_${hasShield ? 1 : 0}_${hasStreak ? occupant.correctStreak : 0}_${isJailed ? Math.ceil((occupant.jailedUntil - Date.now())/1000) : 0}`
      : '__empty__';

    // Chỉ cập nhật DOM bên trong khi có thay đổi thực sự -> Giúp 60FPS mượt mà, không chớp giật avatar
    if (node.dataset.renderedState !== occKey) {
      node.dataset.renderedState = occKey;
      if (occupant) {
        const streakBadge = hasStreak ? `<span class="scholar-streak-badge">🔥x${occupant.correctStreak}</span>` : '';
        const jailOverlay = isJailed ? `<div class="jailed-cage-overlay">⛓️ NGỤC (${Math.ceil((occupant.jailedUntil - Date.now())/1000)}s)</div>` : '';
        node.innerHTML = `
          <div class="scholar-figure">
            <div class="scholar-halo"></div>
            ${jailOverlay}
            <div class="scholar-avatar-wrap ${getAvatarFrame(occupant)}">
              <span class="scholar-hat-badge">${seat.hat}</span>
              ${streakBadge}
              <img class="scholar-avatar-img" src="${occupant.avatar}" alt="${escapeHtml(occupant.nickname)}" />
            </div>
            <div class="scholar-robe-base"></div>
          </div>
          <div class="seat-nameplate">
            ${getDonorTitle(occupant.uniqueId) ? `<div class="seat-vip-tag">${getDonorTitle(occupant.uniqueId)}</div>` : ''}${getStreakBadge(occupant.streak || 1) ? `<div class="seat-streak-tag">${getStreakBadge(occupant.streak || 1)}</div>` : ''}<div class="seat-occ-name">${escapeHtml(occupant.nickname)}</div>
            <div class="seat-occ-rank">${seat.title} • ${occupant.score.toLocaleString()}đ</div>
            ${getNextTierHint(occupant.score) ? `<div class="seat-next-hint">${getNextTierHint(occupant.score)}</div>` : ''}
          </div>
        `;
      } else {
        node.innerHTML = `<div class="seat-meditation-pad" title="${seat.title}"></div>`;
      }
    }
  });
}

function showFloatingToastOnSeat(seatId, text, extraClass = '') {
  const seatEl = document.getElementById(`seat_${seatId}`);
  if (!seatEl) return;
  const toast = document.createElement('div');
  toast.className = `seat-toast ${extraClass}`;
  toast.textContent = text;
  seatEl.appendChild(toast);
  setTimeout(() => toast.remove(), 1900);
}

function attachDragHandler(el, seat) {
  const stage = document.getElementById('liveStage');
  el.addEventListener('mousedown', (e) => {
    if (!editSeatsMode) return;
    e.preventDefault();
    const rect = stage.getBoundingClientRect();

    const onMouseMove = (moveEvent) => {
      const relX = ((moveEvent.clientX - rect.left) / rect.width) * 100;
      const relY = ((moveEvent.clientY - rect.top) / rect.height) * 100;
      seat.x = Math.max(5, Math.min(95, Number(relX.toFixed(1))));
      seat.y = Math.max(10, Math.min(92, Number(relY.toFixed(1))));
      el.style.left = `${seat.x}%`;
      el.style.top = `${seat.y}%`;
    };

    const onMouseUp = () => {
      saveSeatsConfig();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  });
}

// =========================================================================
// 6. THUẬT TOÁN PHÂN GHẾ (ĐẢM BẢO AI GÕ !THI CŨNG ĐƯỢC VÀO BÀN NGAY 100%)
// =========================================================================
function getTargetTierByScore(score) {
  if (score >= 2500) return 6;
  if (score >= 900) return 5;
  if (score >= 300) return 4;
  if (score >= 100) return 3;
  if (score >= 25) return 2;
  return 1;
}

function getTierTitle(tier) {
  switch (tier) {
    case 6: return 'HOÀNG ĐẾ';
    case 5: return 'Thừa Tướng';
    case 4: return 'Trạng Nguyên';
    case 3: return 'Cử Nhân';
    case 2: return 'Tú Tài';
    default: return 'Đồng Sinh';
  }
}

function reassignAllSeats() {
  const prevTierByPlayer = new Map();
  players.forEach(p => {
    prevTierByPlayer.set(p.uniqueId, p.tier || 0);
    p.seatId = null;
    p.tier = 0;
  });

  seats.forEach(s => { s.occupantId = null; });

  const sortedByScore = Array.from(players.values()).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const aIsBot = a.uniqueId.startsWith('bot_') ? 1 : 0;
    const bIsBot = b.uniqueId.startsWith('bot_') ? 1 : 0;
    if (aIsBot !== bIsBot) return aIsBot - bIsBot;
    return (b.lastActiveAt || 0) - (a.lastActiveAt || 0);
  });

  for (const player of sortedByScore) {
    const maxAllowedTier = getTargetTierByScore(player.score);
    if (maxAllowedTier >= 2) {
      let assignedSeat = null;
      for (let t = maxAllowedTier; t >= 2; t--) {
        const candidateSeat = seats.find(s => s.tier === t && !s.occupantId);
        if (candidateSeat) {
          assignedSeat = candidateSeat;
          break;
        }
      }
      if (assignedSeat) {
        assignedSeat.occupantId = player.uniqueId;
        player.seatId = assignedSeat.id;
        player.tier = assignedSeat.tier;
      }
    }
  }

  // Các ghế Tầng 1 (Đồng Sinh) hoặc ghế trống bất kỳ LUÔN ƯU TIÊN người vừa mới gõ "!thi"
  const unseatedPlayers = Array.from(players.values())
    .filter(p => !p.seatId)
    .sort((a, b) => {
      const aIsBot = a.uniqueId.startsWith('bot_') ? 1 : 0;
      const bIsBot = b.uniqueId.startsWith('bot_') ? 1 : 0;
      if (aIsBot !== bIsBot) return aIsBot - bIsBot;
      return (b.lastActiveAt || b.joinedAt || 0) - (a.lastActiveAt || a.joinedAt || 0);
    });

  for (const player of unseatedPlayers) {
    const openSeat = seats.find(s => s.tier === 1 && !s.occupantId) || seats.find(s => s.tier <= 3 && !s.occupantId);
    if (!openSeat) break;
    openSeat.occupantId = player.uniqueId;
    player.seatId = openSeat.id;
    player.tier = openSeat.tier;
  }

  // Tự động đồng bộ Avatar Mèo Meme 2D chuẩn theo Phẩm hàm của từng người
  players.forEach(p => {
    p.avatar = getCatMemeAvatar(p.tier || 1, p.uniqueId);
  });

  renderSeats();

  const emperorSeat = seats.find(s => s.tier === 6);
  const newEmperorId = emperorSeat ? emperorSeat.occupantId : null;

  if (newEmperorId && newEmperorId !== currentEmperorId) {
    const newEmp = players.get(newEmperorId);
    const oldEmp = currentEmperorId ? players.get(currentEmperorId) : null;
    const oldTier = prevTierByPlayer.get(newEmperorId) || 1;
    currentEmperorId = newEmperorId;
    dragonQi = 100;
    kingSmiteTokens = 3;
    kingSmiteCooldownUntil = 0;

    playDigivolveCutscene(newEmp, oldTier, 6, emperorSeat, oldEmp);
    updateTopHighlightPill(
      newEmp,
      `<b>${escapeHtml(newEmp.nickname)}</b> ĐĂNG CƠ HOÀNG ĐẾ!`,
      'Có 3 Lệnh Bài Trảm • Gõ "chém @tên" để giáng chức đối thủ!',
      '👑'
    );
    addCompactCommentPill(newEmp, 'Đăng cơ Hoàng Đế!', '👑 VUA');
    updateHUDAndTables();
    return;
  } else if (!newEmperorId) {
    currentEmperorId = null;
  }

  let topPromotedPlayer = null;
  let topPromotedOldTier = 0;

  players.forEach(p => {
    const oldTier = prevTierByPlayer.get(p.uniqueId) || 0;
    if (p.seatId && p.tier > oldTier && p.tier >= 2 && p.tier < 6) {
      if (!topPromotedPlayer || p.tier > topPromotedPlayer.tier) {
        topPromotedPlayer = p;
        topPromotedOldTier = oldTier;
      }
      updateTopHighlightPill(p, `<b>${escapeHtml(p.nickname)}</b> thăng phẩm <b>${getTierTitle(p.tier)}</b>`, `KIM BẢNG ĐỀ DANH • ${p.score.toLocaleString()} Công Trạng`, getTierHat(p.tier));
    }
  });

  if (topPromotedPlayer) {
    const newSeatObj = seats.find(s => s.id === topPromotedPlayer.seatId);
    playDigivolveCutscene(topPromotedPlayer, topPromotedOldTier, topPromotedPlayer.tier, newSeatObj);
  }

  updateHUDAndTables();
}

// =========================================================================
// 7. HỆ THỐNG CÂU ĐỐ TRẮC NGHIỆM (NHẬN DIỆN MỌI KIỂU GÕ ĐÁP ÁN A/B/C/D)
// =========================================================================
function normalizeVN(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();
}

function detectChosenOption(comment, quiz) {
  if (!quiz || !comment) return null;
  const raw = comment.trim();
  const norm = normalizeVN(raw);

  const cleanedLetter = norm
    .replace(/^(?:!|dap\s*an|chon|cau|phuong\s*an|da|tl|tra\s*loi)\s*[:.-]?\s*/i, '')
    .replace(/[.!?)-\s]+$/g, '');

  if (['a', 'b', 'c', 'd'].includes(cleanedLetter)) {
    return cleanedLetter.toUpperCase();
  }

  const prefixMatch = norm.match(/^([abcd])(?:\s|$|[.,!?:;)]+)/i);
  if (prefixMatch && norm.length <= 12) {
    return prefixMatch[1].toUpperCase();
  }

  for (const key of ['A', 'B', 'C', 'D']) {
    const optTextNorm = normalizeVN(quiz.options[key]);
    if (!optTextNorm) continue;
    if (norm === optTextNorm || (optTextNorm.length >= 3 && norm.includes(optTextNorm)) || (norm.length >= 4 && optTextNorm.includes(norm))) {
      return key;
    }
  }
  return null;
}

let quizAnsweredUsers = new Set();
let quizCorrectWinners = [];
let quizFirstWinner = null;
let nextAutoQuizCooldown = 30; // Tự động nghỉ 30s giữa các câu hỏi theo yêu cầu
let doublePointsSecondsLeft = 0; // Sự kiện Giờ Vàng Hoàng Ân X2/X3 Công Trạng
let currentScoreMultiplier = 1;
let lastRivalryAlertAt = 0;
let binhBienCoins = 0; // Thanh Binh Biến: khán giả góp xu để ép Thừa Tướng thách đấu Vua
const BINH_BIEN_TARGET = 100;
let giftBoard = new Map(); // uniqueId -> { nickname, coins } (đặt lại mỗi 15 phút)

// =========================================================================
// CƠ CHẾ LIVE STREAMING CHUYÊN SÂU THEO BẢN THIẾT KẾ CHI TIẾT
// =========================================================================
let globalFeverLikes = 0;
const FEVER_TARGET_LIKES = 300; // 300 tim để đầy thanh
let isFeverActive = false;
let quizSessionCount = 0; // Đếm số câu hỏi để tự kích hoạt minigame đặc biệt mỗi 10 câu
let currentQuizStartTime = Date.now();
let quizFirstBloodWinners = [];
let previousTop1Id = null;
let previousTop1Name = '';
let specialBossRoundActive = false;
let pvpArenaState = null; // { active: false, vanHp: 50, voHp: 50, timer: 0, voters: new Map() }
let treasureChestState = null; // { active: false, hp: 50, maxHp: 50, timer: 0, lastHitUser: null }

function addFeverLikes(count = 1) {
  if (isFeverActive) return;
  globalFeverLikes = Math.min(FEVER_TARGET_LIKES, globalFeverLikes + count);
  updateFeverHud();
  if (globalFeverLikes >= FEVER_TARGET_LIKES) {
    activateGlobalFeverMode(120);
  }
}

function updateFeverHud() {
  const fill = document.getElementById('feverBarFill');
  const txt = document.getElementById('feverValText');
  const badge = document.getElementById('feverStatusBadge');
  if (!fill) return;

  if (isFeverActive) {
    const pct = Math.max(0, Math.min(100, (doublePointsSecondsLeft / 120) * 100));
    fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${doublePointsSecondsLeft}s`;
    if (badge) badge.textContent = `🔥 HOÀNG ÂN HẠO ĐÃNG (X2 ĐIỂM) - ${doublePointsSecondsLeft}s`;
  } else {
    const pct = Math.max(0, Math.min(100, (globalFeverLikes / FEVER_TARGET_LIKES) * 100));
    fill.style.width = `${pct}%`;
    if (txt) txt.textContent = `${globalFeverLikes}/${FEVER_TARGET_LIKES}`;
    if (badge) badge.textContent = `ĐỐT NHANG CẦU MAY (${Math.round(pct)}%)`;
  }
}

function activateGlobalFeverMode(durationSec = 120) {
  isFeverActive = true;
  doublePointsSecondsLeft = durationSec;
  currentScoreMultiplier = 2;
  globalFeverLikes = 0;
  updateFeverHud();
  showImperialDecree(
    '🔥 HOÀNG ÂN HẠO ĐÃNG 🔥',
    'Toàn phòng đạt mốc Đốt Nhang Cầu May! Toàn bộ câu hỏi tiếp theo được NHÂN ĐÔI (X2) điểm công trạng trong 2 phút!'
  );
  speakImperial('Toàn dân chú ý! Hoàng Ân Hạo Đãng! Toàn bộ câu hỏi tiếp theo được nhân đôi điểm công trạng trong hai phút!', true);
  if (fxEngine) {
    fxEngine.triggerGrandCelebration(50, 30);
    if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(35);
  }
}

function updateRoyalTrioPodium(sorted) {
  const top1El = document.getElementById('trioTop1');
  if (!top1El) return;

  const top1 = sorted[0];
  const top2 = sorted[1];
  const top3 = sorted[2];

  // Soán Ngôi detection for Top 1
  if (top1 && previousTop1Id && top1.uniqueId !== previousTop1Id) {
    const oldWinner = players.get(previousTop1Id);
    const oldName = oldWinner ? oldWinner.nickname : (previousTop1Name || 'Cựu Trạng Nguyên');

    top1El.classList.remove('usurp-enter');
    void top1El.offsetWidth; // force reflow
    top1El.classList.add('usurp-enter');

    playSound('gong');
    if (fxEngine) {
      fxEngine.triggerGrandCelebration(50, 25);
      if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(40);
    }
    showImperialDecree('⚡ SOÁN NGÔI BẢNG VÀNG ⚡', `Sĩ tử ${top1.nickname} vừa vượt điểm, chính thức đoạt Ngôi Vị Top 1 của ${oldName}!`);
    speakImperial(`Kính báo thiên hạ! Sĩ tử ${cleanUsernameForSpeech(top1.nickname)} vừa soán ngôi Bảng Vàng của ${cleanUsernameForSpeech(oldName)}!`, true);
  }

  if (top1) {
    previousTop1Id = top1.uniqueId;
    previousTop1Name = top1.nickname;
  }

  // Update Top 1 (hỗ trợ cả trioAvt1 và trioTop1Avatar)
  const t1Av = document.getElementById('trioAvt1') || document.getElementById('trioTop1Avatar');
  const t1Nm = document.getElementById('trioName1') || document.getElementById('trioTop1Name');
  const t1Sc = document.getElementById('trioScore1') || document.getElementById('trioTop1Score');
  if (top1 && t1Av && t1Nm && t1Sc) {
    t1Av.src = top1.avatar || getCatMemeAvatar(top1.tier, top1.uniqueId);
    t1Nm.textContent = top1.nickname;
    t1Sc.textContent = `${top1.score.toLocaleString()}đ`;
  } else if (t1Av && t1Nm && t1Sc) {
    t1Av.src = 'assets/avatars/cat_tier_4_trang_nguyen.png';
    t1Nm.textContent = 'Đang trống';
    t1Sc.textContent = '0đ';
  }

  // Update Top 2
  const t2Av = document.getElementById('trioAvt2') || document.getElementById('trioTop2Avatar');
  const t2Nm = document.getElementById('trioName2') || document.getElementById('trioTop2Name');
  const t2Sc = document.getElementById('trioScore2') || document.getElementById('trioTop2Score');
  if (top2 && t2Av && t2Nm && t2Sc) {
    t2Av.src = top2.avatar || getCatMemeAvatar(top2.tier, top2.uniqueId);
    t2Nm.textContent = top2.nickname;
    t2Sc.textContent = `${top2.score.toLocaleString()}đ`;
  } else if (t2Av && t2Nm && t2Sc) {
    t2Av.src = 'assets/avatars/cat_tier_4_trang_nguyen.png';
    t2Nm.textContent = 'Đang trống';
    t2Sc.textContent = '0đ';
  }

  // Update Top 3
  const t3Av = document.getElementById('trioAvt3') || document.getElementById('trioTop3Avatar');
  const t3Nm = document.getElementById('trioName3') || document.getElementById('trioTop3Name');
  const t3Sc = document.getElementById('trioScore3') || document.getElementById('trioTop3Score');
  if (top3 && t3Av && t3Nm && t3Sc) {
    t3Av.src = top3.avatar || getCatMemeAvatar(top3.tier, top3.uniqueId);
    t3Nm.textContent = top3.nickname;
    t3Sc.textContent = `${top3.score.toLocaleString()}đ`;
  } else if (t3Av && t3Nm && t3Sc) {
    t3Av.src = 'assets/avatars/cat_tier_4_trang_nguyen.png';
    t3Nm.textContent = 'Đang trống';
    t3Sc.textContent = '0đ';
  }
}

function renderFirstBloodCard() {
  const fbCard = document.getElementById('firstBloodCard');
  const fbList = document.getElementById('fbList');
  if (!fbCard || !fbList) return;
  fbCard.classList.remove('hidden');
  fbList.innerHTML = quizFirstBloodWinners.map(w => `
    <div class="fb-item rank-${w.rank}">
      <span class="fb-rank">#${w.rank}</span>
      <img src="${w.avatar || 'assets/avatars/cat_tier_1_dong_sinh.png'}" class="fb-avatar" />
      <span class="fb-name">${escapeHtml(w.nickname)}</span>
      <span class="fb-time">⚡ ${w.reactionSec}s</span>
      <span class="fb-bonus">+${w.bonus}đ</span>
    </div>
  `).join('');
}

function startBossRoundQuiz() {
  specialBossRoundActive = true;
  const hardQuiz = {
    q: '👑 [ĐIỆN THÍ - BOSS ROUND (8 GIÂY)] Vị trạng nguyên nào là tác giả của bài biểu "Thảo Hịch Đánh Thoát Hoan" chấn động sử sách?',
    options: { A: 'Trần Hưng Đạo', B: 'Mạc Đĩnh Chi', C: 'Nguyễn Hiền', D: 'Lê Văn Thịnh' },
    correct: 'A'
  };
  triggerImperialQuiz(hardQuiz);
  quizCountdown = 8;
  const bTitle = document.getElementById('quizBadgeTitle');
  if (bTitle) {
    bTitle.textContent = '👹 ĐIỆN THÍ ĐỐI MẶT HOÀNG THƯỢNG (8 GIÂY - X3 ĐIỂM)';
    bTitle.className = 'quiz-badge special-royal-badge';
  }
  showImperialDecree('👹 ĐIỆN THÍ HOÀNG CUNG 👹', 'Đối mặt Hoàng Thượng! Câu hỏi siêu khó, thời gian chỉ 8 giây! Đúng X3 điểm, sai bị trừ 100đ!');
  speakImperial('Khai mở Điện Thí Hoàng Cung! Tám giây bắt đầu! Trả lời đúng nhân ba điểm, trả lời sai khi quân phạm thượng bị trừ một trăm điểm!', true);
}

// =========================================================================
// CƠ CHẾ STATE MACHINE CHO KHU VỰC TRUNG TÂM (MODE_QUIZ vs MODE_PVP vs MODE_CHEST)
// Đảm bảo tại 1 thời điểm chỉ hiển thị 1 màn hình chính, không chồng chéo
// =========================================================================
const SCREEN_MODES = {
  QUIZ: 'MODE_QUIZ',
  PVP: 'MODE_PVP',
  CHEST: 'MODE_CHEST'
};
let currentScreenMode = SCREEN_MODES.QUIZ;

function setScreenMode(mode) {
  currentScreenMode = mode;
  const stage = document.getElementById('liveStage');
  const qModal = document.getElementById('quizModal');
  const arena = document.getElementById('specialEventArena');
  const pvpBox = document.getElementById('pvpArenaBox');
  const chestBox = document.getElementById('treasureEventBox');

  if (stage) {
    stage.classList.remove('screen-mode-quiz', 'screen-mode-pvp', 'screen-mode-chest');
    if (mode === SCREEN_MODES.QUIZ) stage.classList.add('screen-mode-quiz');
    else if (mode === SCREEN_MODES.PVP) stage.classList.add('screen-mode-pvp');
    else if (mode === SCREEN_MODES.CHEST) stage.classList.add('screen-mode-chest');
  }

  if (mode === SCREEN_MODES.QUIZ) {
    if (arena) arena.classList.add('hidden');
    if (pvpBox) pvpBox.classList.add('hidden');
    if (chestBox) chestBox.classList.add('hidden');
    if (qModal) {
      qModal.classList.remove('hidden');
      qModal.style.display = 'block';
    }
  } else if (mode === SCREEN_MODES.PVP) {
    if (arena) arena.classList.remove('hidden');
    if (pvpBox) pvpBox.classList.remove('hidden');
    if (chestBox) chestBox.classList.add('hidden');
    if (qModal) {
      qModal.classList.remove('hidden');
      qModal.style.display = 'block';
    }
  } else if (mode === SCREEN_MODES.CHEST) {
    if (qModal) {
      qModal.classList.add('hidden');
      qModal.style.display = 'none';
    }
    if (arena) arena.classList.remove('hidden');
    if (pvpBox) pvpBox.classList.add('hidden');
    if (chestBox) chestBox.classList.remove('hidden');
  }
}

function startPvpArenaEvent() {
  pvpArenaState = {
    active: true,
    vanHp: 50,
    voHp: 50,
    timer: 25,
    voters: new Map()
  };
  setScreenMode(SCREEN_MODES.PVP);
  updatePvpHud();
  showImperialDecree('⚔️ ĐẤU TRƯỜNG VĂN CHƯƠNG ⚔️', 'Phân chia phe phái! Phe Văn Quan chọn A/B vs Phe Võ Tướng chọn C/D! Bên nào áp đảo sẽ giành kho vàng thưởng!');
  speakImperial('Đấu trường Văn Chương khai mở! Phe Văn Quan gõ A hoặc B, phe Võ Tướng gõ C hoặc D! Trận chiến bắt đầu!', true);
}

function votePvpTeam(player, team) {
  if (!pvpArenaState || !pvpArenaState.active) return;
  pvpArenaState.voters.set(player.uniqueId, { player, team });
  if (team === 'van') {
    pvpArenaState.vanHp = Math.min(100, pvpArenaState.vanHp + 3);
    pvpArenaState.voHp = Math.max(0, pvpArenaState.voHp - 3);
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '📜 Tiếp sức Văn Quan (+3 HP)', 'toast-right');
  } else {
    pvpArenaState.voHp = Math.min(100, pvpArenaState.voHp + 3);
    pvpArenaState.vanHp = Math.max(0, pvpArenaState.vanHp - 3);
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '🗡️ Tiếp sức Võ Tướng (+3 HP)', 'toast-right');
  }
  updatePvpHud();
}

function updatePvpHud() {
  if (!pvpArenaState) return;
  const vanFill = document.getElementById('vanHpFill');
  const voFill = document.getElementById('voHpFill');
  const vanTxt = document.getElementById('vanScoreText');
  const voTxt = document.getElementById('voScoreText');
  if (vanFill) vanFill.style.width = `${pvpArenaState.vanHp}%`;
  if (voFill) voFill.style.width = `${pvpArenaState.voHp}%`;
  if (vanTxt) vanTxt.textContent = `${pvpArenaState.vanHp} HP`;
  if (voTxt) voTxt.textContent = `${pvpArenaState.voHp} HP`;
}

function finishPvpArenaEvent() {
  if (!pvpArenaState) return;
  const winTeam = pvpArenaState.vanHp >= pvpArenaState.voHp ? 'van' : 'vo';
  const winName = winTeam === 'van' ? 'VĂN QUAN' : 'VÕ TƯỚNG';

  let winnersCount = 0;
  pvpArenaState.voters.forEach(({ player, team }) => {
    if (team === winTeam) {
      player.score += 200;
      winnersCount++;
    }
  });
  reassignAllSeats();

  showImperialDecree('🏆 CHIẾN THẮNG ĐẤU TRƯỜNG 🏆', `Phe ${winName} toàn thắng! ${winnersCount} sĩ tử phe thắng được thưởng +200 điểm công trạng!`);
  speakImperial(`Trận chiến kết thúc! Phe ${winName} đã giành thắng lợi vang dội!`, true);
  if (fxEngine) {
    fxEngine.triggerGrandCelebration(50, 30);
    if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(35);
  }

  setScreenMode(SCREEN_MODES.QUIZ);
  pvpArenaState = null;
  nextAutoQuizCooldown = 20;
}

function startTreasureChestEvent() {
  treasureChestState = {
    active: true,
    hp: 50,
    maxHp: 50,
    timer: 15,
    lastHitUser: null
  };
  setScreenMode(SCREEN_MODES.CHEST);

  updateTreasureChestHud();
  showImperialDecree('🎁 CƯỚP LỘC ĐẦU XUÂN 🎁', 'Rương Châu Báu xuất hiện! Khán giả spam "phatloc" hoặc thả tim liên tục trong 15s để đập vỡ rương nhận Bão Điểm!');
  speakImperial('Cướp lộc đầu xuân! Rương châu báu giáng trần! Quý vị hãy spam phát lộc hoặc thả tim liên tục để đập vỡ rương!', true);
}

function damageTreasureChest(player, dmg = 2) {
  if (!treasureChestState || !treasureChestState.active) return;
  treasureChestState.hp = Math.max(0, treasureChestState.hp - dmg);
  treasureChestState.lastHitUser = player;
  player.score += 15;
  updateTreasureChestHud();

  const graphic = document.getElementById('treasureChestGraphic');
  if (graphic) {
    graphic.classList.add('chest-hit');
    setTimeout(() => graphic.classList.remove('chest-hit'), 150);
  }

  if (treasureChestState.hp <= 0) {
    finishTreasureChestEvent(true);
  }
}

function updateTreasureChestHud() {
  if (!treasureChestState) return;
  const fill = document.getElementById('treasureHpFill');
  const txt = document.getElementById('treasureHpText');
  const pct = Math.max(0, Math.min(100, (treasureChestState.hp / treasureChestState.maxHp) * 100));
  if (fill) fill.style.width = `${pct}%`;
  if (txt) txt.textContent = `Độ bền rương: ${treasureChestState.hp}/${treasureChestState.maxHp} (${treasureChestState.timer}s)`;
}

function finishTreasureChestEvent(isBroken = false) {
  if (!treasureChestState) return;
  const killer = treasureChestState.lastHitUser;
  if (isBroken && killer) {
    killer.score += 500;
    showImperialDecree('💥 ĐẬP VỠ RƯƠNG BÁU! 💥', `Sĩ tử ${killer.nickname} tung đòn kết liễu, đập vỡ Rương Báu nhận Jackpot +500 điểm! Toàn trường thi chia lộc!`);
    speakImperial(`Rương báu đã vỡ tung! Xin chúc mừng ${killer.nickname} tung đòn kết liễu nhận trọn kho báu năm trăm điểm!`, true);
  } else {
    showImperialDecree('🎁 HẾT GIỜ CƯỚP LỘC 🎁', 'Đã hết 15 giây cướp lộc! Toàn bộ sĩ tử tham gia đều được ban thưởng công trạng!');
    speakImperial('Đã hết thời gian cướp lộc! Xin cảm ơn toàn thể sĩ tử đã nhiệt tình tham gia!', true);
  }
  players.forEach(p => { if (p.seatId) p.score += 50; });
  reassignAllSeats();

  if (fxEngine) {
    fxEngine.triggerGrandCelebration(50, 45);
    if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(50);
  }

  setScreenMode(SCREEN_MODES.QUIZ);
  treasureChestState = null;
  nextAutoQuizCooldown = 20;
}

function renderGiftHud() {
  const fill = document.getElementById('binhBienFill');
  const txt = document.getElementById('binhBienText');
  let highestChant = 0;
  let highestChantName = '';
  ministerUsurpChantsByUser.forEach((cnt, uId) => {
    if (cnt > highestChant) {
      highestChant = cnt;
      const p = players.get(uId);
      if (p) highestChantName = p.nickname;
    }
  });

  const chantProgress = (highestChant / USURP_CHANT_TARGET) * 100;
  const coinProgress = (binhBienCoins / BINH_BIEN_TARGET) * 100;
  const bestProgress = Math.min(100, Math.max(coinProgress, chantProgress));

  if (fill) {
    fill.style.width = bestProgress + '%';
    if (highestChant >= 35 || binhBienCoins >= 75) {
      fill.classList.add('pulsing-danger');
    } else {
      fill.classList.remove('pulsing-danger');
    }
  }
  if (txt) {
    if (highestChant > 0) {
      txt.textContent = `⚔️ ${highestChantName ? highestChantName + ': ' : ''}Gõ Đoạt Ngôi ${highestChant}/50 lần • Quà Binh Biến: ${Math.min(binhBienCoins, BINH_BIEN_TARGET)}/100 xu`;
    } else {
      txt.textContent = `⚔️ Thừa Tướng gõ "đoạt ngôi" (0/50 lần) hoặc nạp ${Math.min(binhBienCoins, BINH_BIEN_TARGET)}/100 xu để Đoạt Ngôi!`;
    }
  }
  const board = document.getElementById('giftBoardText');
  if (board) {
    const top = Array.from(giftBoard.values()).sort((a, b) => b.coins - a.coins).slice(0, 3);
    const medals = ['🥇', '🥈', '🥉'];
    board.textContent = top.length
      ? '💰 Đại Phú Hộ: ' + top.map((t, i) => `${medals[i]} ${t.nickname} (${t.coins} xu)`).join(' • ')
      : '💰 Đại Phú Hộ: chưa có ai tặng quà';
  }
}

// ===== MỤC TIÊU QUÀ CHUNG "MƯA LỘC" & COMBO QUÀ (kích thích khán giả nạp quà) =====
// ===== KHO LƯU NGƯỜI NẠP (localStorage) & DANH HIỆU VIP VĨNH VIỄN =====
const DONOR_STORE_KEY = 'tra_quan_donors_v1';
let donorStore = {};
try { donorStore = JSON.parse(localStorage.getItem(DONOR_STORE_KEY) || '{}') || {}; } catch (e) { donorStore = {}; }
function saveDonorStore() { try { localStorage.setItem(DONOR_STORE_KEY, JSON.stringify(donorStore)); } catch (e) {} }
function getDonorTitle(uniqueId) {
  const c = (donorStore[uniqueId] && donorStore[uniqueId].coins) || 0;
  if (c >= 1000) return '💎 Quốc Thương';
  if (c >= 500) return '👑 Đại Phú Hộ';
  if (c >= 200) return '🥈 Phú Hộ';
  if (c >= 50) return '🥉 Thương Gia';
  return '';
}
// ===== KHUNG AVATAR RIÊNG (Top Tuần • Danh hiệu VIP • Chuyên Cần) =====
function getWeekKey() {
  const d = new Date();
  const dayFromMonday = (d.getDay() + 6) % 7;
  const monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - dayFromMonday);
  return monday.getFullYear() + '-' + String(monday.getMonth() + 1).padStart(2, '0') + '-' + String(monday.getDate()).padStart(2, '0');
}
function getWeeklyRanking() {
  const wk = getWeekKey();
  return Object.keys(donorStore)
    .filter(uid => donorStore[uid].weekKey === wk && donorStore[uid].weekCoins > 0)
    .sort((a, b) => donorStore[b].weekCoins - donorStore[a].weekCoins);
}
function getWeeklyRank(uniqueId) {
  const idx = getWeeklyRanking().indexOf(uniqueId);
  return idx === -1 ? 0 : idx + 1;
}
function getAvatarFrame(p) {
  if (!p || p.uniqueId.startsWith('bot_')) return '';
  const wr = getWeeklyRank(p.uniqueId);
  if (wr === 1) return 'frame-week1';
  if (wr === 2) return 'frame-week2';
  if (wr === 3) return 'frame-week3';
  const title = getDonorTitle(p.uniqueId);
  if (title.indexOf('Quốc Thương') !== -1) return 'frame-diamond';
  if (title.indexOf('Đại Phú Hộ') !== -1) return 'frame-gold';
  if (title.indexOf('Phú Hộ') !== -1) return 'frame-silver';
  if (title.indexOf('Thương Gia') !== -1) return 'frame-bronze';
  if ((p.streak || 1) >= 7) return 'frame-streak7';
  if ((p.streak || 1) >= 3) return 'frame-streak3';
  return '';
}

function renderDonorHallHud() {
  const el = document.getElementById('donorHallText');
  if (!el) return;
  const weekly = getWeeklyRanking().slice(0, 3);
  if (weekly.length) {
    const wm = ['🥇', '🥈', '🥉'];
    el.textContent = '🏆 Top Tuần (nhận khung avatar riêng): ' + weekly.map((uid, i) => wm[i] + ' ' + donorStore[uid].nickname + ' (' + donorStore[uid].weekCoins + ')').join(' • ');
    return;
  }
  const top = Object.values(donorStore).sort((a, b) => b.coins - a.coins).slice(0, 3);
  const medals = ['🥇', '🥈', '🥉'];
  el.textContent = top.length
    ? '🏛️ Bảng Vàng Công Thần: ' + top.map((t, i) => `${medals[i]} ${t.nickname} (${t.coins})`).join(' • ')
    : '🏛️ Bảng Vàng Công Thần: chưa có ai';
}
// ===== HỒ SƠ ĐIỂM ĐÃ LƯU TRÊN SERVER (người cũ quay lại vẫn giữ điểm) =====
let savedProfiles = {};
function collectProfilesForSave() {
  const out = {};
  players.forEach(p => {
    if (p.uniqueId.startsWith('bot_')) return;
    out[p.uniqueId] = { nickname: p.nickname, score: p.score, lastDay: p.lastDay || '', streak: p.streak || 1 };
  });
  return out;
}

// ===== CHUỖI NGÀY VÀO LIÊN TIẾP (kéo người xem quay lại mỗi ngày) =====
function getTodayStr(offsetDays) {
  const d = new Date(Date.now() - (offsetDays || 0) * 86400000);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function getStreakBadge(streak) {
  if (streak >= 7) return '🌟 Chuyên Cần ' + streak + ' ngày';
  if (streak >= 3) return '🔥 Chuyên Cần ' + streak + ' ngày';
  return '';
}
function applyDailyStreak(p) {
  const today = getTodayStr(0);
  const saved = savedProfiles[p.uniqueId];
  if (!saved || !saved.lastDay) {
    p.streak = 1;
    p.lastDay = today;
    return;
  }
  if (saved.lastDay === today) {
    p.streak = saved.streak || 1;
    p.lastDay = today;
    return;
  }
  p.streak = (saved.lastDay === getTodayStr(1)) ? (saved.streak || 1) + 1 : 1;
  p.lastDay = today;
  if (p.streak >= 2) {
    const bonus = Math.min(300, 50 * p.streak);
    p.score += bonus;
    setTimeout(() => {
      addCompactCommentPill(p, 'chuỗi ' + p.streak + ' ngày liên tiếp', '🔥 +' + bonus);
      updateTopHighlightPill(p, '<b>' + escapeHtml(p.nickname) + '</b> quay lại ngày thứ ' + p.streak + ' liên tiếp!', 'Thưởng chuyên cần +' + bonus + 'đ • Ngày mai nhận thêm nhiều hơn!', '🔥');
      if (p.seatId) showFloatingToastOnSeat(p.seatId, '🔥 Chuyên cần ' + p.streak + ' ngày +' + bonus + 'đ', 'toast-right');
    }, 1500);
  }
}

// ===== GỢI Ý THĂNG CẤP: "còn bao nhiêu điểm nữa lên cấp" =====
const TIER_THRESHOLDS = [
  { min: 25, name: 'Tú Tài' },
  { min: 100, name: 'Cử Nhân' },
  { min: 300, name: 'Trạng Nguyên' },
  { min: 900, name: 'Thừa Tướng' },
  { min: 2500, name: 'Hoàng Đế' }
];
function getNextTierHint(score) {
  const next = TIER_THRESHOLDS.find(t => score < t.min);
  if (!next) return '';
  return '↑ ' + next.name + ' còn ' + (next.min - score).toLocaleString() + 'đ';
}

// ===== ĐIỂM DANH THEO THỜI GIAN Ở LẠI (giữ chân người xem) =====
const DWELL_MILESTONES = [
  { sec: 60, pts: 30 },
  { sec: 180, pts: 60 },
  { sec: 300, pts: 100 },
  { sec: 600, pts: 200 },
  { sec: 900, pts: 300 }
];
function processDwellRewards() {
  const now = Date.now();
  let changed = false;
  players.forEach(p => {
    if (p.uniqueId.startsWith('bot_') || !p.joinedAt) return;
    const idx = p.dwellIdx || 0;
    const m = DWELL_MILESTONES[idx];
    if (!m) return;
    if ((now - p.joinedAt) / 1000 >= m.sec) {
      p.dwellIdx = idx + 1;
      p.score += m.pts;
      changed = true;
      const nxt = DWELL_MILESTONES[idx + 1];
      const minutes = Math.round(m.sec / 60);
      if (p.seatId) {
        showFloatingToastOnSeat(p.seatId, '⏱️ Ở lại ' + (m.sec >= 60 ? minutes + ' phút' : m.sec + 's') + ' +' + m.pts + 'đ', 'toast-right');
      }
      addCompactCommentPill(p, 'điểm danh ở lại ' + minutes + ' phút', '⏱️ +' + m.pts);
      if (nxt) {
        updateTopHighlightPill(p, '<b>' + escapeHtml(p.nickname) + '</b> ở lại ' + minutes + ' phút +' + m.pts + 'đ', 'Ở lại thêm ' + Math.round((nxt.sec - m.sec) / 60) + ' phút nữa nhận +' + nxt.pts + 'đ!', '⏱️');
      }
    }
  });
  if (changed) reassignAllSeats();
}

// ===== BỘ QUẢN LÝ TRẠNG THÁI SỰ KIỆN & TRÁNH XUNG ĐỘT (STATE MUTEX) =====
function isMajorEventActive() {
  return Boolean(throneDuelState || bossState || envoyState || (auctionLeft > 0));
}

function getActiveMajorEventInfo() {
  if (throneDuelState) return { type: 'duel', name: 'Quyết Đấu Đoạt Ngôi', icon: '⚔️' };
  if (bossState) return { type: 'boss', name: 'Giặc Ngoại Xâm', icon: '⚔️' };
  if (envoyState) return { type: 'envoy', name: 'Sứ Thần Ban Lộc', icon: '📜' };
  if (auctionLeft > 0) return { type: 'auction', name: 'Đấu Giá Ngai Vàng', icon: '👑' };
  return null;
}

function updateEventCountdownHud() {
  const el = document.getElementById('eventCountdownText');
  if (!el) return;
  const mm = String(Math.floor(cycleSecondsLeft / 60)).padStart(2, '0');
  const ss = String(cycleSecondsLeft % 60).padStart(2, '0');

  let mainPart = '';
  if (throneDuelState) {
    mainPart = '⚔️ QUYẾT ĐẤU ĐOẠT NGÔI: Câu ' + (throneDuelState.roundIndex + 1) + '/5 (' + quizCountdown + 's)';
  } else if (bossState) {
    mainPart = '⚔️ GIẶC NGOẠI XÂM: ' + bossState.hits + '/' + bossState.target + ' lần (' + bossState.left + 's)';
  } else if (envoyState) {
    mainPart = '📜 SỨ THẦN BAN LỘC: ' + envoyState.claimed.length + '/3 người (' + envoyState.left + 's)';
  } else if (auctionLeft > 0) {
    mainPart = '👑 ĐẤU GIÁ NGAI VÀNG: còn ' + auctionLeft + 's';
  } else if (activeQuiz && !quizResolved) {
    mainPart = '📜 Đang thi: còn ' + quizCountdown + 's';
  } else {
    mainPart = '⏳ Đề thi kế tiếp sau ' + nextAutoQuizCooldown + 's';
  }
  el.textContent = mainPart + ' • 🏆 Chốt chu kỳ ' + mm + ':' + ss;

  const ex = document.getElementById('eventExtraText');
  if (ex) {
    const lead = getAuctionLeader();
    const boostPart = giftBoostLeft > 0
      ? '💰 GIỜ VÀNG NẠP X2 điểm: còn ' + giftBoostLeft + 's'
      : '💰 Giờ Vàng Nạp sau ' + fmtMMSS(giftBoostNextIn);
    const auctionPart = auctionLeft > 0
      ? '👑 ĐẤU GIÁ NGAI: ' + (lead ? escapeHtml(lead.nickname) + ' dẫn đầu (' + lead.coins + ' xu)' : 'chưa ai ra giá') + ' • còn ' + auctionLeft + 's'
      : '👑 Đấu giá ngai sau ' + fmtMMSS(auctionNextIn);
    let randomPart;
    if (bossState) {
      randomPart = '⚔️ GIẶC XÂM LĂNG: ' + bossState.hits + '/' + bossState.target + ' • gõ "đánh" • còn ' + bossState.left + 's';
    } else if (envoyState) {
      randomPart = '📜 SỨ THẦN BAN LỘC: gõ "nhận" • còn ' + envoyState.left + 's';
    } else {
      randomPart = '⚡ Sự kiện bất ngờ sau ' + fmtMMSS(randomEventNextIn);
    }
    ex.innerHTML = boostPart + '<br>' + auctionPart + '<br>' + randomPart;
  }
}

// ===== SỰ KIỆN BẤT NGỜ NGẪU NHIÊN (Giặc Ngoại Xâm • Sứ Thần Ban Lộc) =====
let randomEventNextIn = 300;
let randomEventSeq = 0;
let bossState = null;
let envoyState = null;

function startRandomEvent(type) {
  // Không cho đè lên nếu đang trong Quyết Đấu Đoạt Ngôi
  if (throneDuelState) return;
  // Dọn dẹp trạng thái đấu giá nếu có
  if (auctionLeft > 0) auctionLeft = 0;
  // Dọn dẹp câu hỏi cũ nếu đang mở để tránh chồng đè giao diện
  if (activeQuiz) {
    activeQuiz = null;
    quizResolved = true;
    const qm = document.getElementById('quizModal');
    if (qm) qm.classList.add('hidden');
  }

  randomEventNextIn = 360;
  if (type === 'boss') {
    envoyState = null;
    bossState = { target: 40, hits: 0, left: 45, byUser: {} };
    playSound('gong');
    showGiftComboBanner('⚔️ GIẶC NGOẠI XÂM! GÕ "ĐÁNH"!');
    updateTopHighlightPill(null, '⚔️ <b>GIẶC NGOẠI XÂM</b> áp sát kinh thành!', 'Cả phòng gõ "đánh" 40 lần trong 45s để giữ thành!', '⚔️');
    speakImperial('Giặc ngoại xâm áp sát kinh thành! Toàn dân gõ đánh để bảo vệ ngai vàng!', true);
  } else {
    bossState = null;
    envoyState = { left: 20, claimed: [] };
    playSound('promote');
    showGiftComboBanner('📜 SỨ THẦN BAN LỘC! GÕ "NHẬN"!');
    updateTopHighlightPill(null, '📜 <b>SỨ THẦN BAN LỘC</b> đến kinh thành!', '3 người gõ "nhận" nhanh nhất nhận +500, +300, +150đ!', '📜');
    speakImperial('Sứ thần ban lộc đã đến! Ba người gõ nhận nhanh nhất sẽ được thưởng!', true);
  }
}

function resolveBoss(win) {
  const st = bossState;
  bossState = null;
  if (!st) return;
  nextAutoQuizCooldown = 15; // Cho nghỉ 15s trước khi mở đề thi tiếp theo
  processPendingCutscenes();

  if (win) {
    players.forEach(p => { if (p.seatId) p.score += 100; });
    let topUid = null;
    let topHits = 0;
    Object.keys(st.byUser).forEach(uid => {
      if (st.byUser[uid] > topHits) { topHits = st.byUser[uid]; topUid = uid; }
    });
    const hero = topUid ? players.get(topUid) : null;
    if (hero) hero.score += 300;
    triggerGoldenHourX2(30);
    showImperialDecree('🛡️ GIỮ THÀNH THẮNG LỢI 🛡️', 'Toàn dân đánh lui giặc! Mọi sĩ tử +100đ' + (hero ? ', anh hùng ' + hero.nickname + ' +300đ' : '') + ' • X2 điểm 30s!');
    speakImperial('Giặc đã bị đánh lui! Toàn dân được thưởng!', true);
    reassignAllSeats();
  } else {
    if (currentEmperorId && players.has(currentEmperorId)) dragonQi = Math.max(0, dragonQi - 30);
    showImperialDecree('🔥 THÀNH BỊ PHÁ 🔥', 'Giặc đã phá thành (' + st.hits + '/' + st.target + ' lần đánh)! Long Khí Hoàng Đế -30%!');
    speakImperial('Giặc đã phá thành! Lần sau toàn dân hãy đồng lòng hơn!', true);
    updateHUDAndTables();
  }
}

function handleRandomEventComment(player, normCmd) {
  const word = normCmd.split(' ')[0].replace('!', '');
  if (bossState && bossState.left > 0 && (word === 'danh' || word === 'chien' || word === 'xung')) {
    const c = bossState.byUser[player.uniqueId] || 0;
    if (c >= 8) return true;
    bossState.byUser[player.uniqueId] = c + 1;
    bossState.hits++;
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚔️ Đánh giặc! ' + bossState.hits + '/' + bossState.target, 'toast-right');
    if (bossState.hits >= bossState.target) resolveBoss(true);
    return true;
  }
  if (envoyState && envoyState.left > 0 && (word === 'nhan' || word === 'loc')) {
    if (envoyState.claimed.indexOf(player.uniqueId) !== -1) return true;
    const rank = envoyState.claimed.length;
    if (rank >= 3) return true;
    envoyState.claimed.push(player.uniqueId);
    const pts = [500, 300, 150][rank];
    player.score += pts;
    showGiftComboBanner('📜 ' + player.nickname + ' nhận lộc hạng ' + (rank + 1) + ' +' + pts + 'đ');
    addCompactCommentPill(player, 'nhận lộc Sứ Thần hạng ' + (rank + 1), '📜 +' + pts);
    reassignAllSeats();
    if (envoyState.claimed.length >= 3) envoyState.left = 1;
    return true;
  }
  return false;
}

// ===== RƯƠNG KHO BÁU (GACHA) • GIỜ VÀNG NẠP • ĐẤU GIÁ NGAI VÀNG =====
let giftBoostLeft = 0;
let giftBoostNextIn = 240;
let auctionLeft = 0;
let auctionNextIn = 420;
let auctionBids = {}; // uniqueId -> { nickname, coins }
let schedTickCount = 0;

function getAuctionLeader() {
  let best = null;
  Object.keys(auctionBids).forEach(uid => {
    const b = auctionBids[uid];
    if (!best || b.coins > best.coins) best = { uid: uid, nickname: b.nickname, coins: b.coins };
  });
  return best;
}

function startGiftBoost(seconds) {
  giftBoostLeft = seconds;
  giftBoostNextIn = 300;
  playSound('promote');
  showGiftComboBanner('💰 GIỜ VÀNG NẠP: QUÀ NHÂN ĐÔI ĐIỂM ' + seconds + 's!');
  updateTopHighlightPill(null, '💰 <b>GIỜ VÀNG NẠP</b>: mọi quà tặng nhân đôi Công Trạng (' + seconds + 's)!', 'Tặng quà ngay để nhận X2 điểm — chỉ trong ' + seconds + ' giây!', '💰');
  if (!activeQuiz) speakImperial('Giờ vàng nạp! Mọi quà tặng được nhân đôi điểm trong ' + seconds + ' giây!');
}

function startAuction(seconds) {
  if (throneDuelState) return;
  bossState = null;
  envoyState = null;
  if (activeQuiz) {
    activeQuiz = null;
    quizResolved = true;
    const qm = document.getElementById('quizModal');
    if (qm) qm.classList.add('hidden');
  }

  auctionLeft = seconds;
  auctionNextIn = 600;
  auctionBids = {};
  playSound('gong');
  showGiftComboBanner('👑 ĐẤU GIÁ NGAI VÀNG: ' + seconds + 's!');
  updateTopHighlightPill(null, '👑 <b>ĐẤU GIÁ NGAI VÀNG</b> mở trong ' + seconds + ' giây!', 'Ai tặng nhiều xu nhất sẽ ngồi lên Ngai Vàng!', '👑');
  speakImperial('Đấu giá ngai vàng bắt đầu! Ai dâng nhiều quà nhất sẽ lên ngôi Hoàng Đế!', true);
}

function finishAuction() {
  const lead = getAuctionLeader();
  auctionLeft = 0;
  auctionBids = {};
  nextAutoQuizCooldown = 15; // Cho nghỉ 15s trước khi mở đề thi mới
  processPendingCutscenes();

  if (!lead) {
    updateTopHighlightPill(null, '👑 Đấu giá ngai vàng kết thúc', 'Không ai dâng quà — Ngai Vàng giữ nguyên!', '👑');
    return;
  }
  const winner = players.get(lead.uid);
  if (!winner) return;
  if (currentEmperorId === lead.uid) {
    winner.score += 500;
    showImperialDecree('👑 THẮNG ĐẤU GIÁ NGAI 👑', winner.nickname + ' thắng đấu giá (' + lead.coins + ' xu) và giữ vững ngôi, thưởng +500đ!');
  } else {
    let top = 0;
    players.forEach(p => { if (p.score > top) top = p.score; });
    winner.score = Math.max(winner.score, top + 1, 2500);
    showImperialDecree('👑 ĐẤU GIÁ NGAI VÀNG 👑', winner.nickname + ' thắng đấu giá với ' + lead.coins + ' xu và lên ngôi Hoàng Đế!');
    speakImperial('Chúc mừng ' + winner.nickname + ' thắng đấu giá, đăng cơ Hoàng Đế!', true);
  }
  reassignAllSeats();
  updateHUDAndTables();
}

function openTreasureChest(player, emp) {
  const r = Math.random();
  let label = '';
  let rare = false;
  if (r < 0.40) {
    player.score += 300; label = '+300đ';
  } else if (r < 0.65) {
    player.score += 800; label = '+800đ';
  } else if (r < 0.77) {
    player.shieldUntil = Date.now() + 10 * 60 * 1000; label = 'Khiên Kim Cang 10 phút'; rare = true;
  } else if (r < 0.87) {
    if (emp) {
      kingSmiteTokens = Math.min(5, kingSmiteTokens + 1);
      kingSmiteCooldownUntil = 0;
      label = 'Hồi 1 Lệnh Trảm cho Vua';
    } else {
      player.score += 500; label = '+500đ';
    }
    rare = true;
  } else if (r < 0.98) {
    triggerGoldenHourX3(30); label = 'GIỜ VÀNG X3 toàn phòng (30s)'; rare = true;
  } else {
    player.score += 3000; label = 'JACKPOT +3000đ'; rare = true;
  }
  playSound(rare ? 'fireworks' : 'promote');
  showGiftComboBanner('🎁 RƯƠNG KHO BÁU: ' + player.nickname + ' nhận ' + label);
  addCompactCommentPill(player, 'mở Rương Kho Báu: ' + label, '🎁 RƯƠNG');
  if (player.seatId) showFloatingToastOnSeat(player.seatId, '🎁 ' + label, 'toast-right');
  if (rare) speakImperial(player.nickname + ' mở rương kho báu trúng ' + label + '!', true);
  reassignAllSeats();
  updateHUDAndTables();
}

// ===== XUẤT ẢNH BẢNG XẾP HẠNG ĐỂ CHIA SẺ =====
function exportLeaderboardImage() {
  const W = 1080;
  const H = 1500;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0b1226');
  bg.addColorStop(1, '#1a0f0f');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, W - 40, H - 40);
  ctx.strokeStyle = 'rgba(255,215,0,0.4)';
  ctx.lineWidth = 3;
  ctx.strokeRect(38, 38, W - 76, H - 76);

  const font = "'Be Vietnam Pro', 'Segoe UI', sans-serif";
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffe58f';
  ctx.font = '900 76px ' + font;
  ctx.fillText('TRÀ QUÁN KHOA CỬ', W / 2, 130);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 36px ' + font;
  ctx.fillText('BẢNG VÀNG CÔNG TRẠNG • ' + new Date().toLocaleDateString('vi-VN'), W / 2, 188);

  const all = Array.from(players.values()).sort((a, b) => b.score - a.score);
  const real = all.filter(p => !p.uniqueId.startsWith('bot_'));
  const list = (real.length ? real : all).slice(0, 10);

  const colors = ['#ffd700', '#e2e8f0', '#f59e0b'];
  let y = 270;
  ctx.textAlign = 'left';
  if (!list.length) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '600 40px ' + font;
    ctx.fillText('Chưa có sĩ tử nào vào bàn', W / 2, y + 60);
    y += 120;
  }
  list.forEach((p, i) => {
    ctx.fillStyle = i < 3 ? 'rgba(255,215,0,0.14)' : 'rgba(255,255,255,0.06)';
    ctx.fillRect(70, y - 52, W - 140, 84);
    ctx.fillStyle = colors[i] || '#94a3b8';
    ctx.font = '900 48px ' + font;
    ctx.textAlign = 'left';
    ctx.fillText('#' + (i + 1), 95, y + 8);
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 40px ' + font;
    let nm = p.nickname || '';
    if (nm.length > 18) nm = nm.slice(0, 17) + '…';
    ctx.fillText(nm, 215, y + 6);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 24px ' + font;
    const vip = getDonorTitle(p.uniqueId);
    ctx.fillText(getTierTitle(p.tier || 1) + (vip ? ' • ' + vip : ''), 215, y + 34);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffd666';
    ctx.font = '900 44px ' + font;
    ctx.fillText(p.score.toLocaleString() + 'đ', W - 95, y + 10);
    y += 98;
  });

  y += 30;
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffe58f';
  ctx.font = '900 44px ' + font;
  ctx.fillText('🏆 TOP NẠP TUẦN NÀY', W / 2, y);
  y += 30;
  const weekly = getWeeklyRanking().slice(0, 3);
  const wm = ['🥇', '🥈', '🥉'];
  ctx.textAlign = 'left';
  if (!weekly.length) {
    ctx.textAlign = 'center';
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '600 32px ' + font;
    ctx.fillText('Chưa có ai nạp tuần này — hãy là người đầu tiên!', W / 2, y + 50);
    y += 90;
  }
  weekly.forEach((uid, i) => {
    y += 64;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 38px ' + font;
    let nm = donorStore[uid].nickname || uid;
    if (nm.length > 20) nm = nm.slice(0, 19) + '…';
    ctx.fillText(wm[i] + ' ' + nm, 110, y);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffd666';
    ctx.fillText(donorStore[uid].weekCoins + ' xu', W - 110, y);
  });

  ctx.textAlign = 'center';
  ctx.fillStyle = '#a7f3d0';
  ctx.font = '800 36px ' + font;
  ctx.fillText('Gõ !thi để vào bàn • Trả lời A/B/C/D để thăng quan!', W / 2, H - 90);
  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 28px ' + font;
  ctx.fillText('Tặng quà để nhận khung avatar riêng & danh hiệu VIP', W / 2, H - 48);

  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bang-xep-hang-tra-quan-khoa-cu.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }, 'image/png');
}

function tickEventScheduler() {
  schedTickCount++;

  // 1. Giờ Vàng Nạp (buff thụ động)
  if (giftBoostLeft > 0) {
    giftBoostLeft--;
  } else if (giftBoostNextIn > 0) {
    if (!isMajorEventActive()) giftBoostNextIn--;
  }

  // 2. Đấu Giá Ngai Vàng
  if (auctionLeft > 0) {
    auctionLeft--;
    if (auctionLeft === 0) finishAuction();
  } else if (auctionNextIn > 0) {
    if (!isMajorEventActive()) auctionNextIn--;
  }

  // 3. Giặc Ngoại Xâm
  if (bossState) {
    bossState.left--;
    if (bossState.left <= 0) resolveBoss(bossState.hits >= bossState.target);
  }

  // 4. Sứ Thần Ban Lộc
  if (envoyState) {
    envoyState.left--;
    if (envoyState.left <= 0) {
      if (!envoyState.claimed.length) updateTopHighlightPill(null, '📜 Sứ Thần ra về', 'Không ai gõ nhận — lần sau nhanh tay hơn nhé!', '📜');
      envoyState = null;
      nextAutoQuizCooldown = 12;
      processPendingCutscenes();
    }
  }

  // 5. Đếm lùi Sự kiện bất ngờ
  if (randomEventNextIn > 0 && !bossState && !envoyState) {
    if (!isMajorEventActive()) randomEventNextIn--;
  }

  // 6. Tự động kích hoạt (chỉ bên Admin CP, tôn trọng tính độc quyền State Mutex)
  if (!isCleanLiveView) {
    // Buff nạp chỉ kích hoạt khi không có biến cố chặn màn hình
    if (giftBoostLeft === 0 && giftBoostNextIn <= 0 && !isMajorEventActive()) {
      startGiftBoost(60);
      emitAdminAction({ kind: 'gift_boost', seconds: 60 });
    }

    // Đấu giá chỉ bắt đầu khi KHÔNG có sự kiện khác và KHÔNG trùng lúc sĩ tử đang giải câu hỏi dở
    if (auctionLeft === 0 && auctionNextIn <= 0) {
      if (isMajorEventActive() || (activeQuiz && !quizResolved)) {
        auctionNextIn = 15; // Lùi lại 15s để đợi xong câu hỏi / sự kiện hiện tại
      } else {
        startAuction(90);
        emitAdminAction({ kind: 'auction', seconds: 90 });
      }
    }

    // Sự kiện bất ngờ chỉ bắt đầu khi trống sân
    if (randomEventNextIn <= 0 && !bossState && !envoyState) {
      if (isMajorEventActive() || (activeQuiz && !quizResolved)) {
        randomEventNextIn = 15; // Lùi lại 15s
      } else {
        const evType = (randomEventSeq++ % 2 === 0) ? 'boss' : 'envoy';
        startRandomEvent(evType);
        emitAdminAction({ kind: 'random_event', type: evType });
      }
    }

    if (schedTickCount % 10 === 0) {
      emitAdminAction({ kind: 'sched_sync', boostIn: giftBoostNextIn, auctionIn: auctionNextIn, randomIn: randomEventNextIn });
    }
  }
}

function fmtMMSS(sec) {
  const s = Math.max(0, sec);
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

let giftGoalCoins = 0;
let giftGoalTarget = 100;
const giftComboByUser = new Map(); // uniqueId -> { count, lastAt }

function renderGiftGoalHud() {
  const fill = document.getElementById('giftGoalFill');
  const txt = document.getElementById('giftGoalText');
  if (fill) fill.style.width = Math.min(100, (giftGoalCoins / giftGoalTarget) * 100) + '%';
  if (txt) txt.textContent = `🌧️ Mưa Lộc: ${Math.min(giftGoalCoins, giftGoalTarget)}/${giftGoalTarget} xu • Đủ xu cả phòng nhận thưởng!`;
}

function showGiftComboBanner(text) {
  const stage = document.getElementById('liveStage');
  if (!stage) return;
  const prev = stage.querySelectorAll('.gift-combo-banner');
  prev.forEach(e => e.remove());
  const el = document.createElement('div');
  el.className = 'gift-combo-banner';
  el.textContent = text;
  stage.appendChild(el);
  setTimeout(() => el.remove(), 2500);
}

function triggerMuaLoc(donor) {
  const reward = 150;
  players.forEach(p => { if (p.seatId) p.score += reward; });
  if (donor) donor.score += 300;
  playSound('fireworks');
  spawnFireworksAt(50, 30, 60, true);
  spawnFireworksAt(25, 40, 50, true);
  spawnFireworksAt(75, 40, 50, true);
  triggerGoldenHourX2(30);
  showImperialDecree('🌧️ MƯA LỘC HOÀNG CUNG 🌧️', `Cả phòng góp đủ ${giftGoalTarget} xu! Toàn bộ sĩ tử ngồi bàn +${reward}đ${donor ? `, ${donor.nickname} nhận thêm +300đ` : ''} • X2 điểm 30s!`);
  speakImperial('Mưa lộc hoàng cung! Cả phòng góp đủ quà, toàn bộ sĩ tử nhận thưởng!', true);
  giftGoalCoins = 0;
  giftGoalTarget = Math.min(500, giftGoalTarget + 50);
  reassignAllSeats();
}

function recordGiftForHud(player, coins) {
  const cur = giftBoard.get(player.uniqueId) || { nickname: player.nickname, coins: 0 };
  cur.nickname = player.nickname;
  cur.coins += coins;
  giftBoard.set(player.uniqueId, cur);

  // LƯU TỔNG XU NẠP VĨNH VIỄN + DANH HIỆU VIP
  const prevTitle = getDonorTitle(player.uniqueId);
  const isFirstGift = !donorStore[player.uniqueId];
  const ds = donorStore[player.uniqueId] || { nickname: player.nickname, coins: 0 };
  const prevWeekRank = getWeeklyRank(player.uniqueId);
  ds.nickname = player.nickname;
  ds.coins += coins;
  const wkNow = getWeekKey();
  if (ds.weekKey !== wkNow) { ds.weekKey = wkNow; ds.weekCoins = 0; }
  ds.weekCoins += coins;
  donorStore[player.uniqueId] = ds;
  saveDonorStore();
  renderDonorHallHud();
  const newWeekRank = getWeeklyRank(player.uniqueId);
  if (newWeekRank && newWeekRank <= 3 && (!prevWeekRank || newWeekRank < prevWeekRank)) {
    showGiftComboBanner('🖼️ ' + player.nickname + ' giành khung avatar Top ' + newWeekRank + ' Tuần!');
    addCompactCommentPill(player, 'giành khung avatar Top ' + newWeekRank + ' Tuần', '🖼️ TOP ' + newWeekRank);
  }
  if (isFirstGift) {
    player.score += 200;
    showGiftComboBanner(`🎉 TÂN THƯƠNG GIA ${player.nickname} +200đ`);
    addCompactCommentPill(player, 'Lần đầu dâng quà', '🎉 +200');
  }
  const newTitle = getDonorTitle(player.uniqueId);
  if (newTitle && newTitle !== prevTitle) {
    showImperialDecree('🏅 PHONG DANH HIỆU 🏅', `${player.nickname} được phong ${newTitle} (tổng ${ds.coins} xu)!`);
    speakImperial(`Phong danh hiệu ${newTitle} cho ${player.nickname}!`, true);
    seats.forEach(s => { const n = document.getElementById('seat_' + s.id); if (n) n.dataset.renderedState = ''; });
  }

  // GẤP ĐÔI ĐIỂM CÂU ĐỐ: tặng >= 5 xu khi đang có câu hỏi -> câu đúng tiếp theo nhân 2
  if (coins >= 5 && activeQuiz && !quizResolved && !throneDuelState) {
    player.doubleDown = true;
    addCompactCommentPill(player, 'Gấp đôi điểm câu này', '⚡ X2 ĐIỂM');
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚡ Câu này nhân đôi điểm!', 'toast-right');
  }

  // ĐẤU GIÁ NGAI VÀNG: cộng xu vào giá thầu khi phiên đang mở
  if (auctionLeft > 0) {
    const prevLead = getAuctionLeader();
    const bid = auctionBids[player.uniqueId] || { nickname: player.nickname, coins: 0 };
    bid.nickname = player.nickname;
    bid.coins += coins;
    auctionBids[player.uniqueId] = bid;
    const newLead = getAuctionLeader();
    if (newLead && newLead.uid === player.uniqueId && (!prevLead || prevLead.uid !== player.uniqueId)) {
      showGiftComboBanner('👑 ' + player.nickname + ' dẫn đầu đấu giá: ' + newLead.coins + ' xu!');
      addCompactCommentPill(player, 'dẫn đầu đấu giá ngai', '👑 ' + newLead.coins + ' xu');
    }
  }

  // COMBO QUÀ: tặng liên tiếp trong 12s -> thưởng thêm điểm & banner
  const now = Date.now();
  const cb = giftComboByUser.get(player.uniqueId) || { count: 0, lastAt: 0 };
  cb.count = (now - cb.lastAt <= 12000) ? cb.count + 1 : 1;
  cb.lastAt = now;
  giftComboByUser.set(player.uniqueId, cb);
  if (cb.count >= 2) {
    const bonus = Math.min(300, cb.count * 25);
    player.score += bonus;
    showGiftComboBanner(`🔥 COMBO x${cb.count} • ${player.nickname} +${bonus}đ`);
    addCompactCommentPill(player, `COMBO quà x${cb.count}`, `🔥 +${bonus}`);
  }

  // MỤC TIÊU QUÀ CHUNG
  giftGoalCoins += coins;
  if (giftGoalCoins >= giftGoalTarget) {
    triggerMuaLoc(player);
  }
  renderGiftGoalHud();

  if (!throneDuelState && currentEmperorId && players.has(currentEmperorId)) {
    binhBienCoins += coins;
    if (binhBienCoins >= BINH_BIEN_TARGET) {
      const hasMinister = Array.from(players.values()).some(p => p.uniqueId !== currentEmperorId && p.tier === 5);
      if (hasMinister) {
        binhBienCoins = 0;
        renderGiftHud();
        // Khán giả đã góp đủ xu: bỏ qua hồi chiêu, Thừa Tướng thách đấu ngay
        if (!isCleanLiveView) {
          executeMinisterUsurp('', false, true);
          emitAdminAction({ kind: 'usurp', uniqueId: '', isManualAdmin: false, force: true });
        }
        return;
      }
      binhBienCoins = BINH_BIEN_TARGET; // giữ đầy thanh, chờ có Thừa Tướng
    }
  }
  renderGiftHud();
}

const USURP_CHANT_TARGET = 50;
let ministerUsurpChantsByUser = new Map();
let throneDuelState = null; // Trạng thái Quyết Đấu 5 Câu Siêu Khó & Siêu Nhanh (Vua vs Thừa Tướng)
let pendingUsurpQuote = false; // Cờ phát câu thoại "Ngươi lên ngôi chỉ vì may mắn!" khi Thừa Tướng cướp ngôi

let quizOptionVotes = { A: 0, B: 0, C: 0, D: 0 };
let quizTotalVotes = 0;

function updateQuizOptionVoteDisplay() {
  ['A', 'B', 'C', 'D'].forEach(key => {
    const cnt = quizOptionVotes[key] || 0;
    const pct = quizTotalVotes > 0 ? Math.round((cnt / quizTotalVotes) * 100) : 0;
    const fillEl = document.getElementById(`voteFill_${key}`);
    const countEl = document.getElementById(`voteCount_${key}`);
    if (fillEl) fillEl.style.width = `${pct}%`;
    if (countEl) countEl.textContent = cnt > 0 ? `${cnt} (${pct}%)` : '';
  });
}

function getQuizRankReward(rankIndex) {
  if (rankIndex === 0) return { pts: 40, label: '🥇 Trạng Nguyên (#1)' };
  if (rankIndex === 1) return { pts: 25, label: '🥈 Bảng Nhãn (#2)' };
  if (rankIndex === 2) return { pts: 18, label: '🥉 Thám Hoa (#3)' };
  return { pts: 10, label: `📜 Đỗ Đạt (#${rankIndex + 1})` };
}

function triggerImperialQuiz(customQuizObj = null, decreeEmpId = null) {
  if (throneDuelState) {
    // Nếu trận quyết đấu đã bị treo quá lâu (> 120s), tự động hủy để không nghẽn câu hỏi
    if (Date.now() - (throneDuelState.startedAt || 0) > 120000) {
      finishThroneDuel();
    } else {
      return;
    }
  }

  // Tự động chuyển đổi minigame đặc biệt mỗi 10 câu hỏi thường
  if (!customQuizObj && !decreeEmpId) {
    quizSessionCount++;
    if (quizSessionCount % 10 === 0) {
      const mode = (quizSessionCount / 10) % 3;
      if (mode === 1) {
        startBossRoundQuiz();
        return;
      } else if (mode === 2) {
        startPvpArenaEvent();
        return;
      } else {
        startTreasureChestEvent();
        return;
      }
    }
  }

  // 1. KÍCH HOẠT MÀN HÌNH THI CHUYÊN BIỆT (FOCUSED QUIZ MODE)
  // Làm mờ nhẹ sảnh chờ và ẩn bớt widget phụ để 100% người xem tập trung vào đề thi
  const liveStageEl = document.getElementById('liveStage');
  if (liveStageEl) liveStageEl.classList.add('quiz-focused-mode');

  // Phát tiếng lật giấy sột soạt cổ phong
  AudioFX.playPaperFlip();

  // Tắt ngay chiếu chỉ thánh chỉ cũ để không che mất câu hỏi
  const decreeEl = document.getElementById('imperialDecree');
  if (decreeEl) {
    decreeEl.classList.add('hidden');
    decreeEl.style.display = 'none';
  }
  clearTimeout(decreeTimeout);
  decreeState = decreeEmpId ? { empId: decreeEmpId } : null;
  const quiz = customQuizObj || getNextRandomQuiz();
  activeQuiz = quiz;
  quizResolved = false;
  quizCountdown = 40;
  nextAutoQuizCooldown = 30;
  quizAnsweredUsers.clear();
  players.forEach(p => { p.doubleDown = false; });
  quizCorrectWinners = [];
  quizFirstWinner = null;
  currentQuizStartTime = Date.now();
  quizFirstBloodWinners = [];
  quizOptionVotes = { A: 0, B: 0, C: 0, D: 0 };
  quizTotalVotes = 0;
  setScreenMode(pvpArenaState && pvpArenaState.active ? SCREEN_MODES.PVP : SCREEN_MODES.QUIZ);

  const fbCard = document.getElementById('firstBloodCard');
  if (fbCard) fbCard.classList.add('hidden');

  const qModalEl = document.getElementById('quizModal');
  const isSpecial = Math.random() < 0.22; // 22% xác suất kích hoạt Kỳ Thi Đặc Cách X3 điểm
  if (quiz) quiz.isSpecialRoyal = isSpecial;

  const badgeTitleEl = document.getElementById('quizBadgeTitle');
  if (badgeTitleEl) {
    if (decreeState) {
      badgeTitleEl.textContent = '📜 THÁNH CHỈ: HOÀNG ĐẾ PHẢI TRẢ LỜI!';
      badgeTitleEl.className = 'quiz-badge';
    } else if (isSpecial) {
      badgeTitleEl.textContent = '🌟 KỲ THI ĐẶC CÁCH (X3 ĐIỂM THƯỞNG!)';
      badgeTitleEl.className = 'quiz-badge special-royal-badge';
    } else if (nextQuizSponsor) {
      badgeTitleEl.textContent = '🎁 ĐỀ DO ' + nextQuizSponsor.toUpperCase() + ' DÂNG TẶNG';
      badgeTitleEl.className = 'quiz-badge';
    } else {
      badgeTitleEl.textContent = '📜 KHẢO THÍ TRIỀU ĐÌNH (ĐUA TOP NHANH NHẤT)';
      badgeTitleEl.className = 'quiz-badge';
    }
    nextQuizSponsor = null;
  }
  if (qModalEl) {
    qModalEl.classList.toggle('special-royal-modal', isSpecial);
  }
  document.getElementById('quizQuestionText').textContent = quiz.q;
  document.getElementById('quizTimerBadge').textContent = `⏳ ${quizCountdown}s`;

  const grid = document.getElementById('quizOptionsGrid');
  grid.innerHTML = ['A', 'B', 'C', 'D'].map(key => `
    <div class="quiz-opt-box" id="quizOpt_${key}">
      <div class="opt-vote-fill" id="voteFill_${key}" style="width: 0%;"></div>
      <div class="opt-content">
        <span class="quiz-opt-key">${key}</span>
        <span class="quiz-opt-text">${escapeHtml(quiz.options[key])}</span>
        <span class="opt-vote-count" id="voteCount_${key}"></span>
      </div>
    </div>
  `).join('');

  const fb = document.getElementById('quizLiveFeedback');
  fb.className = 'quiz-live-feedback';
  fb.innerHTML = `👉 Đua Top trả lời <b>A, B, C, D</b>: 🥇Trạng Nguyên <b>+40đ</b> • 🥈Bảng Nhãn <b>+25đ</b> • 🥉Thám Hoa <b>+18đ</b> • Đỗ Đạt <b>+10đ</b> (Sai <b>-10đ</b>)!`;

  const qmEl = document.getElementById('quizModal');
  if (qmEl) {
    qmEl.classList.remove('hidden');
    qmEl.style.display = 'block';
    qmEl.style.opacity = '1';
    qmEl.style.visibility = 'visible';
  }

  playSound('gong');
  speakImperial(`${quiz.q} Đáp án A: ${quiz.options.A}. B: ${quiz.options.B}. C: ${quiz.options.C}. D: ${quiz.options.D}.`, true, true);
}

function evaluateQuizComment(player, commentText) {
  if (!activeQuiz || quizResolved) return false;

  // Nếu đang bị nhốt đại lao -> Không được phép trả lời câu hỏi!
  if (player.jailedUntil && player.jailedUntil > Date.now()) {
    if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, '⛓️ Đang bị nhốt đại lao, không thể thi cử! (Tặng 1 hoa hồng để thoát)', 'toast-wrong');
    }
    return true;
  }

  const chosenKey = detectChosenOption(commentText, activeQuiz);
  if (!chosenKey) return false;

  // Cập nhật số người bình chọn A, B, C, D theo thời gian thực lên màn hình thi
  quizOptionVotes[chosenKey] = (quizOptionVotes[chosenKey] || 0) + 1;
  quizTotalVotes++;
  updateQuizOptionVoteDisplay();

  const fb = document.getElementById('quizLiveFeedback');

  // --- THÁNH CHỈ: chỉ Hoàng Đế được đáp ---
  if (decreeState) {
    if (player.uniqueId !== decreeState.empId) {
      if (player.seatId) showFloatingToastOnSeat(player.seatId, '📜 Thánh Chỉ dành cho Hoàng Đế!', 'toast-wrong');
      return true;
    }
    quizResolved = true;
    const ok = chosenKey === activeQuiz.correct;
    const rb = document.getElementById('quizOpt_' + activeQuiz.correct);
    if (rb) rb.classList.add('opt-correct');
    if (ok) {
      player.score += 300;
      fb.className = 'quiz-live-feedback fb-right';
      fb.innerHTML = '👑 Hoàng Đế <b>' + escapeHtml(player.nickname) + '</b> đáp đúng Thánh Chỉ! +300đ';
      playSound('promote');
    } else {
      player.score = Math.max(5, player.score - 150);
      fb.className = 'quiz-live-feedback fb-wrong';
      fb.innerHTML = '❌ Hoàng Đế đáp sai Thánh Chỉ! -150đ • Đáp án: <b>' + activeQuiz.correct + '</b>';
      playSound('wrong');
    }
    reassignAllSeats();
    setTimeout(() => {
      document.getElementById('quizModal').classList.add('hidden');
      const stageEl = document.getElementById('liveStage');
      if (stageEl) stageEl.classList.remove('quiz-focused-mode');
      activeQuiz = null;
      decreeState = null;
      nextAutoQuizCooldown = 30;
    }, 2500);
    return true;
  }

  // --- CHẾ ĐỘ QUYẾT ĐẤU ĐOẠT NGÔI 1v1 (5 CÂU SIÊU KHÓ & SIÊU NHANH) ---
  if (throneDuelState) {
    const { empId, minId, roundIndex } = throneDuelState;
    if (player.uniqueId !== empId && player.uniqueId !== minId) {
      if (player.seatId) {
        showFloatingToastOnSeat(player.seatId, `⚔️ Đang Quyết Đấu 1v1 Vua vs Thừa Tướng!`, 'toast-wrong');
      }
      return true;
    }

    // Mỗi bên chỉ được chọn 1 lần duy nhất cho mỗi câu để tránh spam A B C D
    if (throneDuelState.attemptedIds.has(player.uniqueId)) {
      if (player.seatId) {
        showFloatingToastOnSeat(player.seatId, `⚠️ Mỗi câu Quyết Đấu chỉ được đáp 1 lần!`, 'toast-wrong');
      }
      return true;
    }

    throneDuelState.attemptedIds.add(player.uniqueId);

    if (chosenKey === activeQuiz.correct) {
      // CHỈ 1 TRONG 2 NGƯỜI ĐƯỢC TRẢ LỜI ĐÚNG: Ai đúng trước lập tức khóa câu hỏi và ăn điểm!
      quizResolved = true;
      if (throneDuelState.botAnswerTimeout) {
        clearTimeout(throneDuelState.botAnswerTimeout);
        throneDuelState.botAnswerTimeout = null;
      }

      const isEmp = player.uniqueId === empId;
      if (isEmp) throneDuelState.empWins += 1;
      else throneDuelState.minWins += 1;

      const optBox = document.getElementById(`quizOpt_${chosenKey}`);
      if (optBox) optBox.classList.add('opt-correct');

      const empObj = players.get(empId);
      const minObj = players.get(minId);
      const badgeTitleEl = document.getElementById('quizBadgeTitle');
      if (badgeTitleEl && empObj && minObj) {
        badgeTitleEl.textContent = `⚔️ ĐOẠT NGÔI CÂU ${roundIndex + 1}/5 • 👑 ${empObj.nickname} (${throneDuelState.empWins}) vs (${throneDuelState.minWins}) 🟣 ${minObj.nickname}`;
      }

      playSound('promote');
      fb.className = 'quiz-live-feedback fb-right';
      fb.innerHTML = `⚡ <b>${escapeHtml(player.nickname)}</b> đáp đúng <b>${chosenKey}</b> siêu tốc! Tỷ số Câu ${roundIndex + 1}/5: 👑 <b>${throneDuelState.empWins} - ${throneDuelState.minWins}</b> 🟣`;

      if (player.seatId) {
        showFloatingToastOnSeat(player.seatId, `⚡ THẮNG CÂU ${roundIndex + 1}/5! (${throneDuelState.empWins}-${throneDuelState.minWins})`, 'toast-right');
      }
      addCompactCommentPill(player, `thắng Câu ${roundIndex + 1}/5 Quyết Đấu`, `⚔️ ${throneDuelState.empWins}-${throneDuelState.minWins}`);

      throneDuelState.nextRoundTimeout = setTimeout(() => {
        if (!throneDuelState) return;
        throneDuelState.roundIndex += 1;
        launchNextThroneDuelQuestion();
      }, 900);
      return true;
    }

    // Nếu 1 bên trả lời sai
    playSound('wrong');
    if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `❌ Chọn ${chosenKey}: SAI! (Mất quyền câu này)`, 'toast-wrong');
    }
    addCompactCommentPill(player, `đáp sai Câu ${roundIndex + 1}/5 (${chosenKey})`, '❌ Mất lượt');

    // Nếu cả 2 bên đều đã trả lời sai câu này -> Khóa câu, hiện đáp án và qua câu tiếp theo luôn
    if (throneDuelState.attemptedIds.size >= 2) {
      quizResolved = true;
      if (throneDuelState.botAnswerTimeout) {
        clearTimeout(throneDuelState.botAnswerTimeout);
        throneDuelState.botAnswerTimeout = null;
      }
      const rightKey = activeQuiz.correct;
      const rightText = activeQuiz.options[rightKey];
      const optBox = document.getElementById(`quizOpt_${rightKey}`);
      if (optBox) optBox.classList.add('opt-correct');
      AudioFX.playBellDing();

      fb.className = 'quiz-live-feedback fb-wrong';
      fb.innerHTML = `💥 Cả Vua & Thừa Tướng đều chọn sai! Đáp án đúng: <b>${rightKey}. ${escapeHtml(rightText)}</b>`;

      throneDuelState.nextRoundTimeout = setTimeout(() => {
        if (!throneDuelState) return;
        throneDuelState.roundIndex += 1;
        launchNextThroneDuelQuestion();
      }, 900);
    } else {
      fb.className = 'quiz-live-feedback fb-wrong';
      fb.innerHTML = `❌ <b>${escapeHtml(player.nickname)}</b> chọn <b>${chosenKey}</b> SAI và mất lượt! Cơ hội vàng cho đối thủ!`;
    }
    return true;
  }

  // Nếu sĩ tử đã trả lời đúng câu này rồi thì không cộng trùng nữa
  if (quizAnsweredUsers.has(player.uniqueId)) {
    if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `📜 Bạn đã đỗ câu này rồi!`, 'toast-right');
    }
    return true;
  }

  if (chosenKey === activeQuiz.correct) {
    quizAnsweredUsers.add(player.uniqueId);

    // CHUỖI ĐỖ ĐẠT LIÊN TIẾP (STREAK SYSTEM MỚI CÂN BẰNG)
    player.correctStreak = (player.correctStreak || 0) + 1;
    let streakBonus = 0;
    let streakText = '';
    if (player.correctStreak >= 5) {
      streakBonus = 20;
      streakText = ` 🔥 x${player.correctStreak} BẤT BẠI (+20đ)`;
      playSound('streak');
    } else if (player.correctStreak >= 3) {
      streakBonus = 10;
      streakText = ` ⚡ x${player.correctStreak} LIÊN ĐỖ (+10đ)`;
      playSound('streak');
    } else if (player.correctStreak === 2) {
      streakBonus = 5;
      streakText = ` 🔥 x2 STREAK (+5đ)`;
      playSound('streak');
    } else {
      playSound('promote');
    }

    AudioFX.playBellDing();

    const rankIdx = quizCorrectWinners.length;
    const baseReward = getQuizRankReward(rankIdx);
    const reward = baseReward;
    const isSpecialRoyal = Boolean(activeQuiz && activeQuiz.isSpecialRoyal);
    const multi = (isSpecialRoyal ? 3 : 1) * (specialBossRoundActive ? 3 : 1);
    let earnedPts = (baseReward.pts * multi) + streakBonus;
    if (player.doubleDown) { earnedPts *= 2; player.doubleDown = false; streakText += ' ⚡X2 QUÀ'; }

    // FIRST BLOOD: TOP 3 TỐC ĐỘ PHẢN XẠ NHANH NHẤT (+15đ, +10đ, +5đ)
    if (quizFirstBloodWinners.length < 3 && !quizFirstBloodWinners.some(w => w.uniqueId === player.uniqueId)) {
      const reactionSec = ((Date.now() - currentQuizStartTime) / 1000).toFixed(2);
      const fbRank = quizFirstBloodWinners.length + 1;
      const fbBonus = fbRank === 1 ? 15 : (fbRank === 2 ? 10 : 5);
      earnedPts += fbBonus;
      quizFirstBloodWinners.push({
        rank: fbRank,
        uniqueId: player.uniqueId,
        nickname: player.nickname,
        avatar: player.avatar,
        reactionSec,
        bonus: fbBonus
      });
      renderFirstBloodCard();
      if (fbRank === 1) {
        speakImperial(`Xuất sắc! Sĩ tử ${cleanUsernameForSpeech(player.nickname)} giành First Blood chỉ trong ${reactionSec} giây!`, true);
      }
    }

    quizCorrectWinners.push({ player, pts: earnedPts, rank: rankIdx + 1 });
    if (!quizFirstWinner) quizFirstWinner = player;

    fb.className = 'quiz-live-feedback fb-right';
    fb.innerHTML = `🏆 <b>${escapeHtml(player.nickname)}</b> đỗ <b>${baseReward.label}${isSpecialRoyal || specialBossRoundActive ? ' (X3 ĐẶC CÁCH)' : ''} (+${earnedPts}đ${streakText})</b>! (Đã có <b>${quizCorrectWinners.length}</b> người đúng • Còn <b>${quizCountdown}s</b>)`;

    player.score += earnedPts;
    player.lastActiveAt = Date.now();
    reassignAllSeats();

    if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `🏆 Hạng #${rankIdx + 1} ĐÚNG! +${earnedPts}đ`, 'toast-right');
      const seatObj = seats.find(s => s.id === player.seatId);
      if (seatObj && fxEngine) {
        fxEngine.triggerShockwave(seatObj.x, seatObj.y, rankIdx === 0 ? '#ffd700' : '#4ade80', rankIdx === 0 ? 200 : 140);
        if (rankIdx === 0) {
          fxEngine.triggerFireworks(seatObj.x, seatObj.y, 18, false);
        }
      }
    }

    updateTopHighlightPill(
      player,
      `<b>${escapeHtml(player.nickname)}</b> đạt ${reward.label}!`,
      `Trả lời đúng Đề Thi Đình • +${earnedPts} Công Trạng`,
      '🏆'
    );
    addCompactCommentPill(player, `đáp đúng Hạng #${rankIdx + 1}`, `🏆 +${earnedPts}`);
    checkRivalryAlert(player);
    return true;
  }

  // TRẢ LỜI SAI: BỊ TRỪ ĐIỂM (-10đ, Boss Round -30đ) VÀ RESET CHUỖI ĐỖ ĐẠT
  AudioFX.playWrongBuzz();
  playSound('wrong');
  player.correctStreak = 0;
  const penalty = specialBossRoundActive ? 30 : 10;
  player.score = Math.max(0, player.score - penalty);
  reassignAllSeats();

  fb.className = 'quiz-live-feedback fb-wrong';
  fb.innerHTML = `❌ <b>${escapeHtml(player.nickname)}</b> chọn <b>${chosenKey}</b> CHƯA ĐÚNG (-${penalty}đ)! Hãy suy nghĩ kỹ & chọn lại!`;

  if (player.seatId) {
    showFloatingToastOnSeat(player.seatId, `❌ Chọn ${chosenKey}: Chưa đúng (-${penalty}đ)!`, 'toast-wrong');
  }

  addCompactCommentPill(player, `chọn đáp án ${chosenKey} (Sai)`, '❌ Thử lại');
  return true;
}

// Kiểm tra báo động kịch tính "SẮP CƯỚP GHẾ" để kích thích người xem thả tim/comment
function checkRivalryAlert(challenger) {
  if (!challenger || Date.now() - lastRivalryAlertAt < 18000) return;
  const sorted = Array.from(players.values())
    .filter(p => p.seatId && p.tier >= 2)
    .sort((a, b) => b.score - a.score);

  for (const defender of sorted) {
    if (defender.uniqueId === challenger.uniqueId) continue;
    const diff = defender.score - challenger.score;
    if (diff > 0 && diff <= 45 && defender.tier >= challenger.tier) {
      lastRivalryAlertAt = Date.now();
      const targetTitle = getTierTitle(defender.tier);
      updateTopHighlightPill(
        challenger,
        `⚔️ SẮP CƯỚP GHẾ: <b>${escapeHtml(challenger.nickname)}</b> áp sát <b>${escapeHtml(defender.nickname)}</b>!`,
        `Chỉ còn kém ${diff}đ để đoạt ghế ${targetTitle} • Thả tim ngay!`,
        '🔥'
      );
      if (!activeQuiz) {
        speakImperial(`Kịch tính! ${challenger.nickname} chỉ còn kém ${defender.nickname} ${diff} điểm để đoạt ghế ${targetTitle}!`);
      }
      break;
    }
  }
}

// =========================================================================
// 8. XỬ LÝ SỰ KIỆN TƯƠNG TÁC (COMMENT, LIKE, SHARE, FOLLOW, MEMBER, GIFT)
// =========================================================================
function getOrCreatePlayer(uniqueId, nickname, avatar) {
  let p = players.get(uniqueId);
  const catAvt = getCatMemeAvatar(p ? p.tier : 1, uniqueId);
  if (!p) {
    p = {
      uniqueId,
      nickname: nickname || uniqueId,
      avatar: catAvt,
      score: (savedProfiles[uniqueId] && savedProfiles[uniqueId].score > 5) ? savedProfiles[uniqueId].score : 5,
      seatId: null,
      tier: 1,
      shieldUntil: 0,
      joinedAt: Date.now(),
      lastActiveAt: Date.now()
    };
    players.set(uniqueId, p);
    if (!uniqueId.startsWith('bot_')) applyDailyStreak(p);
    playSound('join');
  } else {
    if (nickname) p.nickname = nickname;
    p.avatar = getCatMemeAvatar(p.tier || 1, p.uniqueId);
    p.lastActiveAt = Date.now();
  }
  return p;
}

function welcomeNewSeatedScholar(player, actionLabel, gainedPts) {
  if (!player || !player.seatId) return;
  const seatObj = seats.find(s => s.id === player.seatId);
  strikeSeatWithLight(seatObj, false);
  showFloatingToastOnSeat(player.seatId, `🏮 +${gainedPts}đ`, 'toast-right');
  updateTopHighlightPill(
    player,
    `<b>${escapeHtml(player.nickname)}</b> nhập trường thi`,
    `Ghế ${getTierTitle(player.tier)} • +${gainedPts}đ`,
    '🏮'
  );
}

function handleTikTokEvent(evt) {
  if (!evt || !evt.uniqueId) return;
  const mult = doublePointsSecondsLeft > 0 ? (currentScoreMultiplier || 2) : 1;
  const multTag = mult > 1 ? ` 🔥X${mult}` : '';

  if (evt.type === 'chat') {
    const text = (evt.comment || '').trim();
    const lower = text.toLowerCase();
    const wasAlreadySeated = players.has(evt.uniqueId) && players.get(evt.uniqueId).seatId;
    const player = getOrCreatePlayer(evt.uniqueId, evt.nickname, evt.avatar);
    player.lastActiveAt = Date.now();

    const normCmd = normalizeVN(text);

    // XỬ LÝ MINIGAME ĐẶC BIỆT: CƯỚP LỘC ĐẬU XUÂN & ĐẤU TRƯỜNG PVP
    if (treasureChestState && treasureChestState.active) {
      if (normCmd.includes('phatloc') || normCmd.includes('phat loc') || normCmd.includes('loc') || lower === '1') {
        damageTreasureChest(player, 2);
        return;
      }
    }
    if (pvpArenaState && pvpArenaState.active) {
      const opt = text.toUpperCase().trim();
      if (opt === 'A' || opt === 'B') {
        votePvpTeam(player, 'van');
        return;
      } else if (opt === 'C' || opt === 'D') {
        votePvpTeam(player, 'vo');
        return;
      }
    }

    if (activeQuiz && !quizResolved) {
      const handledByQuiz = evaluateQuizComment(player, text);
      if (handledByQuiz) return;
    }

    if (handleRandomEventComment(player, normCmd)) return;

    // LỆNH QUYỀN LỰC QUAN LỚN CỦA TOP 1 HOẶC HOÀNG ĐẾ: /giam @tên hoặc /thuong @tên
    const sorted = Array.from(players.values()).sort((a, b) => b.score - a.score);
    const top1Player = sorted[0];
    const isTop1OrEmperor = (top1Player && top1Player.uniqueId === player.uniqueId) || (currentEmperorId === player.uniqueId);

    const jailMatch = text.match(/^(?:(?:\/|!)(?:giam|nhot))\s+@?(.+)$/i) ||
                      normCmd.match(/^(?:(?:\/|!)(?:giam|nhot))\s+@?(.+)$/i);
    if (jailMatch) {
      if (!isTop1OrEmperor) {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚠️ Chỉ Top 1 hoặc Hoàng Đế mới có quyền nhốt ngục!', 'toast-wrong');
        return;
      }
      const targetQuery = jailMatch[1].trim();
      const target = findTargetByQuery(Array.from(players.values()).filter(p => p.uniqueId !== player.uniqueId), targetQuery);
      if (target) {
        target.jailedUntil = Date.now() + 30000;
        showImperialDecree('⛓️ ĐẠI LAO GIAM HÃM ⛓️', `${player.nickname} (Top 1) hạ lệnh nhốt ${target.nickname} vào ngục tối 30 giây!`);
        speakImperial(`Đại nhân ${player.nickname} hạ lệnh: Nhốt sĩ tử ${target.nickname} vào ngục tối ba mươi giây!`, true);
        if (target.seatId) {
          showFloatingToastOnSeat(target.seatId, '⛓️ BỊ NHỐT NGỤC 30S! (Tặng 1 hoa hồng để thoát)', 'toast-wrong');
        }
        reassignAllSeats();
      } else {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, `Không tìm thấy sĩ tử "${targetQuery}"!`, 'toast-wrong');
      }
      return;
    }

    const rewardMatch = text.match(/^(?:(?:\/|!)(?:thuong|banthuong))\s+@?(.+)$/i) ||
                        normCmd.match(/^(?:(?:\/|!)(?:thuong|banthuong))\s+@?(.+)$/i);
    if (rewardMatch) {
      if (!isTop1OrEmperor) {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚠️ Chỉ Top 1 hoặc Hoàng Đế mới có quyền ban thưởng!', 'toast-wrong');
        return;
      }
      const targetQuery = rewardMatch[1].trim();
      const target = findTargetByQuery(Array.from(players.values()).filter(p => p.uniqueId !== player.uniqueId), targetQuery);
      if (target) {
        target.score += 100;
        showImperialDecree('🎁 BAN THƯỞNG CÔNG TRẠNG 🎁', `${player.nickname} (Top 1) ban thưởng cho ${target.nickname} +100 điểm công trạng!`);
        speakImperial(`Đại nhân ${player.nickname} ban thưởng: Sĩ tử ${target.nickname} được cộng một trăm điểm công trạng!`, true);
        if (target.seatId) {
          showFloatingToastOnSeat(target.seatId, '🎁 ĐƯỢC TOP 1 BAN THƯỞNG +100Đ!', 'toast-right');
        }
        reassignAllSeats();
      } else {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, `Không tìm thấy sĩ tử "${targetQuery}"!`, 'toast-wrong');
      }
      return;
    }

    // LỆNH TRA CỨU ĐIỂM & THỨ HẠNG CÁ NHÂN: !diem / diem / hang / rank
    const scoreQueryMatch = normCmd.match(/^(?:!?\s*(?:diem|xem\s*diem|hang|rank))\b/i);
    if (scoreQueryMatch) {
      const allSorted = Array.from(players.values()).sort((a, b) => b.score - a.score);
      const myRank = allSorted.findIndex(p => p.uniqueId === player.uniqueId) + 1;
      const myTitle = getTierTitle(player.tier);
      if (player.seatId) {
        showFloatingToastOnSeat(player.seatId, `📜 ${myTitle} • Hạng #${myRank} (${player.score.toLocaleString()}đ)`, 'toast-right');
      }
      addCompactCommentPill(player, `tra cứu điểm (Hạng #${myRank})`, `📜 ${player.score}đ`);
      return;
    }

    // LỆNH HỎI THĂM HOÀNG ĐẾ: !vua / vua / hoangde
    const kingQueryMatch = normCmd.match(/^(?:!?\s*(?:vua|hoang\s*de|ngai\s*vang))\b/i);
    if (kingQueryMatch) {
      const emp = currentEmperorId ? players.get(currentEmperorId) : null;
      if (emp) {
        if (player.seatId) {
          showFloatingToastOnSeat(player.seatId, `👑 Vua ${emp.nickname} (${emp.score.toLocaleString()}đ) • ${Math.round(dragonQi)}% Khí`, 'toast-right');
        }
        addCompactCommentPill(player, `hỏi thăm Long Thể Vua`, `👑 ${Math.round(dragonQi)}%`);
      } else {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '👑 Ngai vàng đang trống! Gõ A/B/C/D để lên Vua!', 'toast-right');
      }
      return;
    }

    // LỆNH HƯỚNG DẪN CÚ PHÁP: !help / lenh / huongdan
    const helpQueryMatch = normCmd.match(/^(?:!?\s*(?:help|lenh|huong\s*dan|hd))\b/i);
    if (helpQueryMatch) {
      if (player.seatId) {
        showFloatingToastOnSeat(player.seatId, '📜 Đáp A/B/C/D đua top • !diem xem rank • Thừa tướng: đoạt ngôi 50 lần', 'toast-right');
      }
      addCompactCommentPill(player, 'tra cứu bảng lệnh Khoa Cử', '📜 Hướng dẫn');
      return;
    }

    const smiteMatch = text.match(/^(?:!?\s*(?:tram|trảm|chem|chém))(?:\s+(.*))?$/i) ||
                       normCmd.match(/^(?:!?\s*(?:tram|chem))(?:\s+(.*))?$/i);
    if (smiteMatch) {
      if (currentEmperorId !== player.uniqueId) {
        if (player.seatId) {
          showFloatingToastOnSeat(player.seatId, `⚠️ Chỉ Hoàng Đế mới được hạ Lệnh Trảm!`, 'toast-wrong');
        }
        return;
      }
      const targetQuery = (smiteMatch[1] || '').replace(/^@+/, '').trim();
      executeKingSmite(targetQuery, false);
      return;
    }

    const promoteMatch = text.match(/^(?:!?\s*(?:sacphong|sắc phong|thuong|thưởng))(?:\s+(.*))?$/i);
    if (promoteMatch) {
      if (currentEmperorId !== player.uniqueId) return;
      const targetQuery = (promoteMatch[1] || '').replace(/^@+/, '').trim();
      executeKingPromote(targetQuery);
      return;
    }

    // LỆNH "ĐOẠT NGÔI / SOÁN NGÔI" DÀNH CHO TẢ / HỮU THỪA TƯỚNG (TIER 5)
    const usurpMatch = normCmd.match(/^(?:!?\s*(?:doat\s*ngoi|doatngoi|soan\s*ngoi|soanngoi|cuop\s*ngoi|cuopngoi|lat\s*do|binh\s*bien))\b/i);
    if (usurpMatch) {
      if (player.uniqueId === currentEmperorId) {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '👑 Bệ hạ đang là Hoàng Đế rồi!', 'toast-right');
        return;
      }
      if (player.tier < 5) {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚠️ Chỉ Thừa Tướng (≥900đ) mới được hô Đoạt Ngôi!', 'toast-wrong');
        return;
      }
      if (throneDuelState) {
        if (player.seatId) showFloatingToastOnSeat(player.seatId, '⚔️ Đang trong trận Quyết Đấu Đoạt Ngôi!', 'toast-wrong');
        return;
      }

      const curChants = (ministerUsurpChantsByUser.get(player.uniqueId) || 0) + 1;
      ministerUsurpChantsByUser.set(player.uniqueId, curChants);
      player.score += 5; // Khích lệ 5 công trạng mỗi lần gõ
      reassignAllSeats();

      if (curChants >= USURP_CHANT_TARGET) {
        ministerUsurpChantsByUser.set(player.uniqueId, 0);
        showImperialDecree(
          '⚡ BINH BIẾN PHÁT ĐỘNG ⚡',
          `Thừa Tướng ${player.nickname} đã gõ đủ ${USURP_CHANT_TARGET}/${USURP_CHANT_TARGET} lần Đoạt Ngôi! Chính thức mở trận Quyết Đấu với Hoàng Đế!`
        );
        addCompactCommentPill(player, `gõ đủ 50/50 Đoạt Ngôi!`, '⚔️ QUYẾT ĐẤU');
        executeMinisterUsurp(player.uniqueId, false, true);
        emitAdminAction({ kind: 'usurp', uniqueId: player.uniqueId, isManualAdmin: false, force: true });
      } else {
        if (player.seatId) {
          showFloatingToastOnSeat(player.seatId, `⚔️ Đoạt Ngôi ${curChants}/${USURP_CHANT_TARGET} lần!`, 'toast-wrong');
        }
        addCompactCommentPill(player, `hô Đoạt Ngôi (${curChants}/${USURP_CHANT_TARGET})`, '⚔️ Tích lũy');
        updateTopHighlightPill(
          player,
          `⚔️ Thừa Tướng <b>${escapeHtml(player.nickname)}</b> đang chuẩn bị Binh Biến!`,
          `${curChants}/${USURP_CHANT_TARGET} lần • Đủ 50 lần mở Quyết Đấu`,
          '⚔️'
        );
        renderGiftHud();
      }
      return;
    }

    const isJoinCmd = lower.includes('!thi') || lower === 'thi' || lower === '1';
    const gained = (isJoinCmd ? 4 : 2) * mult;
    player.score += gained;
    reassignAllSeats();

    if (player.seatId) {
      if (isJoinCmd || !wasAlreadySeated) {
        welcomeNewSeatedScholar(player, 'Gõ bình luận báo danh', gained);
        addCompactCommentPill(player, `vào bàn Khoa Cử`, `🏮 +${gained}${multTag}`);
      } else {
        showFloatingToastOnSeat(player.seatId, `💬 ${text.slice(0, 16)} (+${gained}đ${multTag})`);
        addCompactCommentPill(player, text.slice(0, 22), `💬 +${gained}${multTag}`);
      }
    }
    checkRivalryAlert(player);
  }

  else if (evt.type === 'like') {
    const wasAlreadySeated = players.has(evt.uniqueId) && players.get(evt.uniqueId).seatId;
    const player = getOrCreatePlayer(evt.uniqueId, evt.nickname, evt.avatar);
    const pts = Math.max(1, Math.min(3, Math.round((evt.likeCount || 15) * 0.1))) * mult;
    player.score += pts;

    // TÍCH CÔNG ĐỨC / ĐỐT NHANG CẦU MAY (GLOBAL FEVER BAR)
    addFeverLikes(Math.max(1, Math.round((evt.likeCount || 15) * 0.4)));

    // NẾU ĐANG TRONG MÀN MỞ RƯƠNG CHÂU BÁU -> THẢ TIM GÂY 1 SÁT THƯƠNG ĐẬP RƯƠNG!
    if (treasureChestState && treasureChestState.active) {
      damageTreasureChest(player, 1);
    }

    if (currentEmperorId === player.uniqueId) {
      dragonQi = Math.min(100, dragonQi + 5);
    }
    reassignAllSeats();
    if (!wasAlreadySeated && player.seatId) {
      welcomeNewSeatedScholar(player, 'Thả tim nhập trường thi', pts);
    } else if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `❤️ +${pts}đ${multTag}`);
    }
    addCompactCommentPill(player, `thả tim khích lệ`, `❤️ +${pts}${multTag}`);
    checkRivalryAlert(player);
  }

  else if (evt.type === 'share' || evt.type === 'follow') {
    const wasAlreadySeated = players.has(evt.uniqueId) && players.get(evt.uniqueId).seatId;
    const player = getOrCreatePlayer(evt.uniqueId, evt.nickname, evt.avatar);
    const pts = (evt.type === 'follow' ? 25 : 20) * mult;
    player.score += pts;
    reassignAllSeats();
    const label = evt.type === 'follow' ? 'Follow kênh' : 'Chia sẻ Live';
    if (!wasAlreadySeated && player.seatId) {
      welcomeNewSeatedScholar(player, label, pts);
    } else if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `✨ ${label} +${pts}đ`);
    }
    addCompactCommentPill(player, label, `✨ +${pts}${multTag}`);
    checkRivalryAlert(player);
  }

  else if (evt.type === 'member') {
    // Khán giả mới bước vào phòng LIVE -> Nếu bàn còn ghế trống thì tự động mời ngồi bàn luôn!
    const emptySeatsCount = seats.filter(s => !s.occupantId && s.tier <= 2).length;
    if (!players.has(evt.uniqueId) && emptySeatsCount > 0) {
      const player = getOrCreatePlayer(evt.uniqueId, evt.nickname, evt.avatar);
      player.score = 10;
      reassignAllSeats();
      if (player.seatId) {
        welcomeNewSeatedScholar(player, 'Vừa bước vào Điện Thi Đình', 10);
        addCompactCommentPill(player, `bước vào trường thi`, `🏮 +10`);
      }
    }
  }

  else if (evt.type === 'gift') {
    const player = getOrCreatePlayer(evt.uniqueId, evt.nickname, evt.avatar);
    const coins = Number(evt.diamondCount || 1);
    const addedScore = coins * 12 * (giftBoostLeft > 0 ? 2 : 1);

    if (evt.isShield) {
      player.shieldUntil = Date.now() + 3 * 60 * 1000;
    }

    // --- PAY-TO-WIN CƠ CHẾ QUÀ TẶNG THEO BẢN THIẾT KẾ CHI TIẾT ---
    // 1. Hoa hồng (1-3 xu) - "Đút Lót Giám Khảo": Cứu thoát khỏi ngục tối ngay lập tức!
    if (coins <= 3) {
      if (player.jailedUntil && player.jailedUntil > Date.now()) {
        player.jailedUntil = 0;
        showFloatingToastOnSeat(player.seatId, '🌹 Đút lót thành công! Đã phá ngục!', 'toast-right');
        speakImperial(`Sĩ tử ${player.nickname} dâng hoa hồng đút lót quan giám khảo, phá ngục thành công!`, true);
      }
    }
    // 2. Quà trung bình (10 - 99 xu) - "Mua Quan Bán Chức": Thăng 1 bậc phẩm hàm hoặc khiên 3 câu
    else if (coins >= 10 && coins < 100) {
      player.shieldUntil = Date.now() + 3 * 60 * 1000;
      if (player.tier < 5) {
        const nextSeat = DEFAULT_SEATS.find(s => s.tier === player.tier + 1);
        if (nextSeat) player.score = Math.max(player.score, nextSeat.minScore + 20);
      }
      showFloatingToastOnSeat(player.seatId, '🛡️ Mua Quan Bán Chức! Khiên Bất Tử 3 câu!', 'toast-right');
      speakImperial(`Sĩ tử ${player.nickname} dâng lễ lớn, thăng cấp phẩm hàm và nhận khiên bảo vệ ba câu!`, true);
      if (fxEngine && typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(25);
    }
    // 3. Quà lớn (100+ xu) - "Thánh Chỉ Giáng Lâm": Rồng bay rực rỡ, vinh danh 5 phút, x3 điểm toàn server!
    else if (coins >= 100) {
      showImperialDecree('🐲 THÁNH CHỈ GIÁNG LÂM 🐲', `${player.nickname} dâng đại lễ (${coins} xu)! Rồng vàng xuất hiện, vinh danh tột đỉnh & x3 điểm!`);
      speakImperial(`Thánh chỉ giáng lâm! Sĩ tử ${player.nickname} dâng đại lễ, rồng vàng giáng thế, vinh danh toàn cõi!`, true);
      if (fxEngine) {
        fxEngine.triggerGrandCelebration(50, 35);
        if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(60);
      }
      activateGlobalFeverMode(180);
    }

    player.score += addedScore;
    recordGiftForHud(player, coins);
    applyGiftEffect(player, evt);

    if (currentEmperorId === player.uniqueId) {
      dragonQi = Math.min(100, dragonQi + Math.min(60, coins));
      if (coins >= 50 && kingSmiteTokens < 3) {
        kingSmiteTokens = Math.min(3, kingSmiteTokens + 1);
      }
    }

    updateTopHighlightPill(
      player,
      `<b>${escapeHtml(player.nickname)}</b> tặng ${escapeHtml(evt.giftName)}`,
      `+${addedScore.toLocaleString()}đ`,
      evt.icon || '🎁'
    );
    addCompactCommentPill(player, `tặng ${evt.giftName}`, `🎁 +${addedScore}`);

    reassignAllSeats();
    if (player.seatId) {
      showFloatingToastOnSeat(player.seatId, `${evt.icon || '🎁'} ${evt.giftName} +${addedScore}đ`, 'toast-right');
    }
  }
}

function findTargetByQuery(candidates, rawQuery) {
  const q = String(rawQuery || '').trim().toLowerCase();
  const qNorm = normalizeVN(q);
  if (!q) return null;

  // 1. Chém theo số thứ tự bảng xếp hạng (ví dụ: "chém 2", "trảm hạng 3")
  const rankMatch = qNorm.match(/^(?:hang\s*|top\s*|so\s*|#)?(\d+)$/);
  if (rankMatch) {
    const rankNum = Number(rankMatch[1]);
    const allSorted = Array.from(players.values()).sort((a, b) => b.score - a.score);
    const picked = allSorted[rankNum - 1];
    if (picked && picked.uniqueId !== currentEmperorId) return picked;
  }

  // 2. Chém theo tên chức quan (ví dụ: "chém thừa tướng", "trảm trạng nguyên", "chém cử nhân")
  for (const p of candidates) {
    if (!p.seatId) continue;
    const seatObj = seats.find(s => s.id === p.seatId);
    const titleNorm = normalizeVN(seatObj ? seatObj.title : getTierTitle(p.tier));
    if (titleNorm && qNorm.length >= 3 && titleNorm.includes(qNorm)) {
      return p;
    }
  }

  // 3. Chém theo bất kỳ phần nào của tên (có dấu hoặc không dấu)
  return (
    candidates.find(p => p.nickname.toLowerCase().includes(q)) ||
    candidates.find(p => normalizeVN(p.nickname).includes(qNorm)) ||
    candidates.find(p => normalizeVN(p.uniqueId).includes(qNorm))
  );
}

function executeKingSmite(targetNameQuery, isManualAdmin = false) {
  const candidates = Array.from(players.values()).filter(p => p.uniqueId !== currentEmperorId);
  if (candidates.length === 0) return;

  const emp = currentEmperorId ? players.get(currentEmperorId) : null;
  if (throneDuelState) {
    if (emp && emp.seatId) {
      showFloatingToastOnSeat(emp.seatId, '⚔️ Đang trong Quyết Đấu Đoạt Ngôi, không thể dùng Lệnh Trảm!', 'toast-wrong');
    }
    return;
  }
  const now = Date.now();

  // Kiểm tra giới hạn số lượt Lệnh Bài Trảm & Hồi chiêu 45s (trừ khi Admin bấm nút trực tiếp)
  if (!isManualAdmin) {
    if (kingSmiteTokens <= 0) {
      if (emp && emp.seatId) {
        showFloatingToastOnSeat(emp.seatId, `⚠️ Đã hết Lệnh Bài Trảm! Dâng Bảo Kiếm để hồi lệnh!`, 'toast-wrong');
      }
      updateTopHighlightPill(
        emp,
        `⚠️ <b>Hoàng Đế</b> đã dùng hết <b>Lệnh Bài Trảm</b>!`,
        `Tặng Bảo Kiếm (10 xu) để hồi ngay Lệnh Trảm & xóa thời gian chờ!`,
        '🗡️'
      );
      speakImperial(`Bệ hạ đã dùng hết Lệnh Bài Trảm! Cần thần tử dâng Thượng Phương Bảo Kiếm để hồi phục!`);
      return;
    }

    if (now < kingSmiteCooldownUntil) {
      const waitSec = Math.ceil((kingSmiteCooldownUntil - now) / 1000);
      if (emp && emp.seatId) {
        showFloatingToastOnSeat(emp.seatId, `⏳ Chờ hồi chiêu ${waitSec}s! (Tặng Bảo Kiếm để chém ngay)`, 'toast-wrong');
      }
      return;
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  let victim = findTargetByQuery(candidates, targetNameQuery);

  // Nếu Vua gõ tên mà không tìm thấy ai khớp tên đó -> Báo cho Vua biết để gõ lại tên đúng
  if (targetNameQuery && !victim) {
    if (emp && emp.seatId) {
      showFloatingToastOnSeat(emp.seatId, `❓ Không tìm thấy "${targetNameQuery.slice(0, 12)}"!`, 'toast-wrong');
    }
    return;
  }

  if (!victim) {
    victim = candidates[0];
  }

  // Bảo hộ người có Hộ Thân Phù hoặc vừa bị chém trong vòng 2 phút (không cho chém liên tiếp 1 người)
  if (!isManualAdmin && victim.shieldUntil && victim.shieldUntil > now) {
    const shieldLeft = Math.ceil((victim.shieldUntil - now) / 1000);
    if ( victim.seatId ) {
      showFloatingToastOnSeat(victim.seatId, `🛡️ Hộ Thân Phù miễn trảm (${shieldLeft}s)!`, 'toast-right');
    }
    speakImperial(`Sĩ tử ${victim.nickname} đang có Kim Bài Miễn Tử hộ thể, miễn tội trảm!`);
    return;
  }

  if (!isManualAdmin) {
    kingSmiteTokens = Math.max(0, kingSmiteTokens - 1);
    kingSmiteCooldownUntil = now + 45 * 1000; // Hồi chiêu 45 giây giữa 2 lần chém
  }

  // Miễn tử 2 phút sau khi bị chém để tránh bị Vua đè 1 người chém liên tục
  victim.shieldUntil = now + 120 * 1000;

  const penalty = Math.max(60, Math.round(victim.score * 0.35));
  victim.refundable = penalty;
  victim.score = Math.max(5, victim.score - penalty);
  playSound('smite');

  if (victim.seatId) {
    const vSeat = seats.find(s => s.id === victim.seatId);
    if (vSeat) strikeSeatWithLight(vSeat, true);
    showFloatingToastOnSeat(victim.seatId, `⚔️ Bị Vua trảm -${penalty}đ!`, 'toast-wrong');
  }

  showImperialDecree(
    '⚔️ LỆNH TRẢM HOÀNG ĐẾ ⚔️',
    `${victim.nickname} bị Hoàng Đế hạ lệnh trảm (-${penalty} Công Trạng)! (Còn ${kingSmiteTokens} Lệnh Bài)`
  );
  updateTopHighlightPill(
    victim,
    `⚔️ Hoàng Đế hạ lệnh trảm <b>${escapeHtml(victim.nickname)}</b> (-${penalty}đ)!`,
    `Lệnh Bài Trảm còn lại: ${kingSmiteTokens} • Người bị chém được miễn tử 2 phút`,
    '⚔️'
  );
  speakImperial(`Hoàng Đế ban lệnh! Giáng chức ${victim.nickname}, trừ ${penalty} công trạng!`, true);
  addCompactCommentPill(victim, `bị Vua trảm (Còn ${kingSmiteTokens} lệnh)`, `⚔️ -${penalty}`);
  reassignAllSeats();
  updateHUDAndTables();
}

// =========================================================================
// QUÀ TẶNG CÓ HIỆU ỨNG (1: Sắc phong • 2: 50:50 Quyết Đấu • 4: Cứu giá • 6: Đặt tên đề • Thánh Chỉ)
// =========================================================================
let decreeState = null; // { empId } - Thánh Chỉ: Vua phải trả lời đề
let nextQuizSponsor = null; // Tên người dâng đề tiếp theo

function applyFiftyFifty() {
  if (!throneDuelState || !activeQuiz || quizResolved) return;
  const wrongKeys = ['A', 'B', 'C', 'D'].filter(k => k !== activeQuiz.correct).slice(0, 2);
  wrongKeys.forEach(k => {
    const el = document.getElementById('quizOpt_' + k);
    if (el) { el.style.opacity = '0.2'; el.style.textDecoration = 'line-through'; }
  });
}

function applyGiftEffect(player, evt) {
  const coins = Number(evt.diamondCount || 1);
  const emp = currentEmperorId ? players.get(currentEmperorId) : null;
  const gname = evt.giftName || 'quà';
  const normName = normalizeVN(gname.toLowerCase());

  // 1. Quyết Đấu Vua vs Thừa Tướng: người đang đấu tặng quà >= 20 xu -> được quyền 50:50
  if (throneDuelState && coins >= 20 &&
      (player.uniqueId === throneDuelState.empId || player.uniqueId === throneDuelState.minId)) {
    applyFiftyFifty();
    addCompactCommentPill(player, 'dùng 50:50 Quyết Đấu', '🎯 -2 đáp án');
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '🎯 50:50 Trợ Giúp!', 'toast-right');
    return;
  }
  if (throneDuelState) return;

  // 1b. Rương Kho Báu (20 xu hoặc quà tên "rương"): quay gacha ngẫu nhiên
  if (evt.isChest || coins === 20 || normName.includes('ruong') || normName.includes('chest') || normName.includes('treasure')) {
    openTreasureChest(player, emp);
    return;
  }

  // 2. Quà Sư Tử Vàng (300 xu): ĐĂNG CƠ HOÀNG ĐẾ LẬP TỨC
  if (coins >= 300 || normName.includes('su tu') || normName.includes('lion')) {
    player.score = Math.max(player.score, 3600);
    reassignAllSeats();
    return;
  }

  // 3. Quà Pháo Hoa (100 xu): KÍCH HOẠT GIỜ VÀNG X3 TOÀN PHÒNG LIVE TRONG 60 GIÂY
  if (evt.isFirework || coins >= 100 || normName.includes('phao hoa') || normName.includes('firework')) {
    triggerGoldenHourX3(60);
    showImperialDecree('🎆 ĐẠI ĐIỂN PHÁO HOA 🎆', `${player.nickname} dâng Pháo Hoa! Khai mở GIỜ VÀNG NHÂN 3 ĐIỂM toàn trường thi trong 60 giây!`);
    addCompactCommentPill(player, 'khai mở Giờ Vàng X3', '🎆 X3 ĐIỂM (60s)');
    return;
  }

  // 4. Quà Thiên Nga (50 xu): THĂNG THỪA TƯỚNG + HỒI ĐẦY 3 LỆNH TRẢM CHO VUA + ĐẠI XÁ TOÀN TRIỀU
  if (coins >= 50 || normName.includes('thien nga') || normName.includes('swan')) {
    player.score += 1200;
    if (emp) {
      kingSmiteTokens = 3;
      kingSmiteCooldownUntil = 0;
      dragonQi = 100;
    }
    let rescuedCount = 0;
    players.forEach(p => {
      if (p.refundable && p.refundable > 0) {
        p.score += p.refundable;
        p.refundable = 0;
        rescuedCount++;
      }
    });
    showImperialDecree('🦢 ĐẠI XÁ THIÊN HẠ 🦢', `${player.nickname} dâng Thiên Nga! Sắc phong Thừa Tướng, hồi đầy 3 Lệnh Trảm cho Vua & đại xá ${rescuedCount > 0 ? rescuedCount + ' thần dân' : 'toàn triều'}!`);
    speakImperial(`Đại xá thiên hạ! ${player.nickname} dâng Thiên Nga thăng cấp Thừa Tướng, cứu giá toàn triều và hồi ba Lệnh Bài Trảm cho Hoàng Đế!`, true);
    addCompactCommentPill(player, 'Đại Xá & Hồi 3 Trảm Vua', '🦢 ĐẠI XÁ');
    reassignAllSeats();
    updateHUDAndTables();
    return;
  }

  // 5. Quà Bảo Kiếm / Bánh Rán (10 - 49 xu): DÂNG BẢO KIẾM HỒI LỆNH TRẢM & XÓA COOLDOWN CHO VUA!
  if (evt.isSword || normName.includes('kiem') || normName.includes('sword') || normName.includes('banh ran') || (coins >= 10 && coins < 50 && !evt.isShield)) {
    if (emp) {
      kingSmiteTokens = Math.min(5, kingSmiteTokens + 1); // Cho phép tích lũy tới 5 lệnh trảm!
      kingSmiteCooldownUntil = 0; // XÓA NGAY COOLDOWN để Vua chém được luôn!
      dragonQi = Math.min(100, dragonQi + 50);
      playSound('smite');
      strikeSeatWithLight(seats.find(s => s.tier === 6), true);
      showImperialDecree('🗡️ DÂNG BẢO KIẾM 🗡️', `${player.nickname} dâng Thượng Phương Bảo Kiếm cho Hoàng Đế! Vua được hồi Lệnh Trảm (${kingSmiteTokens}/5) & XÓA THỜI GIAN CHỜ!`);
      speakImperial(`Thần tử ${player.nickname} dâng Thượng Phương Bảo Kiếm cho Hoàng Đế! Vua hồi Lệnh Bài Trảm và sẵn sàng trảm tặc!`, true);
      addCompactCommentPill(player, `Dâng Kiếm hồi Lệnh Trảm Vua (${kingSmiteTokens}/5)`, '🗡️ HỒI TRẢM');
      if (emp.seatId) showFloatingToastOnSeat(emp.seatId, `🗡️ Hồi Lệnh Trảm (${kingSmiteTokens}/5)!`, 'toast-right');
      updateHUDAndTables();
    } else {
      player.score += 500;
      showImperialDecree('🗡️ DÂNG BẢO KIẾM 🗡️', `${player.nickname} dâng Bảo Kiếm! Ngai Vàng đang trống, nhận ngay +500 Công Trạng thăng quan!`);
      reassignAllSeats();
    }
    return;
  }

  // 6. Quà Hộ Thân Phù / Khiên Kim Cang (15 xu): Miễn trảm 5 phút
  if (evt.isShield || normName.includes('khien') || normName.includes('shield') || normName.includes('phu')) {
    player.shieldUntil = Date.now() + 5 * 60 * 1000;
    playSound('promote');
    if (player.seatId) showFloatingToastOnSeat(player.seatId, '🛡️ Khiên Kim Cang: Miễn trảm 5 phút!', 'toast-right');
    addCompactCommentPill(player, 'Bật Khiên Miễn Trảm 5 phút', '🛡️ BẢO VỆ');
    updateTopHighlightPill(player, `<b>${escapeHtml(player.nickname)}</b> kích hoạt <b>Khiên Kim Cang</b>!`, 'Miễn trảm 5 phút • Kháng mọi lệnh chém của Vua!', '🛡️');
    renderSeats();
    return;
  }

  // 7. Quà Trà Sữa (5 xu): Thăng Cử Nhân
  if (coins >= 5 && coins < 10) {
    player.score += 250;
    addCompactCommentPill(player, 'Tặng Trà Sữa lên Cử Nhân', '🧋 +250đ');
    reassignAllSeats();
    return;
  }

  // 8. Quà Hoa Hồng (1 xu): Thăng Tú Tài
  if (coins < 5) {
    player.score += 100;
    addCompactCommentPill(player, 'Tặng Hoa Hồng lên Tú Tài', '🌹 +100đ');
    reassignAllSeats();
    return;
  }
}

function executeKingPromote(targetNameQuery) {
  const candidates = Array.from(players.values()).filter(p => p.uniqueId !== currentEmperorId);
  if (candidates.length === 0) return;

  candidates.sort((a, b) => b.score - a.score);
  let target = findTargetByQuery(candidates, targetNameQuery) || candidates[0];
  target.score += 350;
  showImperialDecree('📜 THÁNH CHỈ SẮC PHONG 📜', `Hoàng Đế ban thưởng ${target.nickname} +350 Công Trạng!`);
  speakImperial(`Hoàng đế sắc phong ${target.nickname}, ban thưởng 350 công trạng!`);
  addCompactCommentPill(target, `được Vua sắc phong`, `📜 +350`);
  reassignAllSeats();
}

// CHỨC NĂNG TRANH ĐOẠT NGÔI VỊ (BINH BIẾN SOÁN NGÔI) DÀNH CHO TẢ / HỮU THỪA TƯỚNG
let ministerUsurpCooldownByUser = new Map();

function executeMinisterUsurp(ministerUniqueId = '', isManualAdmin = false, force = false) {
  if (throneDuelState) return;
  let challenger = ministerUniqueId ? players.get(ministerUniqueId) : null;
  if (isMajorEventActive()) {
    const ev = getActiveMajorEventInfo();
    const evName = ev ? ev.name : 'sự kiện triều đình';
    if (challenger && challenger.seatId) {
      showFloatingToastOnSeat(challenger.seatId, '⚠️ Đang có ' + evName + '! Hãy chờ kết thúc rồi Đoạt Ngôi!', 'toast-wrong');
    }
    return;
  }

  // Nếu bấm nút Admin mà chưa truyền ID, tự động tìm người đang ngồi ghế Thừa Tướng (hoặc người đứng Top 2)
  if (!challenger) {
    const ministers = Array.from(players.values())
      .filter(p => p.uniqueId !== currentEmperorId && p.tier === 5)
      .sort((a, b) => b.score - a.score);
    if (ministers.length > 0) {
      challenger = ministers[0];
    } else if (isManualAdmin) {
      const runnersUp = Array.from(players.values())
        .filter(p => p.uniqueId !== currentEmperorId)
        .sort((a, b) => b.score - a.score);
      challenger = runnersUp[0] || null;
    }
  }

  if (!challenger) return;

  if (challenger.uniqueId === currentEmperorId) {
    if (challenger.seatId) {
      showFloatingToastOnSeat(challenger.seatId, `👑 Bệ hạ đang ngồi trên Ngai Vàng rồi!`, 'toast-right');
    }
    return;
  }

  // Kiểm tra điều kiện: Phải đang ngồi ghế Thừa Tướng (Tier 5) mới được phát động Đoạt Ngôi (trừ khi Admin bấm ép)
  if (!isManualAdmin && challenger.tier < 5) {
    if (challenger.seatId) {
      showFloatingToastOnSeat(challenger.seatId, `⚠️ Cần đạt chức Thừa Tướng (≥900đ) mới được Đoạt Ngôi!`, 'toast-wrong');
    }
    return;
  }

  const now = Date.now();
  const cdUntil = ministerUsurpCooldownByUser.get(challenger.uniqueId) || 0;
  if (!isManualAdmin && !force && now < cdUntil) {
    const waitSec = Math.ceil((cdUntil - now) / 1000);
    if (challenger.seatId) {
      showFloatingToastOnSeat(challenger.seatId, `⏳ Hồi chiêu Đoạt Ngôi còn ${waitSec}s!`, 'toast-wrong');
    }
    return;
  }

  // Đặt hồi chiêu 75 giây cho mỗi lần Thừa Tướng phát động Binh Biến
  ministerUsurpCooldownByUser.set(challenger.uniqueId, now + 75 * 1000);

  const emp = currentEmperorId ? players.get(currentEmperorId) : null;

  // TRƯỜNG HỢP 1: Ngai Vàng đang trống -> Thừa Tướng lập tức bước lên Đăng Cơ Hoàng Đế!
  if (!emp) {
    challenger.score = Math.max(2550, challenger.score + 600);
    playSound('emperor');
    showImperialDecree(
      '🐉 THỪA TƯỚNG ĐĂNG CƠ 🐉',
      `Ngai vàng bỏ trống, Thừa Tướng ${challenger.nickname} thuận lòng trời bước lên Ngai Vàng!`
    );
    reassignAllSeats();
    return;
  }

  // TRƯỜNG HỢP 2: Có Hoàng Đế đang tại vị -> Khai màn Quyết Đấu 5 câu siêu khó & siêu nhanh!
  startThroneDuel(emp, challenger);
}

function startThroneDuel(emp, minister) {
  if (throneDuelState) return;
  // Dọn dẹp dứt điểm các sự kiện hoặc câu hỏi cũ để nhường chỗ cho trận quyết chiến 1v1
  bossState = null;
  envoyState = null;
  if (auctionLeft > 0) finishAuction();
  if (activeQuiz) {
    activeQuiz = null;
    quizResolved = true;
    quizAnsweredUsers.clear();
    const qm = document.getElementById('quizModal');
    if (qm) qm.classList.add('hidden');
  }
  const questions = [];
  const seen = new Set();
  let guard = 0;
  while (questions.length < 5 && guard++ < 60) {
    const q = getNextRandomQuiz();
    if (q && !seen.has(q.q)) {
      seen.add(q.q);
      questions.push(q);
    }
  }
  if (questions.length === 0) return;

  throneDuelState = {
    startedAt: Date.now(),
    empId: emp.uniqueId,
    minId: minister.uniqueId,
    questions,
    roundIndex: 0,
    empWins: 0,
    minWins: 0,
    attemptedIds: new Set(),
    nextRoundTimeout: null,
    botAnswerTimeout: null
  };

  nextAutoQuizCooldown = 30;
  stopAllSpeech(false);
  playSound('gong');
  showImperialDecree(
    '⚔️ QUYẾT ĐẤU ĐOẠT NGÔI ⚔️',
    `Thừa Tướng ${minister.nickname} thách đấu Hoàng Đế ${emp.nickname}! 5 câu siêu khó, 25 giây mỗi câu — chỉ 2 người được đáp, ai thắng sẽ giữ/đoạt Ngai Vàng!`
  );

  setTimeout(() => launchNextThroneDuelQuestion(), 1200);
}

function launchNextThroneDuelQuestion() {
  const st = throneDuelState;
  if (!st) return;

  const decreeEl = document.getElementById('imperialDecree');
  if (decreeEl) {
    decreeEl.classList.add('hidden');
    decreeEl.style.display = 'none';
  }
  clearTimeout(decreeTimeout);

  const empObj = players.get(st.empId);
  const minObj = players.get(st.minId);
  if (!empObj || !minObj) { finishThroneDuel(); return; }

  // Chốt sớm khi một bên đã thắng 3 câu hoặc đã hết 5 câu
  if (st.roundIndex >= st.questions.length || st.empWins >= 3 || st.minWins >= 3) {
    finishThroneDuel();
    return;
  }

  const quiz = st.questions[st.roundIndex];
  activeQuiz = quiz;
  quizResolved = false;
  quizCountdown = 25;
  st.attemptedIds = new Set();

  const badgeTitleEl = document.getElementById('quizBadgeTitle');
  if (badgeTitleEl) {
    badgeTitleEl.textContent = `⚔️ ĐOẠT NGÔI CÂU ${st.roundIndex + 1}/5 • 👑 ${empObj.nickname} (${st.empWins}) vs (${st.minWins}) 🟣 ${minObj.nickname}`;
  }
  document.getElementById('quizQuestionText').textContent = quiz.q;
  document.getElementById('quizTimerBadge').textContent = `⏳ ${quizCountdown}s`;

  const grid = document.getElementById('quizOptionsGrid');
  grid.innerHTML = ['A', 'B', 'C', 'D'].map(key => `
    <div class="quiz-opt-box" id="quizOpt_${key}">
      <span class="quiz-opt-key">${key}</span>
      <span class="quiz-opt-text">${escapeHtml(quiz.options[key])}</span>
    </div>
  `).join('');

  const fb = document.getElementById('quizLiveFeedback');
  fb.className = 'quiz-live-feedback';
  fb.innerHTML = `⚡ CHỈ <b>${escapeHtml(empObj.nickname)}</b> & <b>${escapeHtml(minObj.nickname)}</b> được đáp A/B/C/D • Mỗi người 1 lần • Chỉ 1 người đúng nhanh nhất ăn câu!`;

  const qmEl = document.getElementById('quizModal');
  if (qmEl) {
    qmEl.classList.remove('hidden');
    qmEl.style.display = 'block';
    qmEl.style.opacity = '1';
    qmEl.style.visibility = 'visible';
  }
  playSound('gong');

  emitAdminAction({
    kind: 'duel_question',
    quiz,
    roundIndex: st.roundIndex,
    empWins: st.empWins,
    minWins: st.minWins,
    empNickname: empObj.nickname,
    minNickname: minObj.nickname
  });
}

function handleThroneDuelTimeout() {
  const st = throneDuelState;
  if (!st) return;
  quizResolved = true;
  const rightKey = activeQuiz.correct;
  const rightText = activeQuiz.options[rightKey];
  const optBox = document.getElementById(`quizOpt_${rightKey}`);
  if (optBox) optBox.classList.add('opt-correct');
  const fb = document.getElementById('quizLiveFeedback');
  fb.className = 'quiz-live-feedback fb-wrong';
  fb.innerHTML = `⏰ HẾT 25 GIÂY! Đáp án: <b>${rightKey}. ${escapeHtml(rightText)}</b> • Không ai ghi điểm câu này`;
  st.nextRoundTimeout = setTimeout(() => {
    if (!throneDuelState) return;
    throneDuelState.roundIndex += 1;
    launchNextThroneDuelQuestion();
  }, 900);
}

function finishThroneDuel() {
  const st = throneDuelState;
  if (!st) return;
  if (st.nextRoundTimeout) clearTimeout(st.nextRoundTimeout);
  if (st.botAnswerTimeout) clearTimeout(st.botAnswerTimeout);
  throneDuelState = null;

  document.getElementById('quizModal').classList.add('hidden');
  const stageEl = document.getElementById('liveStage');
  if (stageEl) stageEl.classList.remove('quiz-focused-mode');
  activeQuiz = null;
  quizResolved = true;
  nextAutoQuizCooldown = 20; // 20s sau khi đấu đoạt ngôi xong mới ra đề mới
  const badgeTitleEl = document.getElementById('quizBadgeTitle');
  if (badgeTitleEl) badgeTitleEl.textContent = '📜 KHẢO THÍ TRIỀU ĐÌNH (ĐUA TOP NHANH NHẤT)';

  setTimeout(() => {
    processPendingCutscenes();
  }, 3200);

  const emp = players.get(st.empId);
  const minister = players.get(st.minId);
  if (!emp || !minister) { reassignAllSeats(); return; }

  if (st.minWins > st.empWins) {
    const stolenPts = Math.max(250, Math.round(emp.score * 0.28));
    const oldEmpScore = emp.score;
    emp.score = Math.max(950, emp.score - stolenPts);
    minister.score = Math.max(minister.score + stolenPts, oldEmpScore + 120);
    pendingUsurpQuote = true;
    showImperialDecree(
      '⚡ ĐOẠT NGÔI THÀNH CÔNG ⚡',
      `Thừa Tướng ${minister.nickname} thắng ${st.minWins}-${st.empWins}, phế truất ${emp.nickname} và đăng cơ Hoàng Đế! "Ngươi lên ngôi chỉ vì may mắn!"`
    );
    addCompactCommentPill(minister, `đoạt ngôi từ ${emp.nickname}!`, '👑 SOÁN NGÔI');
    reassignAllSeats();
    updateHUDAndTables();
  } else {
    emp.score += 350;
    dragonQi = 100;
    minister.score = Math.max(0, minister.score - 200);
    playSound('emperor');
    showImperialDecree(
      '🛡️ HOÀNG ĐẾ GIỮ VỮNG NGAI VÀNG 🛡️',
      `Hoàng Đế ${emp.nickname} thắng ${st.empWins}-${st.minWins}, dẹp loạn Thừa Tướng ${minister.nickname} (-200đ)! Vua +350đ & Long Khí đầy!`
    );
    addCompactCommentPill(emp, 'giữ vững ngai vàng', '🛡️ +350');
    reassignAllSeats();
    updateHUDAndTables();
  }
}

// =========================================================================
// 9. CẬP NHẬT HUD, TOP PILL & KHUNG PILL COMMENT GÓC DƯỚI PHẢI
// =========================================================================
const bannerQueue = [];
let isBannerDisplaying = false;
let bannerTimer = null;

function updateTopHighlightPill(player, line1Html, line2Text, icon = '📜') {
  bannerQueue.push({ player, line1Html, line2Text, icon });
  if (!isBannerDisplaying) {
    processNextBanner();
  }
}

function processNextBanner() {
  if (bannerQueue.length === 0) {
    isBannerDisplaying = false;
    return;
  }
  isBannerDisplaying = true;
  const item = bannerQueue.shift();
  const pill = document.getElementById('topHighlightPill');
  const avt = document.getElementById('topPillAvatar');
  const l1 = document.getElementById('topPillLine1');
  const l2 = document.getElementById('topPillLine2');
  const ic = document.getElementById('topPillIcon');
  if (pill) {
    if (item.player && item.player.avatar && avt) avt.src = item.player.avatar;
    if (l1) l1.innerHTML = item.line1Html;
    if (l2) l2.textContent = item.line2Text;
    if (ic) ic.textContent = item.icon;

    pill.classList.remove('pulse-pill');
    void pill.offsetWidth;
    pill.classList.add('pulse-pill');
  }

  clearTimeout(bannerTimer);
  bannerTimer = setTimeout(() => {
    processNextBanner();
  }, 3200);
}

function addCompactCommentPill(player, actionText, badgeText = '❤️ +10') {
  const box = document.getElementById('stageFeedBox');
  if (!box) return;

  const card = document.createElement('div');
  card.className = 'comment-pill-card';
  const avt = (player && player.avatar) ? player.avatar : getDistinctAvatar('default', 'Sĩ Tử');
  const name = (player && player.nickname) ? player.nickname : 'Sĩ Tử';

  card.innerHTML = `
    <img class="cp-avatar" src="${avt}" alt="avt" />
    <div class="cp-body">
      <div class="cp-name">${escapeHtml(name)}</div>
      <div class="cp-text">${escapeHtml(actionText)}</div>
    </div>
    <span class="cp-badge">${escapeHtml(badgeText)}</span>
  `;

  box.appendChild(card);
  while (box.children.length > 3) {
    box.removeChild(box.firstChild);
  }
}

function updateHUDAndTables() {
  const empNameEl = document.getElementById('currentEmpName');
  const empScoreEl = document.getElementById('currentEmpScore');
  const qiFill = document.getElementById('dragonQiFill');
  const qiText = document.getElementById('dragonQiText');

  if (currentEmperorId && players.has(currentEmperorId)) {
    const emp = players.get(currentEmperorId);
    empNameEl.textContent = `👑 ${emp.nickname} trị vì • ⚔️ Lệnh Trảm: ${kingSmiteTokens}/3`;
    empScoreEl.textContent = `${emp.score.toLocaleString()}đ`;
    qiFill.style.width = `${dragonQi}%`;
    qiText.textContent = `❤️ Long Khí: ${Math.round(dragonQi)}% • Vua gõ "chém @tên" | Thừa Tướng gõ "đoạt ngôi"!`;
  } else {
    empNameEl.textContent = 'Ngai Vàng Đang Trống (Tặng Sư Tử để Đăng Cơ)';
    empScoreEl.textContent = 'Cần ≥ 2,500đ';
    qiFill.style.width = '28%';
    qiText.textContent = '❤️ Gõ !thi vào bàn • Thả tim & trả lời câu đố để Thăng Quan!';
  }

  const sorted = Array.from(players.values()).sort((a, b) => b.score - a.score);
  updateFeverHud();
  updateRoyalTrioPodium(sorted);

  const totalEl = document.getElementById('totalPlayersCount');
  if (totalEl) totalEl.textContent = sorted.length;

  const tbody = document.getElementById('playersTableBody');
  if (tbody) {
    if (sorted.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; opacity:0.6;">Chưa có sĩ tử nào vào bàn</td></tr>';
    } else {
      tbody.innerHTML = sorted.map((p, idx) => `
        <tr>
          <td>#${idx + 1}</td>
          <td style="display:flex;align-items:center;gap:6px;">
            <img src="${p.avatar}" style="width:22px;height:22px;border-radius:50%;object-fit:cover;" />
            <b>${escapeHtml(p.nickname)}</b>
          </td>
          <td>${p.seatId ? getTierTitle(p.tier) : 'Sảnh chờ'}</td>
          <td style="color:#ffd666; font-weight:700;">${p.score.toLocaleString()}</td>
          <td style="display:flex;gap:4px;">
            <button class="btn btn-sm btn-outline" onclick="boostPlayer('${p.uniqueId}', 250)">+250đ</button>
            <button class="btn btn-sm btn-danger" onclick="smiteSpecificPlayer('${p.uniqueId}')" title="Chém người này">⚔️ Trảm</button>
          </td>
        </tr>
      `).join('');
    }
  }
}

window.smiteSpecificPlayer = function(uniqueId) {
  const p = players.get(uniqueId);
  if (!p) return;
  executeKingSmite(p.nickname, true);
  emitAdminAction({ kind: 'smite', query: p.nickname, isManualAdmin: true });
};

window.boostPlayer = function(uniqueId, amount) {
  const p = players.get(uniqueId);
  if (!p) return;
  p.score += amount;
  p.lastActiveAt = Date.now();
  reassignAllSeats();
  emitAdminAction({ kind: 'boost', uniqueId, amount });
};

let decreeTimeout = null;
function showImperialDecree(title, body) {
  const box = document.getElementById('imperialDecree');
  document.getElementById('decreeTitle').textContent = title;
  document.getElementById('decreeBody').textContent = body;
  box.classList.remove('hidden');
  clearTimeout(decreeTimeout);
  decreeTimeout = setTimeout(() => {
    box.classList.add('hidden');
  }, 2400);
}

function halveAllPlayersScores() {
  if (players.size === 0) return;
  players.forEach((p) => {
    p.refundable = p.score - Math.max(5, Math.floor(p.score * 0.5));
    p.score = Math.max(5, Math.floor(p.score * 0.5));
  });
  kingSmiteTokens = 3; // Hồi lại 3 Lệnh Bài Trảm mỗi chu kỳ 15 phút
  kingSmiteCooldownUntil = 0;
  playSound('gong');
  showImperialDecree(
    '📜 KHẢO KHÓA 15 PHÚT 📜',
    'Đã hết 15 phút Khoa Thi! Toàn bộ Công Trạng của các Sĩ Tử giảm đi một nửa (50%) để mở cuộc đua mới!'
  );
  updateTopHighlightPill(
    null,
    `⏳ KHẢO KHÓA 15 PHÚT: <b>Giảm 50% điểm toàn trường thi!</b>`,
    `Cơ hội vàng soán ngôi Hoàng Đế!`,
    '⚖️'
  );
  if (!activeQuiz) {
    speakImperial('Đã hết 15 phút khảo khóa! Toàn bộ điểm công trạng giảm xuống một nửa, mở ra cơ hội tranh ngôi mới!');
  }
  reassignAllSeats();
  updateHUDAndTables();
}

function triggerGoldenHourX2(seconds = 20) {
  doublePointsSecondsLeft = seconds;
  currentScoreMultiplier = 2;
  playSound('promote');
  updateTopHighlightPill(
    null,
    `🔥 GIỜ VÀNG HOÀNG ÂN: <b>X2 ĐIỂM THẢ TIM & BÌNH LUẬN</b> (${seconds}s)!`,
    `Thả tim & comment để x2 Công Trạng!`,
    '🔥'
  );
  if (!activeQuiz) {
    speakImperial(`Giờ vàng Hoàng Ân! Nhân đôi điểm thả tim và bình luận trong ${seconds} giây!`);
  }
  updateHUDAndTables();
}

function triggerGoldenHourX3(seconds = 60) {
  doublePointsSecondsLeft = seconds;
  currentScoreMultiplier = 3;
  playSound('fireworks');
  updateTopHighlightPill(
    null,
    `🎆 GIỜ VÀNG HOÀNG CUNG: <b>X3 ĐIỂM TOÀN BỘ TRƯỜNG THI</b> (${seconds}s)!`,
    'Tất cả like, bình luận và câu đố đều được nhân 3 Công Trạng!',
    '🎆'
  );
  speakImperial(`Khai mở giờ vàng Hoàng Cung! Nhân ba điểm cho toàn bộ sĩ tử trong sáu mươi giây!`, true);
  spawnFireworksAt(50, 30, 60, true);
  spawnFireworksAt(25, 40, 50, true);
  spawnFireworksAt(75, 40, 50, true);
  updateHUDAndTables();
}

setInterval(() => {
  cycleSecondsLeft = Math.max(0, cycleSecondsLeft - 1);
  const mins = String(Math.floor(cycleSecondsLeft / 60)).padStart(2, '0');
  const secs = String(cycleSecondsLeft % 60).padStart(2, '0');

  if (doublePointsSecondsLeft > 0) {
    doublePointsSecondsLeft = Math.max(0, doublePointsSecondsLeft - 1);
    const tag = (currentScoreMultiplier >= 3) ? '🎆 GIỜ VÀNG X3 ĐIỂM' : '🔥 GIỜ VÀNG X2 ĐIỂM';
    document.getElementById('cycleTimerText').textContent = `${tag} (${doublePointsSecondsLeft}s) • ${mins}:${secs}`;
  } else {
    currentScoreMultiplier = 1;
    document.getElementById('cycleTimerText').textContent = `– ĐIỆN THI ĐÌNH • ${mins}:${secs} –`;
  }

  processDwellRewards();
  tickEventScheduler();
  updateEventCountdownHud();

  // Nếu đang có sự kiện lớn (Đoạt ngôi, Giặc xâm lăng, Sứ thần, Đấu giá):
  // Cập nhật real-time trạng thái sự kiện lên Thanh Tiêu Điểm Top Pill & KHÔNG để đè câu hỏi mới
  if (isMajorEventActive()) {
    nextAutoQuizCooldown = Math.max(nextAutoQuizCooldown, 15);
    const pillLine2 = document.getElementById('topPillLine2');
    if (pillLine2) {
      if (bossState) {
        pillLine2.innerHTML = `⚔️ <b>GIẶC NGOẠI XÂM:</b> Gõ "đánh"! Đã đánh <b>${bossState.hits}/${bossState.target}</b> lần • Còn <b>${bossState.left}s</b>!`;
      } else if (envoyState) {
        pillLine2.innerHTML = `📜 <b>SỨ THẦN BAN LỘC:</b> Gõ "nhận"! Đã nhận <b>${envoyState.claimed.length}/3</b> người • Còn <b>${envoyState.left}s</b>!`;
      } else if (auctionLeft > 0) {
        const lead = getAuctionLeader();
        pillLine2.innerHTML = `👑 <b>ĐẤU GIÁ NGAI VÀNG:</b> ${lead ? '<b>' + escapeHtml(lead.nickname) + '</b> dẫn đầu (' + lead.coins + ' xu)' : 'Chưa có ai ra giá'} • Còn <b>${auctionLeft}s</b>!`;
      } else if (throneDuelState) {
        pillLine2.innerHTML = `⚔️ <b>QUYẾT ĐẤU ĐOẠT NGÔI:</b> Câu ${throneDuelState.roundIndex + 1}/5 • 25s mỗi câu!`;
      }
    }
  } else if (!activeQuiz) {
    nextAutoQuizCooldown = Math.max(0, nextAutoQuizCooldown - 1);
    const pillLine2 = document.getElementById('topPillLine2');
    if (pillLine2 && nextAutoQuizCooldown > 0) {
      pillLine2.innerHTML = `⏳ Câu hỏi tiếp theo xuất hiện sau <b>${nextAutoQuizCooldown}s</b> • Chuẩn bị phím A, B, C, D!`;
    }

    // Giữa thời gian nghỉ (khi còn 20s hoặc 8s trước câu mới), đọc nhanh các mẹo luật chơi khi rảnh rỗi
    if (!isCleanLiveView && (nextAutoQuizCooldown === 20 || nextAutoQuizCooldown === 8)) {
      readRandomFeatureTipQuickly();
    }

    if (nextAutoQuizCooldown === 12) {
      triggerGoldenHourX2(15);
      emitAdminAction({ kind: 'golden_hour', seconds: 15 });
    }
    if (nextAutoQuizCooldown === 0) {
      nextAutoQuizCooldown = 30;
      const q = getNextRandomQuiz();
      triggerImperialQuiz(q);
      emitAdminAction({ kind: 'quiz', quiz: q });
    }
  }

  if (cycleSecondsLeft === 0) {
    cycleSecondsLeft = 15 * 60;
    giftBoard.clear();
    renderGiftHud();
    if (!isCleanLiveView) {
      halveAllPlayersScores();
      emitAdminAction({ kind: 'halve_all_scores' });
    }
  }

  // Đếm lùi Minigame PvP Arena
  if (pvpArenaState && pvpArenaState.active) {
    pvpArenaState.timer--;
    if (pvpArenaState.timer <= 0) {
      finishPvpArenaEvent();
    }
  }

  // Đếm lùi Minigame Cướp Lộc Rương Báu
  if (treasureChestState && treasureChestState.active) {
    treasureChestState.timer--;
    updateTreasureChestHud();
    if (treasureChestState.timer <= 0) {
      finishTreasureChestEvent(false);
    }
  }

  // Đếm lùi Fever Mode (Hoàng Ân Hạo Đãng)
  if (isFeverActive) {
    if (doublePointsSecondsLeft > 0) {
      updateFeverHud();
    } else {
      isFeverActive = false;
      currentScoreMultiplier = 1;
      updateFeverHud();
    }
  }

  if (activeQuiz && !quizResolved) {
    quizCountdown = Math.max(0, quizCountdown - 1);
    document.getElementById('quizTimerBadge').textContent = `⏳ ${quizCountdown}s`;

    // Hiệu ứng màu đồng hồ & viền chớp đỏ 3 giây cuối (Vignette Pulse)
    const timerBadgeEl = document.getElementById('quizTimerBadge');
    const vignetteEl = document.getElementById('vignettePulse');
    if (timerBadgeEl) {
      timerBadgeEl.classList.remove('timer-safe', 'timer-warn', 'timer-danger');
      if (quizCountdown > 15) timerBadgeEl.classList.add('timer-safe');
      else if (quizCountdown > 3) timerBadgeEl.classList.add('timer-warn');
      else timerBadgeEl.classList.add('timer-danger');
    }
    if (vignetteEl) {
      if (quizCountdown <= 3 && quizCountdown > 0) {
        vignetteEl.classList.remove('hidden');
      } else {
        vignetteEl.classList.add('hidden');
      }
    }

    if (quizCountdown === 0 && throneDuelState) {
      handleThroneDuelTimeout();
    } else if (quizCountdown === 0) {
      quizResolved = true;
      specialBossRoundActive = false;
      if (vignetteEl) vignetteEl.classList.add('hidden');
      const rightKey = activeQuiz.correct;
      const rightText = activeQuiz.options[rightKey];
      const optBox = document.getElementById(`quizOpt_${rightKey}`);
      if (optBox) optBox.classList.add('opt-correct');
      AudioFX.playBellDing();

      const fb = document.getElementById('quizLiveFeedback');
      fb.className = 'quiz-live-feedback fb-right';

      if (quizCorrectWinners.length > 0) {
        const top1Name = quizFirstWinner ? quizFirstWinner.nickname : quizCorrectWinners[0].player.nickname;
        fb.innerHTML = `⏰ <b>ĐÁP ÁN: ${rightKey}. ${escapeHtml(rightText)}</b> • Chúc mừng <b>${escapeHtml(top1Name)}</b> (Top 1) & <b>${quizCorrectWinners.length} sĩ tử</b> đỗ đạt!`;
        speakImperial(`Hết giờ! Đáp án đúng là ${rightKey}: ${rightText}. Chúc mừng Trạng Nguyên đáp nhanh ${top1Name} và ${quizCorrectWinners.length} sĩ tử đỗ đạt!`, true);
      } else {
        fb.innerHTML = `⏰ <b>HẾT GIỜ!</b> Đáp án đúng là: <b>${rightKey}. ${escapeHtml(rightText)}</b>`;
        speakImperial(`Hết giờ! Đáp án đúng là ${rightKey}: ${rightText}!`, true);
      }

      setTimeout(() => {
        document.getElementById('quizModal').classList.add('hidden');
        const stageEl = document.getElementById('liveStage');
        if (stageEl) stageEl.classList.remove('quiz-focused-mode');
        activeQuiz = null;
        decreeState = null;
        nextAutoQuizCooldown = 30; // Nghỉ đúng 30 giây giữa các câu hỏi theo yêu cầu
        processPendingCutscenes();
      }, 3500);
    }
  } else {
    const vignetteEl = document.getElementById('vignettePulse');
    if (vignetteEl) vignetteEl.classList.add('hidden');
  }

  // [Đã cập nhật theo yêu cầu] Chỉ đoạt ngôi khi Thừa Tướng gõ đủ 50 lần câu 'đoạt ngôi' hoặc nạp đủ Binh Biến

  if (currentEmperorId && players.has(currentEmperorId)) {
    dragonQi = Math.max(0, dragonQi - 1.0);
    const emp = players.get(currentEmperorId);
    if (dragonQi <= 0) {
      emp.score = Math.max(500, emp.score - 45);
      reassignAllSeats();
    } else {
      updateHUDAndTables();
    }
  }
}, 1000);

// =========================================================================
// 10. CELESTIAL 2D VISUAL FX ENGINE (CỰC ĐẸP & MƯỢT MÀ 60FPS - ĐỘ SÂU 2.5D CUNG ĐÌNH)
// =========================================================================
let fx2dEnabled = true;
let fxEngine = null;

class Celestial2DFXEngine {
  constructor() {
    this.bgCanvas = document.getElementById('particleCanvas');
    this.fgCanvas = document.getElementById('fxCanvas');
    if (!this.bgCanvas) return;
    this.bgCtx = this.bgCanvas.getContext('2d');
    this.fgCtx = this.fgCanvas ? this.fgCanvas.getContext('2d') : null;

    this.W = 1080;
    this.H = 1920;
    this.bgCanvas.width = this.W;
    this.bgCanvas.height = this.H;
    if (this.fgCanvas) {
      this.fgCanvas.width = this.W;
      this.fgCanvas.height = this.H;
    }

    this.petals = [];
    this.fireflies = [];
    this.sparkles = [];
    this.shockwaves = [];
    this.fireworks = [];
    this.skyLanterns = [];
    this.ascensionParticles = [];
    this.coins = [];

    this.lastTime = performance.now();
    this.initAmbient();
    this.startLoop();
  }

  initAmbient() {
    // 1. CÁNH HOA ĐÀO / HOA MAI CUNG ĐÌNH RƠI (32 CÁNH NỀN + 14 CÁNH TIỀN CẢNH)
    const petalColors = ['#ffccd5', '#ffb3ba', '#ffd1dc', '#ffe4e1', '#fff0f5', '#ff94b8'];
    for (let i = 0; i < 46; i++) {
      const isFg = i >= 32;
      this.petals.push({
        isFg,
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        w: isFg ? (Math.random() * 8 + 14) : (Math.random() * 6 + 9),
        h: isFg ? (Math.random() * 12 + 18) : (Math.random() * 8 + 13),
        vy: isFg ? (Math.random() * 0.9 + 1.2) : (Math.random() * 0.7 + 0.8),
        windVx: isFg ? (Math.random() * 0.4 + 0.2) : (Math.random() * 0.3 + 0.1),
        swayAmp: Math.random() * 25 + 15,
        swayFreq: Math.random() * 0.002 + 0.0015,
        swayPhase: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.03 + 0.015,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        alpha: isFg ? (Math.random() * 0.25 + 0.7) : (Math.random() * 0.25 + 0.38)
      });
    }

    // 2. LINH KHÍ KIM QUANG & ĐOM ĐÓM HOÀNG CUNG (22 ĐỐM LINH KHÍ NỀN)
    for (let i = 0; i < 22; i++) {
      const isDragonQi = i % 3 === 0;
      this.fireflies.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        r: Math.random() * 3.5 + 2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(Math.random() * 0.45 + 0.15),
        baseAlpha: Math.random() * 0.35 + 0.25,
        pulseSpeed: Math.random() * 0.003 + 0.002,
        pulsePhase: Math.random() * Math.PI * 2,
        coreColor: isDragonQi ? '#e6fffb' : '#fffbe6',
        glowColor: isDragonQi ? 'rgba(19, 194, 194, 0.45)' : 'rgba(255, 215, 0, 0.5)'
      });
    }

    // 3. NGÔI SAO LẤP LÁNH HOÀNG GIA (12 ĐIỂM SÁNG ✦)
    for (let i = 0; i < 12; i++) {
      this.sparkles.push({
        x: 180 + Math.random() * 720,
        y: 120 + Math.random() * 950,
        size: Math.random() * 10 + 8,
        rot: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        alpha: 0,
        maxAlpha: Math.random() * 0.5 + 0.45,
        life: 0,
        maxLife: Math.random() * 120 + 80,
        color: i % 2 === 0 ? '#ffd700' : '#fff566'
      });
    }
  }

  triggerShockwave(xPct, yPct, color = '#ffd700', maxR = 260) {
    if (!fx2dEnabled) return;
    const cx = (xPct / 100) * this.W;
    const cy = (yPct / 100) * this.H;
    this.shockwaves.push({
      x: cx,
      y: cy,
      r: 10,
      maxR: maxR,
      speed: 12,
      lineWidth: 6,
      color: color,
      alpha: 1.0,
      decay: 0.025
    });
    this.shockwaves.push({
      x: cx,
      y: cy,
      r: 5,
      maxR: maxR * 0.7,
      speed: 8,
      lineWidth: 3.5,
      color: '#ffffff',
      alpha: 0.9,
      decay: 0.035
    });
  }

  triggerFireworks(xPct, yPct, count = 36, isRoyal = false) {
    if (!fx2dEnabled) return;
    const cx = (xPct / 100) * this.W;
    const cy = (yPct / 100) * this.H;
    const colors = isRoyal
      ? ['#ffd700', '#fff566', '#ff4d4f', '#ff85c0', '#36cfc9', '#faad14', '#ffffff']
      : ['#ffd700', '#95de64', '#69c0ff', '#fff566', '#ff7875'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const speed = Math.random() * (isRoyal ? 6.5 : 4.5) + 1.8;
      this.fireworks.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isRoyal ? 1.6 : 0.8),
        r: Math.random() * 3.5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.016 + 0.011,
        tail: []
      });
    }

    fireworksBurstList = this.fireworks;
  }

  triggerAscension(xPct, yPct, isRoyal = false) {
    if (!fx2dEnabled) return;
    const cx = (xPct / 100) * this.W;
    const cy = (yPct / 100) * this.H;
    const count = isRoyal ? 45 : 24;
    for (let i = 0; i < count; i++) {
      this.ascensionParticles.push({
        cx: cx,
        cy: cy,
        angle: (Math.PI * 2 * i) / count,
        rotSpeed: (Math.random() * 0.06 + 0.04) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 35 + 15,
        y: cy + (Math.random() * 80 - 40),
        vy: -(Math.random() * 5.5 + 3.5),
        size: Math.random() * 3.2 + 1.8,
        color: isRoyal ? (i % 2 === 0 ? '#ffd700' : '#fff1a8') : '#5cdbd3',
        alpha: 1.0,
        decay: Math.random() * 0.018 + 0.014
      });
    }
  }

  triggerSkyLanterns(count = 5) {
    if (!fx2dEnabled) return;
    for (let i = 0; i < count; i++) {
      this.skyLanterns.push({
        x: (this.W * 0.15) + Math.random() * (this.W * 0.7),
        y: this.H + 40 + Math.random() * 120,
        w: Math.random() * 14 + 32,
        h: Math.random() * 18 + 42,
        vy: -(Math.random() * 0.9 + 1.2),
        swayAmp: Math.random() * 20 + 12,
        swayFreq: Math.random() * 0.002 + 0.001,
        swayPhase: Math.random() * Math.PI * 2,
        color: i % 2 === 0 ? '#ff7a45' : '#faad14',
        alpha: 0.95,
        decay: 0.00075
      });
    }
  }

  triggerGrandCelebration(xPct = 50, yPct = 35) {
    this.triggerShockwave(xPct, yPct, '#ffd700', 380);
    this.triggerFireworks(xPct, yPct, 60, true);
    setTimeout(() => this.triggerFireworks(25, 42, 45, true), 250);
    setTimeout(() => this.triggerFireworks(75, 42, 45, true), 500);
    this.triggerSkyLanterns(7);
  }

  triggerCoinRain(count = 45) {
    if (!fx2dEnabled) return;
    for (let i = 0; i < count; i++) {
      this.coins.push({
        x: Math.random() * this.W,
        y: -30 - Math.random() * 300,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 5 + 6,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() * 0.08 + 0.04) * (Math.random() > 0.5 ? 1 : -1),
        scaleX: Math.random() * Math.PI * 2,
        vScale: Math.random() * 0.12 + 0.08,
        size: Math.random() * 10 + 16,
        alpha: 1.0,
        decay: 0.003
      });
    }
  }

  startLoop() {
    const loop = (now) => {
      requestAnimationFrame(loop);
      const dt = Math.min(50, now - this.lastTime);
      this.lastTime = now;

      if (!fx2dEnabled) {
        if (this.bgCtx) this.bgCtx.clearRect(0, 0, this.W, this.H);
        if (this.fgCtx) this.fgCtx.clearRect(0, 0, this.W, this.H);
        return;
      }

      this.update(dt, now);
      this.render();
    };
    requestAnimationFrame(loop);
  }

  update(dt, now) {
    // 1. Cánh hoa rơi lãng đãng
    for (const p of this.petals) {
      p.swayPhase += p.swayFreq * dt;
      p.x += Math.sin(p.swayPhase) * (p.swayAmp * 0.05) + (p.windVx * dt * 0.05);
      p.y += p.vy * (dt * 0.06);
      p.angle += p.rotSpeed * (dt * 0.06);
      p.flip += p.flipSpeed * (dt * 0.06);

      if (p.y > this.H + 40 || p.x < -60 || p.x > this.W + 60) {
        p.y = -30 - Math.random() * 40;
        p.x = Math.random() * this.W;
        p.swayPhase = Math.random() * Math.PI * 2;
      }
    }

    // 2. Đom đóm & linh khí
    for (const ff of this.fireflies) {
      ff.x += ff.vx * (dt * 0.06);
      ff.y += ff.vy * (dt * 0.06);
      ff.pulsePhase += ff.pulseSpeed * dt;

      if (ff.y < -30) {
        ff.y = this.H + 20;
        ff.x = Math.random() * this.W;
      }
      if (ff.x < 0) ff.x = this.W;
      else if (ff.x > this.W) ff.x = 0;
    }

    // 3. Ngôi sao ✦
    for (const sp of this.sparkles) {
      sp.life += dt * 0.06;
      sp.rot += sp.rotSpeed * (dt * 0.06);
      const halfLife = sp.maxLife / 2;
      if (sp.life < halfLife) {
        sp.alpha = (sp.life / halfLife) * sp.maxAlpha;
      } else if (sp.life < sp.maxLife) {
        sp.alpha = (1 - (sp.life - halfLife) / halfLife) * sp.maxAlpha;
      } else {
        sp.life = 0;
        sp.x = 180 + Math.random() * 720;
        sp.y = 120 + Math.random() * 950;
        sp.size = Math.random() * 10 + 8;
      }
    }

    // 4. Sóng xung kích
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.r += sw.speed * (dt * 0.06);
      sw.speed *= 0.94;
      sw.alpha -= sw.decay * (dt * 0.06);
      if (sw.alpha <= 0 || sw.r >= sw.maxR) {
        this.shockwaves.splice(i, 1);
      }
    }

    // 5. Pháo hoa
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      const fw = this.fireworks[i];
      fw.tail.push({ x: fw.x, y: fw.y });
      if (fw.tail.length > 4) fw.tail.shift();

      fw.x += fw.vx * (dt * 0.06);
      fw.y += fw.vy * (dt * 0.06);
      fw.vy += 0.09 * (dt * 0.06);
      fw.vx *= 0.98;
      fw.vy *= 0.98;
      fw.alpha -= fw.decay * (dt * 0.06);

      if (fw.alpha <= 0 || fw.y > this.H) {
        this.fireworks.splice(i, 1);
      }
    }

    // 6. Khổng Minh Đăng
    for (let i = this.skyLanterns.length - 1; i >= 0; i--) {
      const l = this.skyLanterns[i];
      l.swayPhase += l.swayFreq * dt;
      l.x += Math.sin(l.swayPhase) * (l.swayAmp * 0.04);
      l.y += l.vy * (dt * 0.06);
      l.alpha -= l.decay * (dt * 0.06);

      if (l.alpha <= 0 || l.y < -120) {
        this.skyLanterns.splice(i, 1);
      }
    }

    // 7. Cột linh khí thăng cấp
    for (let i = this.ascensionParticles.length - 1; i >= 0; i--) {
      const ap = this.ascensionParticles[i];
      ap.angle += ap.rotSpeed * (dt * 0.06);
      ap.y += ap.vy * (dt * 0.06);
      ap.alpha -= ap.decay * (dt * 0.06);

      if (ap.alpha <= 0) {
        this.ascensionParticles.splice(i, 1);
      }
    }

    // 8. Mưa tiền xu cổ
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const c = this.coins[i];
      c.x += c.vx * (dt * 0.06);
      c.y += c.vy * (dt * 0.06);
      c.rot += c.vRot * (dt * 0.06);
      c.scaleX += c.vScale * (dt * 0.06);
      c.alpha -= c.decay * (dt * 0.06);

      if (c.alpha <= 0 || c.y > this.H + 40) {
        this.coins.splice(i, 1);
      }
    }
  }

  render() {
    // A. VẼ NỀN (particleCanvas - Phía sau ghế)
    if (this.bgCtx) {
      this.bgCtx.clearRect(0, 0, this.W, this.H);

      // Đom đóm & Linh khí
      for (const ff of this.fireflies) {
        const curAlpha = Math.max(0, ff.baseAlpha + Math.sin(ff.pulsePhase) * 0.22);
        this.bgCtx.save();
        this.bgCtx.globalAlpha = curAlpha;
        const g = this.bgCtx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, ff.r * 2.8);
        g.addColorStop(0, ff.coreColor);
        g.addColorStop(0.35, ff.glowColor);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        this.bgCtx.fillStyle = g;
        this.bgCtx.beginPath();
        this.bgCtx.arc(ff.x, ff.y, ff.r * 2.8, 0, Math.PI * 2);
        this.bgCtx.fill();
        this.bgCtx.restore();
      }

      // Cánh hoa nền (nhẹ hơn, mờ hơn)
      for (const p of this.petals) {
        if (!p.isFg) this.drawPetal(this.bgCtx, p);
      }
    }

    // B. VẼ TIỀN CẢNH (fxCanvas - Phía trước ghế)
    if (this.fgCtx) {
      this.fgCtx.clearRect(0, 0, this.W, this.H);

      // 1. Sóng xung kích
      for (const sw of this.shockwaves) {
        this.fgCtx.save();
        this.fgCtx.globalAlpha = Math.max(0, sw.alpha);
        this.fgCtx.strokeStyle = sw.color;
        this.fgCtx.lineWidth = sw.lineWidth;
        this.fgCtx.shadowColor = sw.color;
        this.fgCtx.shadowBlur = 14;
        this.fgCtx.beginPath();
        this.fgCtx.ellipse(sw.x, sw.y, sw.r, sw.r * 0.62, 0, 0, Math.PI * 2);
        this.fgCtx.stroke();
        this.fgCtx.restore();
      }

      // 2. Cột linh khí xoắn ốc
      for (const ap of this.ascensionParticles) {
        const curX = ap.cx + Math.cos(ap.angle) * ap.radius;
        this.fgCtx.save();
        this.fgCtx.globalAlpha = Math.max(0, ap.alpha);
        this.fgCtx.fillStyle = ap.color;
        this.fgCtx.shadowColor = ap.color;
        this.fgCtx.shadowBlur = 8;
        this.fgCtx.beginPath();
        this.fgCtx.arc(curX, ap.y, ap.size, 0, Math.PI * 2);
        this.fgCtx.fill();
        this.fgCtx.restore();
      }

      // 3. Khổng Minh Đăng bay
      for (const l of this.skyLanterns) {
        this.drawLantern(this.fgCtx, l);
      }

      // 4. Pháo hoa
      for (const fw of this.fireworks) {
        this.fgCtx.save();
        this.fgCtx.globalAlpha = Math.max(0, fw.alpha);
        this.fgCtx.fillStyle = fw.color;
        this.fgCtx.shadowColor = fw.color;
        this.fgCtx.shadowBlur = 10;
        this.fgCtx.beginPath();
        this.fgCtx.arc(fw.x, fw.y, fw.r, 0, Math.PI * 2);
        this.fgCtx.fill();

        if (fw.tail && fw.tail.length > 1) {
          this.fgCtx.strokeStyle = fw.color;
          this.fgCtx.lineWidth = fw.r * 0.6;
          this.fgCtx.beginPath();
          this.fgCtx.moveTo(fw.tail[0].x, fw.tail[0].y);
          for (let k = 1; k < fw.tail.length; k++) {
            this.fgCtx.lineTo(fw.tail[k].x, fw.tail[k].y);
          }
          this.fgCtx.stroke();
        }
        this.fgCtx.restore();
      }

      // 5. Ngôi sao ✦
      for (const sp of this.sparkles) {
        if (sp.alpha > 0.05) this.drawSparkle(this.fgCtx, sp);
      }

      // 6. Cánh hoa tiền cảnh (rõ nét, bay gần camera)
      for (const p of this.petals) {
        if (p.isFg) this.drawPetal(this.fgCtx, p);
      }

      // 7. Mưa tiền xu cổ
      for (const c of this.coins) {
        if (c.alpha > 0.05) this.drawCoin(this.fgCtx, c);
      }
    }
  }

  drawCoin(ctx, c) {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rot);
    ctx.scale(Math.cos(c.scaleX), 1);
    ctx.globalAlpha = Math.max(0, Math.min(1, c.alpha));

    // Vành đồng xu vàng cổ
    ctx.fillStyle = '#ffd700';
    ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(0, 0, c.size, 0, Math.PI * 2);
    ctx.fill();

    // Viền trong đồng xu
    ctx.strokeStyle = '#b8860b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, c.size * 0.85, 0, Math.PI * 2);
    ctx.stroke();

    // Lỗ vuông đồng xu cổ
    ctx.fillStyle = '#1a1005';
    const hole = c.size * 0.38;
    ctx.fillRect(-hole / 2, -hole / 2, hole, hole);

    ctx.restore();
  }

  drawPetal(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.scale(Math.cos(p.flip), 1);
    ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));
    ctx.fillStyle = p.color;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.w / 2, -p.h / 3, -p.w / 2, -p.h * 0.85, 0, -p.h);
    ctx.bezierCurveTo(p.w / 2, -p.h * 0.85, p.w / 2, -p.h / 3, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  drawLantern(ctx, l) {
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.globalAlpha = Math.max(0, Math.min(1, l.alpha));

    // Ánh sáng tỏa ra
    const glow = ctx.createRadialGradient(0, 0, 2, 0, 0, l.w * 1.6);
    glow.addColorStop(0, 'rgba(255, 235, 150, 0.55)');
    glow.addColorStop(1, 'rgba(255, 120, 0, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 0, l.w * 1.6, 0, Math.PI * 2);
    ctx.fill();

    // Thân đèn lồng
    ctx.fillStyle = l.color;
    ctx.beginPath();
    ctx.moveTo(-l.w / 2, -l.h / 2);
    ctx.quadraticCurveTo(0, -l.h / 2 - 4, l.w / 2, -l.h / 2);
    ctx.quadraticCurveTo(l.w / 2 + 6, 0, l.w / 2 - 3, l.h / 2);
    ctx.quadraticCurveTo(0, l.h / 2 + 5, -l.w / 2 + 3, l.h / 2);
    ctx.quadraticCurveTo(-l.w / 2 - 6, 0, -l.w / 2, -l.h / 2);
    ctx.fill();

    // Ngọn nến lung linh
    ctx.fillStyle = '#fffbe6';
    ctx.beginPath();
    ctx.ellipse(0, l.h / 4, 3, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    // Dây tua rua vàng
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, l.h / 2 + 4);
    ctx.lineTo(0, l.h / 2 + 16);
    ctx.stroke();

    ctx.restore();
  }

  drawSparkle(ctx, sp) {
    ctx.save();
    ctx.translate(sp.x, sp.y);
    ctx.rotate(sp.rot);
    ctx.globalAlpha = Math.max(0, Math.min(1, sp.alpha));
    ctx.fillStyle = sp.color;
    ctx.shadowColor = sp.color;
    ctx.shadowBlur = 8;

    ctx.beginPath();
    ctx.moveTo(0, -sp.size);
    ctx.quadraticCurveTo(0, 0, sp.size, 0);
    ctx.quadraticCurveTo(0, 0, 0, sp.size);
    ctx.quadraticCurveTo(0, 0, -sp.size, 0);
    ctx.quadraticCurveTo(0, 0, 0, -sp.size);
    ctx.fill();
    ctx.restore();
  }
}

function initParticles() {
  if (!fxEngine) {
    fxEngine = new Celestial2DFXEngine();
  }
}

// =========================================================================
// 11. KẾT NỐI SOCKET.IO & ĐỒNG BỘ 100% GIỮA CHROME VÀ TIKTOK LIVE STUDIO
// =========================================================================
function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

function getCurrentSimUser() {
  const name = document.getElementById('simNicknameInput').value.trim() || 'Sĩ Tử Ẩn Danh';
  const uniqueId = 'sim_' + name.toLowerCase().replace(/\s+/g, '_');
  const avatar = getDistinctAvatar(uniqueId, name);
  document.getElementById('simAvatarPreview').src = avatar;
  return { uniqueId, nickname: name, avatar };
}

function pickRandomSimUser() {
  const randomName = SAMPLE_SCHOLARS[Math.floor(Math.random() * SAMPLE_SCHOLARS.length)] + '_' + Math.floor(Math.random() * 99);
  document.getElementById('simNicknameInput').value = randomName;
  getCurrentSimUser();
}

function emitAdminAction(payload) {
  if (socketRef) {
    socketRef.emit('admin_action', payload);
    socketRef.emit('sync_snapshot', {
      players: Array.from(players.entries()),
      currentEmperorId,
      dragonQi,
      activeQuiz,
      quizCountdown,
      quizResolved
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  renderSeats();
  updateHUDAndTables();
  renderDonorHallHud();
  renderGiftGoalHud();
  initParticles();
  getCurrentSimUser();

  // Đảm bảo câu hỏi đầu tiên hiển thị ngay trên màn hình không bị trễ
  if (!activeQuiz) {
    activeQuiz = (typeof IMPERIAL_QUIZZES !== 'undefined' && IMPERIAL_QUIZZES.length) ? IMPERIAL_QUIZZES[0] : null;
    quizCountdown = 40;
  }
  const qModal = document.getElementById('quizModal');
  if (qModal && activeQuiz) {
    qModal.classList.remove('hidden');
    qModal.style.display = 'block';
  }

  if (isCleanLiveView) {
    document.body.classList.add('clean-live-mode');
    document.getElementById('restoreCpBtn').classList.add('hidden');
  }

  let socket = null;
  if (typeof io !== 'undefined') {
    socket = io();
    socketRef = socket;
    socket.on('tiktok_event', (evt) => {
      handleTikTokEvent(evt);
      if (!isCleanLiveView) {
        socket.emit('sync_snapshot', {
          players: Array.from(players.entries()),
          currentEmperorId,
          dragonQi,
          activeQuiz,
          quizCountdown,
          quizResolved
        });
      }
    });
    socket.on('save_data', (data) => {
      if (!data) return;
      if (data.donors) {
        Object.keys(data.donors).forEach(uid => {
          const d = data.donors[uid];
          const cur = donorStore[uid];
          if (!cur || d.coins > cur.coins) donorStore[uid] = d;
        });
        saveDonorStore();
        renderDonorHallHud();
      }
      if (data.profiles) savedProfiles = data.profiles;
    });
    if (!isCleanLiveView) {
      setInterval(() => {
        socket.emit('persist_save', { donors: donorStore, profiles: collectProfilesForSave() });
      }, 10000);
    }
    socket.on('stop_all_speech', () => stopAllSpeech(false));
    socket.on('state_snapshot', (snap) => {
      if (!isCleanLiveView || !snap) return;
      if (Array.isArray(snap.players) && snap.players.length > 0 && players.size === 0) {
        players = new Map(snap.players);
        currentEmperorId = snap.currentEmperorId;
        dragonQi = snap.dragonQi || 0;
        reassignAllSeats();
      }
      if (snap.activeQuiz && !activeQuiz && !snap.quizResolved) {
        triggerImperialQuiz(snap.activeQuiz);
        if (snap.quizCountdown) quizCountdown = snap.quizCountdown;
      }
    });
    socket.on('admin_action', (payload) => {
      if (!payload) return;
      if (payload.kind === 'sim_event') handleTikTokEvent(payload.evt);
      else if (payload.kind === 'quiz') triggerImperialQuiz(payload.quiz, payload.decreeEmpId || null);
      else if (payload.kind === 'duel_question') renderDuelQuestionOnCleanView(payload);
      else if (payload.kind === 'random_event') startRandomEvent(payload.type);
      else if (payload.kind === 'gift_boost') startGiftBoost(payload.seconds || 60);
      else if (payload.kind === 'auction') startAuction(payload.seconds || 90);
      else if (payload.kind === 'sched_sync') {
        if (typeof payload.boostIn === 'number' && giftBoostLeft === 0) giftBoostNextIn = payload.boostIn;
        if (typeof payload.auctionIn === 'number' && auctionLeft === 0) auctionNextIn = payload.auctionIn;
        if (typeof payload.randomIn === 'number' && !bossState && !envoyState) randomEventNextIn = payload.randomIn;
      }
      else if (payload.kind === 'golden_hour') triggerGoldenHourX2(payload.seconds || 20);
      else if (payload.kind === 'halve_all_scores') halveAllPlayersScores();
      else if (payload.kind === 'smite') executeKingSmite(payload.query || '', Boolean(payload.isManualAdmin));
      else if (payload.kind === 'usurp') executeMinisterUsurp(payload.uniqueId || '', Boolean(payload.isManualAdmin), Boolean(payload.force));
      else if (payload.kind === 'toggle_bg') {
        usingCleanBg = payload.usingCleanBg;
        const bgImg = document.getElementById('stageBgImg');
        if (bgImg) bgImg.src = usingCleanBg ? 'assets/bg_clean.jpg' : 'assets/bg.jpg';
      } else if (payload.kind === 'boost') {
        const p = players.get(payload.uniqueId);
        if (p) {
          p.score += payload.amount;
          p.lastActiveAt = Date.now();
          reassignAllSeats();
        }
      } else if (payload.kind === 'reset_game') {
        players.clear();
        currentEmperorId = null;
        dragonQi = 0;
        seats.forEach(s => { s.occupantId = null; });
        renderSeats();
        updateHUDAndTables();
      }
    });
    socket.on('tiktok_status', (st) => {
      const badge = document.getElementById('tiktokStatusBadge');
      if (!badge) return;
      if (st.connecting) {
        badge.textContent = `🟡 Đang kết nối tới phòng LIVE của @${st.username}...`;
        badge.style.color = '#ffd666';
      } else if (st.connected) {
        badge.textContent = `🟢 ĐÃ KẾT NỐI TIKTOK LIVE: @${st.username} (Room: ${st.roomId})`;
        badge.style.color = '#52c41a';
      } else if (st.error) {
        badge.textContent = `🔴 ${st.error}`;
        badge.style.color = '#ff7875';
      } else {
        badge.textContent = `⚪ Đang chạy chế độ Giả lập Offline`;
        badge.style.color = '#ccc';
      }
    });
  }

  const ttInput = document.getElementById('tiktokUsernameInput');
  const savedTTUser = localStorage.getItem('tra_quan_tiktok_user');
  if (ttInput && savedTTUser) {
    ttInput.value = savedTTUser;
    if (socket && !isCleanLiveView) {
      setTimeout(() => socket.emit('connect_tiktok', savedTTUser), 500);
    }
  }

  document.getElementById('connectTiktokBtn').addEventListener('click', () => {
    const username = document.getElementById('tiktokUsernameInput').value.trim();
    if (!username) {
      alert('Vui lòng nhập @username kênh TikTok đang phát LIVE!');
      return;
    }
    localStorage.setItem('tra_quan_tiktok_user', username);
    if (socket) {
      socket.emit('connect_tiktok', username);
    } else {
      alert('Hãy chạy file CHAY_GAME.bat để kết nối TikTok Live thật!');
    }
  });

  const eulerKeyInput = document.getElementById('eulerApiKeyInput');
  const saveEulerKeyBtn = document.getElementById('saveEulerKeyBtn');
  if (eulerKeyInput) {
    const savedEulerKey = localStorage.getItem('tra_quan_euler_key') || '';
    eulerKeyInput.value = savedEulerKey;
    if (savedEulerKey && socket) {
      socket.emit('set_euler_key', savedEulerKey);
    }
  }
  if (saveEulerKeyBtn && eulerKeyInput) {
    saveEulerKeyBtn.addEventListener('click', () => {
      const key = eulerKeyInput.value.trim();
      localStorage.setItem('tra_quan_euler_key', key);
      if (socket) {
        socket.emit('set_euler_key', key);
      }
      alert('Đã lưu EulerStream API Key!');
    });
  }

  if (ttInput) {
    ttInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('connectTiktokBtn').click();
      }
    });
  }

  document.getElementById('randomUserBtn').addEventListener('click', pickRandomSimUser);
  document.getElementById('simNicknameInput').addEventListener('input', getCurrentSimUser);

  function dispatchSimEvent(evt) {
    handleTikTokEvent(evt);
    emitAdminAction({ kind: 'sim_event', evt });
  }

  document.getElementById('sendCommentBtn').addEventListener('click', () => {
    const user = getCurrentSimUser();
    const comment = document.getElementById('simCommentInput').value.trim() || '!thi';
    dispatchSimEvent({ type: 'chat', ...user, comment });
  });

  document.getElementById('simCommentInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      document.getElementById('sendCommentBtn').click();
    }
  });

  document.querySelectorAll('.chip-btn[data-comment]').forEach(btn => {
    btn.addEventListener('click', () => {
      const user = getCurrentSimUser();
      dispatchSimEvent({ type: 'chat', ...user, comment: btn.dataset.comment });
    });
  });

  document.getElementById('simWrongAnswerBtn').addEventListener('click', () => {
    if (!activeQuiz || quizResolved) {
      const q = getNextRandomQuiz();
      triggerImperialQuiz(q);
      emitAdminAction({ kind: 'quiz', quiz: q });
    }
    if (!activeQuiz) return;
    const wrongKey = ['A', 'B', 'C', 'D'].find(k => k !== activeQuiz.correct);
    const user = throneDuelState && players.get(throneDuelState.minId) ? players.get(throneDuelState.minId) : getCurrentSimUser();
    dispatchSimEvent({ type: 'chat', ...user, comment: wrongKey });
  });

  document.getElementById('simRightAnswerBtn').addEventListener('click', () => {
    if (!activeQuiz || quizResolved) {
      const q = getNextRandomQuiz();
      triggerImperialQuiz(q);
      emitAdminAction({ kind: 'quiz', quiz: q });
    }
    if (!activeQuiz) return;
    const rightKey = activeQuiz.correct;
    const user = throneDuelState && players.get(throneDuelState.minId) ? players.get(throneDuelState.minId) : getCurrentSimUser();
    dispatchSimEvent({ type: 'chat', ...user, comment: rightKey });
  });

  document.getElementById('addCustomQuizBtn').addEventListener('click', () => {
    const q = document.getElementById('customQText').value.trim();
    const A = document.getElementById('customOptA').value.trim();
    const B = document.getElementById('customOptB').value.trim();
    const C = document.getElementById('customOptC').value.trim();
    const D = document.getElementById('customOptD').value.trim();
    const correct = document.getElementById('customCorrectSelect').value;

    if (!q || !A || !B || !C || !D) {
      alert('Vui lòng nhập đầy đủ câu hỏi và 4 đáp án A, B, C, D!');
      return;
    }

    const newQuiz = { q, options: { A, B, C, D }, correct };
    IMPERIAL_QUIZZES.push(newQuiz);
    refreshQuizDropdown();
    triggerImperialQuiz(newQuiz);
    emitAdminAction({ kind: 'quiz', quiz: newQuiz });
  });

  document.getElementById('simLikeBtn').addEventListener('click', () => {
    const user = getCurrentSimUser();
    dispatchSimEvent({ type: 'like', ...user, likeCount: 30 });
  });

  document.getElementById('simShareBtn').addEventListener('click', () => {
    const user = getCurrentSimUser();
    dispatchSimEvent({ type: 'share', ...user });
  });

  document.querySelectorAll('.gift-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const user = getCurrentSimUser();
      dispatchSimEvent({
        type: 'gift',
        ...user,
        giftName: btn.dataset.gift,
        diamondCount: Number(btn.dataset.coins),
        icon: btn.dataset.icon,
        isShield: btn.dataset.shield === '1',
        isSword: btn.dataset.sword === '1',
        isFirework: btn.dataset.firework === '1',
        isChest: btn.dataset.chest === '1'
      });
    });
  });

  const quizSelect = document.getElementById('quizBankSelect');
  function refreshQuizDropdown() {
    if (!quizSelect) return;
    quizSelect.innerHTML = `<option value="">-- Chọn câu hỏi cụ thể (Tổng: ${IMPERIAL_QUIZZES.length} câu) --</option>` +
      IMPERIAL_QUIZZES.map((item, idx) => {
        const ans = item.options[item.correct];
        return `<option value="${idx}">Câu ${idx + 1}: ${escapeHtml(item.q.slice(0, 58))}... [Đáp án: ${item.correct} - ${escapeHtml(ans)}]</option>`;
      }).join('');
  }
  refreshQuizDropdown();

  const launchSelBtn = document.getElementById('launchSelectedQuizBtn');
  if (launchSelBtn) {
    launchSelBtn.addEventListener('click', () => {
      const idx = quizSelect.value;
      if (idx === '' || !IMPERIAL_QUIZZES[idx]) {
        alert('Hãy chọn một câu hỏi trong danh sách trước, hoặc bấm "🔔 Phát Đề Ngẫu Nhiên"!');
        return;
      }
      const chosen = IMPERIAL_QUIZZES[Number(idx)];
      triggerImperialQuiz(chosen);
      emitAdminAction({ kind: 'quiz', quiz: chosen });
    });
  }

  document.getElementById('triggerQuizBtn').addEventListener('click', () => {
    if (throneDuelState) finishThroneDuel();
    const q = getNextRandomQuiz();
    triggerImperialQuiz(q);
    emitAdminAction({ kind: 'quiz', quiz: q });
  });

  const startBoostBtnEl = document.getElementById('startBoostBtn');
  if (startBoostBtnEl) startBoostBtnEl.addEventListener('click', () => {
    startGiftBoost(60);
    emitAdminAction({ kind: 'gift_boost', seconds: 60 });
  });
  const exportBoardBtnEl = document.getElementById('exportLeaderboardBtn');
  if (exportBoardBtnEl) exportBoardBtnEl.addEventListener('click', exportLeaderboardImage);
  const startRandomBtnEl = document.getElementById('startRandomEventBtn');
  if (startRandomBtnEl) startRandomBtnEl.addEventListener('click', () => {
    if (throneDuelState) finishThroneDuel();
    if (auctionLeft > 0) finishAuction();
    if (activeQuiz) {
      const qm = document.getElementById('quizModal');
      if (qm) qm.classList.add('hidden');
      activeQuiz = null;
    }
    const evType = (randomEventSeq++ % 2 === 0) ? 'boss' : 'envoy';
    startRandomEvent(evType);
    emitAdminAction({ kind: 'random_event', type: evType });
  });
  const startAuctionBtnEl = document.getElementById('startAuctionBtn');
  if (startAuctionBtnEl) startAuctionBtnEl.addEventListener('click', () => {
    if (throneDuelState) finishThroneDuel();
    bossState = null;
    envoyState = null;
    if (activeQuiz) {
      const qm = document.getElementById('quizModal');
      if (qm) qm.classList.add('hidden');
      activeQuiz = null;
    }
    startAuction(90);
    emitAdminAction({ kind: 'auction', seconds: 90 });
  });

  document.getElementById('testCoronationBtn').addEventListener('click', () => {
    const user = getCurrentSimUser();
    dispatchSimEvent({
      type: 'gift',
      ...user,
      giftName: 'Sư Tử Vàng',
      diamondCount: 300,
      icon: '🦁'
    });
  });

  const celebration2dBtn = document.getElementById('trigger2dCelebrationBtn');
  if (celebration2dBtn) {
    celebration2dBtn.addEventListener('click', () => {
      if (fxEngine) {
        fxEngine.triggerGrandCelebration(50, 35);
        if (typeof fxEngine.triggerCoinRain === 'function') fxEngine.triggerCoinRain(40);
        showImperialDecree('🌸 ĐẠI HỶ HOÀNG CUNG 🌸', 'Khai mở Lễ Hội Hoa Đào & Thả Khổng Minh Đăng chúc phúc trường thi!');
      }
    });
  }

  // --- CÁC NÚT TEST CƠ CHẾ LIVE MỚI ---
  const testFeverBtn = document.getElementById('testFeverBtn');
  if (testFeverBtn) {
    testFeverBtn.addEventListener('click', () => {
      activateGlobalFeverMode(120);
    });
  }

  const testFirstBloodBtn = document.getElementById('testFirstBloodBtn');
  if (testFirstBloodBtn) {
    testFirstBloodBtn.addEventListener('click', () => {
      if (!activeQuiz) {
        triggerImperialQuiz();
      }
      setTimeout(() => {
        const scholars = Array.from(players.values()).slice(0, 3);
        const correctOpt = activeQuiz ? activeQuiz.correct : 'A';
        scholars.forEach((s, idx) => {
          setTimeout(() => {
            handleTikTokEvent({ type: 'chat', uniqueId: s.uniqueId, nickname: s.nickname, avatar: s.avatar, comment: correctOpt });
          }, idx * 600);
        });
      }, 500);
    });
  }

  const testJailBtn = document.getElementById('testJailBtn');
  if (testJailBtn) {
    testJailBtn.addEventListener('click', () => {
      const candidates = Array.from(players.values());
      if (candidates.length === 0) {
        alert('Chưa có sĩ tử nào trong bàn! Hãy bật Auto Demo trước.');
        return;
      }
      const target = candidates[Math.floor(Math.random() * candidates.length)];
      target.jailedUntil = Date.now() + 30000;
      showImperialDecree('⛓️ ĐẠI LAO GIAM HÃM ⛓️', `Top 1 hạ lệnh nhốt ${target.nickname} vào ngục tối 30 giây!`);
      speakImperial(`Đại nhân hạ lệnh: Nhốt sĩ tử ${target.nickname} vào ngục tối ba mươi giây!`, true);
      if (target.seatId) showFloatingToastOnSeat(target.seatId, '⛓️ BỊ NHỐT NGỤC 30S! (Tặng 1 hoa hồng để thoát)', 'toast-wrong');
      reassignAllSeats();
    });
  }

  const testUsurpDramaBtn = document.getElementById('testUsurpDramaBtn');
  if (testUsurpDramaBtn) {
    testUsurpDramaBtn.addEventListener('click', () => {
      const all = Array.from(players.values());
      if (all.length < 2) {
        const u1 = getOrCreatePlayer('test_situ_new', 'Tân Trạng Nguyên', 'assets/avatars/cat_tier_4_trang_nguyen.png');
        u1.score = 5000;
        reassignAllSeats();
        return;
      }
      const sorted = all.sort((a, b) => b.score - a.score);
      const top2 = sorted[1];
      if (top2) {
        top2.score = sorted[0].score + 180;
        reassignAllSeats();
      }
    });
  }

  const testBossRoundBtn = document.getElementById('testBossRoundBtn');
  if (testBossRoundBtn) {
    testBossRoundBtn.addEventListener('click', () => {
      startBossRoundQuiz();
    });
  }

  const testPvpArenaBtn = document.getElementById('testPvpArenaBtn');
  if (testPvpArenaBtn) {
    testPvpArenaBtn.addEventListener('click', () => {
      startPvpArenaEvent();
    });
  }

  const testTreasureEventBtn = document.getElementById('testTreasureEventBtn');
  if (testTreasureEventBtn) {
    testTreasureEventBtn.addEventListener('click', () => {
      startTreasureChestEvent();
    });
  }

  const toggle2dBtn = document.getElementById('toggle2dFxBtn');
  if (toggle2dBtn) {
    toggle2dBtn.addEventListener('click', (e) => {
      fx2dEnabled = !fx2dEnabled;
      e.target.textContent = fx2dEnabled ? '✨ Hiệu Ứng 2D: BẬT' : '⚪ Hiệu Ứng 2D: TẮT';
      e.target.classList.toggle('btn-outline', fx2dEnabled);
      e.target.classList.toggle('btn-secondary', !fx2dEnabled);
    });
  }

  document.getElementById('kingSmiteBtn').addEventListener('click', () => {
    if (!currentEmperorId) {
      alert('Hiện chưa có Hoàng Đế trên ngai vàng! Hãy bấm "👑 Test Tiến Hóa Lên Vua" trước.');
      return;
    }
    executeKingSmite('', true);
    emitAdminAction({ kind: 'smite', query: '', isManualAdmin: true });
  });

  const ministerUsurpBtn = document.getElementById('ministerUsurpBtn');
  if (ministerUsurpBtn) {
    ministerUsurpBtn.addEventListener('click', () => {
      executeMinisterUsurp('', true);
      emitAdminAction({ kind: 'usurp', uniqueId: '', isManualAdmin: true });
    });
  }

  const toggleBgBtn = document.getElementById('toggleBgBtn');
  if (toggleBgBtn) {
    toggleBgBtn.addEventListener('click', () => {
      usingCleanBg = !usingCleanBg;
      const bgImg = document.getElementById('stageBgImg');
      if (bgImg) bgImg.src = usingCleanBg ? 'assets/bg_clean.jpg' : 'assets/bg.jpg';
      emitAdminAction({ kind: 'toggle_bg', usingCleanBg });
    });
  }

  document.getElementById('toggleEditSeatsBtn').addEventListener('click', (e) => {
    editSeatsMode = !editSeatsMode;
    e.target.textContent = editSeatsMode ? '✅ Đang bật Kéo Thả Ghế (Bấm để khóa)' : '📍 Kéo thả chỉnh vị trí ghế';
    e.target.classList.toggle('btn-warning', editSeatsMode);
    renderSeats();
  });

  document.getElementById('toggleAudioBtn').addEventListener('click', (e) => {
    audioEnabled = !audioEnabled;
    if (!audioEnabled) stopAllSpeech(true);
    ensureBgmPlaying();
    e.target.textContent = audioEnabled ? '🔊 Âm thanh & Giọng đọc: BẬT' : '🔇 Âm thanh & Giọng đọc: TẮT';
  });

  // --- ĐIỀU KHIỂN NHẠC NỀN YUME TO HAZAKURA (KHÔNG LỜI) ---
  const toggleBgmBtn = document.getElementById('toggleBgmBtn');
  const bgmVolumeSlider = document.getElementById('bgmVolumeSlider');
  const bgmVolumeLabel = document.getElementById('bgmVolumeLabel');
  const chooseCustomMp3Btn = document.getElementById('chooseCustomMp3Btn');
  const customMp3Input = document.getElementById('customMp3Input');

  function updateBgmBtnText() {
    if (!toggleBgmBtn) return;
    toggleBgmBtn.textContent = bgmEnabled
      ? `🎵 Nhạc nền: ${currentBgmTrackName} (BẬT)`
      : `🔇 Nhạc nền: ${currentBgmTrackName} (TẮT)`;
    toggleBgmBtn.classList.toggle('btn-gold', bgmEnabled);
    toggleBgmBtn.classList.toggle('btn-outline', !bgmEnabled);
  }

  if (toggleBgmBtn) {
    toggleBgmBtn.addEventListener('click', () => {
      bgmEnabled = !bgmEnabled;
      ensureBgmPlaying();
      updateBgmBtnText();
    });
  }

  if (bgmVolumeSlider) {
    bgmVolumeSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      bgmVolume = val / 100;
      if (bgmVolumeLabel) bgmVolumeLabel.textContent = `${val}%`;
      if (val > 0 && !bgmEnabled) {
        bgmEnabled = true;
        updateBgmBtnText();
      }
      ensureBgmPlaying();
    });
  }

  if (chooseCustomMp3Btn && customMp3Input) {
    chooseCustomMp3Btn.addEventListener('click', () => customMp3Input.click());
    customMp3Input.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const bgmEl = document.getElementById('bgmAudio');
      if (bgmEl) {
        const fileUrl = URL.createObjectURL(file);
        bgmEl.src = fileUrl;
        currentBgmTrackName = file.name.replace(/\.[^/.]+$/, '').slice(0, 26);
        bgmEnabled = true;
        updateBgmBtnText();
        ensureBgmPlaying();
      }
    });
  }

  // Tự động phát nhạc nền Yume to Hazakura ngay khi mở trang hoặc chạm chuột lần đầu
  ensureBgmPlaying();
  ['pointerdown', 'keydown', 'click'].forEach((evtName) => {
    window.addEventListener(evtName, () => ensureBgmPlaying(), { once: true, passive: true });
  });

  document.getElementById('resetSeatsBtn').addEventListener('click', () => {
    resetSeatPositions();
  });

  document.getElementById('resetGameBtn').addEventListener('click', () => {
    players.clear();
    currentEmperorId = null;
    dragonQi = 0;
    seats.forEach(s => { s.occupantId = null; });
    renderSeats();
    updateHUDAndTables();
    emitAdminAction({ kind: 'reset_game' });
  });

  document.getElementById('toggleCleanModeBtn').addEventListener('click', () => {
    document.body.classList.add('clean-live-mode');
    document.getElementById('restoreCpBtn').classList.remove('hidden');
  });

  document.getElementById('restoreCpBtn').addEventListener('click', () => {
    document.body.classList.remove('clean-live-mode');
    document.getElementById('restoreCpBtn').classList.add('hidden');
  });

  const autoBotBtn = document.getElementById('autoBotBtn');
  function updateAutoBotBtnLabel() {
    if (!autoBotBtn) return;
    if (!autoBotTimer) {
      autoBotBtn.textContent = '🤖 Bật Auto Demo (Giữ nhịp 8–12 Sĩ Tử)';
      return;
    }
    const count = players.size;
    if (count >= 10) {
      autoBotBtn.textContent = `⏸️ Auto Demo: Đã có ${count} Sĩ Tử (Đang tạm nghỉ)`;
    } else {
      autoBotBtn.textContent = `🟢 Auto Demo: Đang giữ nhịp chậm (${count} Sĩ Tử)`;
    }
  }

  if (autoBotBtn) {
    autoBotBtn.addEventListener('click', () => {
      if (autoBotTimer) {
        clearInterval(autoBotTimer);
        autoBotTimer = null;
        updateAutoBotBtnLabel();
        return;
      }
      runBotStep();
      autoBotTimer = setInterval(runBotStep, 7500); // Chạy chậm rãi mỗi 7.5 giây
      updateAutoBotBtnLabel();
    });
  }
});

function runBotStep() {
  const autoBotBtn = document.getElementById('autoBotBtn');
  const allPlayers = Array.from(players.values());
  const realPlayers = allPlayers.filter(p => !p.uniqueId.startsWith('bot_'));
  const botPlayers = allPlayers.filter(p => p.uniqueId.startsWith('bot_'));

  // 1. Nếu có nhiều người xem thật vào (>= 10 người) và còn bot cũ -> Tự động rút bớt 1 bot để nhường ghế cho người thật
  if (realPlayers.length >= 8 && botPlayers.length > 0 && players.size >= 14) {
    const oldestBot = botPlayers.sort((a, b) => (a.lastActiveAt || 0) - (b.lastActiveAt || 0))[0];
    if (oldestBot) {
      players.delete(oldestBot.uniqueId);
      reassignAllSeats();
    }
  }

  // 2. Cho phép bot quá lâu không tương tác (> 6 phút) tự rời bàn để số lượng có lúc vơi đi tự nhiên
  const now = Date.now();
  for (const b of botPlayers) {
    if (now - (b.lastActiveAt || b.joinedAt || now) > 6 * 60 * 1000 && players.size > 6) {
      players.delete(b.uniqueId);
      reassignAllSeats();
      break;
    }
  }

  const totalCount = players.size;
  if (autoBotBtn && autoBotTimer) {
    autoBotBtn.textContent = totalCount >= 10
      ? `⏸️ Auto Demo: Đã đủ ${totalCount} Sĩ Tử (Tạm nghỉ)`
      : `🟢 Auto Demo: Chạy chậm (${totalCount}/10 Sĩ Tử)`;
  }

  // 3. KHI ĐÃ CÓ TẦM 10 - 20 THÍ SINH TRONG PHÒNG -> TẠM NGƯNG THÊM BOT!
  if (totalCount >= 10) {
    // Chỉ thỉnh thoảng (25% cơ hội) cho 1 sĩ tử bot đang ngồi trong bàn gõ đáp án khi có câu hỏi để giữ không khí
    if (activeQuiz && !quizResolved && botPlayers.length > 0 && Math.random() < 0.25) {
      const seatedBot = botPlayers[Math.floor(Math.random() * botPlayers.length)];
      const opts = ['A', 'B', 'C', 'D'];
      const pick = opts[Math.floor(Math.random() * opts.length)];
      const evt = { type: 'chat', uniqueId: seatedBot.uniqueId, nickname: seatedBot.nickname, avatar: seatedBot.avatar, comment: pick };
      handleTikTokEvent(evt);
      emitAdminAction({ kind: 'sim_event', evt });
    }
    return;
  }

  // 4. KHI SỐ LƯỢNG ÍT ĐI (< 10 THÍ SINH) -> THÊM TỪ TỪ 1 - 2 NGƯỜI VÀO BÀN HOẶC TƯƠNG TÁC NHẸ
  const pickPool = totalCount < 7
    ? SAMPLE_SCHOLARS.filter(n => !players.has('bot_' + n.toLowerCase().replace(/\s+/g, '_')))
    : SAMPLE_SCHOLARS;
  const chosenList = pickPool.length > 0 ? pickPool : SAMPLE_SCHOLARS;
  const name = chosenList[Math.floor(Math.random() * chosenList.length)];
  const uniqueId = 'bot_' + name.toLowerCase().replace(/\s+/g, '_');
  const avatar = getDistinctAvatar(uniqueId, name);

  const sendBot = (evt) => {
    handleTikTokEvent(evt);
    emitAdminAction({ kind: 'sim_event', evt });
  };

  if (activeQuiz && !quizResolved && players.has(uniqueId) && Math.random() < 0.4) {
    const opts = ['A', 'B', 'C', 'D'];
    const pick = opts[Math.floor(Math.random() * opts.length)];
    sendBot({ type: 'chat', uniqueId, nickname: name, avatar, comment: pick });
    return;
  }

  // Chủ yếu là vào bàn (!thi) và thả tim nhẹ nhàng, rất hiếm khi tặng quà nhỏ để nhường bảng vàng cho người xem thật
  const roll = Math.random();
  if (!players.has(uniqueId) || roll < 0.55) {
    sendBot({ type: 'chat', uniqueId, nickname: name, avatar, comment: '!thi' });
  } else if (roll < 0.90) {
    sendBot({ type: 'like', uniqueId, nickname: name, avatar, likeCount: 15 });
  } else {
    sendBot({ type: 'gift', uniqueId, nickname: name, avatar, giftName: 'Hoa Hồng', diamondCount: 5, icon: '🌹' });
  }
}


