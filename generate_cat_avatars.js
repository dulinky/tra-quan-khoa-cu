const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public', 'assets', 'avatars');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. TIER 6: MÈO HOÀNG THƯỢNG (QUÀNG THƯỢNG NGẠO NGHỄ)
const svgTier6 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t6_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fffb8f" />
      <stop offset="50%" stop-color="#ffa940" />
      <stop offset="100%" stop-color="#d46b08" />
    </radialGradient>
    <linearGradient id="t6_gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff1b8" />
      <stop offset="50%" stop-color="#faad14" />
      <stop offset="100%" stop-color="#874d00" />
    </linearGradient>
    <clipPath id="circleClip">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip)">
    <!-- Background Radiant Sunlight -->
    <circle cx="100" cy="100" r="100" fill="url(#t6_bg)" />
    <!-- Sunburst rays -->
    <g opacity="0.25" stroke="#fff" stroke-width="4">
      <line x1="100" y1="100" x2="10" y2="10" />
      <line x1="100" y1="100" x2="100" y2="0" />
      <line x1="100" y1="100" x2="190" y2="10" />
      <line x1="100" y1="100" x2="200" y2="100" />
      <line x1="100" y1="100" x2="0" y2="100" />
      <line x1="100" y1="100" x2="30" y2="180" />
      <line x1="100" y1="100" x2="170" y2="180" />
    </g>

    <!-- Imperial Robe (Hoang Bao) -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#faad14" stroke="#ad6800" stroke-width="3" />
    <!-- Dragon Collar & Jade Medal -->
    <path d="M70,145 Q100,165 130,145 L135,185 Q100,195 65,185 Z" fill="#cf1322" stroke="#fff" stroke-width="1.5" />
    <circle cx="100" cy="175" r="12" fill="#52c41a" stroke="#fadb14" stroke-width="3" />
    <circle cx="100" cy="175" r="4" fill="#fff" />

    <!-- Cat Body & Chubby Head -->
    <!-- Ears -->
    <polygon points="50,60 30,15 75,40" fill="#fa8c16" stroke="#d4380d" stroke-width="3" />
    <polygon points="50,55 38,25 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,15 125,40" fill="#fa8c16" stroke="#d4380d" stroke-width="3" />
    <polygon points="150,55 162,25 130,42" fill="#ffccc7" />

    <!-- Head -->
    <ellipse cx="100" cy="98" rx="60" ry="50" fill="#ffbb96" stroke="#d4380d" stroke-width="3.5" />
    <!-- Cheeks (Extra chubby Quàng Thượng) -->
    <ellipse cx="65" cy="115" rx="22" ry="16" fill="#ffbb96" />
    <ellipse cx="135" cy="115" rx="22" ry="16" fill="#ffbb96" />
    <circle cx="60" cy="112" r="9" fill="#ff7875" opacity="0.6" />
    <circle cx="140" cy="112" r="9" fill="#ff7875" opacity="0.6" />

    <!-- Smug half-closed Eyes (Phán xét chúng sinh meme) -->
    <ellipse cx="72" cy="95" rx="12" ry="7" fill="#fff" stroke="#5c2200" stroke-width="2.5" />
    <ellipse cx="73" cy="95" rx="5" ry="6" fill="#262626" />
    <circle cx="75" cy="93" r="2" fill="#fff" />
    <!-- Smug eyelid fold -->
    <path d="M60,90 Q72,83 85,92" fill="none" stroke="#5c2200" stroke-width="3" stroke-linecap="round" />

    <ellipse cx="128" cy="95" rx="12" ry="7" fill="#fff" stroke="#5c2200" stroke-width="2.5" />
    <ellipse cx="127" cy="95" rx="5" ry="6" fill="#262626" />
    <circle cx="125" cy="93" r="2" fill="#fff" />
    <path d="M115,92 Q128,83 140,90" fill="none" stroke="#5c2200" stroke-width="3" stroke-linecap="round" />

    <!-- Nose & Smug Mouth -->
    <polygon points="96,105 104,105 100,111" fill="#d4380d" />
    <path d="M90,115 Q100,120 100,111 Q100,120 110,115" fill="none" stroke="#5c2200" stroke-width="3" stroke-linecap="round" />

    <!-- Majestic Whiskers -->
    <line x1="45" y1="108" x2="15" y2="105" stroke="#5c2200" stroke-width="2" stroke-linecap="round" />
    <line x1="45" y1="116" x2="18" y2="119" stroke="#5c2200" stroke-width="2" stroke-linecap="round" />
    <line x1="155" y1="108" x2="185" y2="105" stroke="#5c2200" stroke-width="2" stroke-linecap="round" />
    <line x1="155" y1="116" x2="182" y2="119" stroke="#5c2200" stroke-width="2" stroke-linecap="round" />

    <!-- Grand Imperial Crown (Mũ Bình Thiên / Cửu Long Hoàng Đế) -->
    <!-- Crown Board -->
    <path d="M45,45 L155,45 L165,33 L35,33 Z" fill="url(#t6_gold)" stroke="#874d00" stroke-width="2.5" />
    <rect x="70" y="42" width="60" height="22" rx="4" fill="#cf1322" stroke="#874d00" stroke-width="2" />
    <!-- Ruby Gem on Crown -->
    <circle cx="100" cy="53" r="7" fill="#f5222d" stroke="#fff" stroke-width="1.5" />
    <!-- Pearls dangling in front of imperial eyes -->
    <g fill="#ffe58f" stroke="#874d00" stroke-width="1">
      <circle cx="55" cy="50" r="3" /><circle cx="55" cy="58" r="3" />
      <circle cx="75" cy="50" r="3" /><circle cx="75" cy="60" r="3" />
      <circle cx="100" cy="50" r="3" /><circle cx="100" cy="62" r="3" />
      <circle cx="125" cy="50" r="3" /><circle cx="125" cy="60" r="3" />
      <circle cx="145" cy="50" r="3" /><circle cx="145" cy="58" r="3" />
    </g>
  </g>

  <!-- Golden Imperial Ring Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t6_gold)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <!-- Mini Crown Emblem at top -->
  <text x="100" y="24" font-size="20" text-anchor="middle" dominant-baseline="central">👑</text>
</svg>`;

// 2. TIER 5: MÈO THỪA TƯỚNG (MÈO XIÊM LIẾC XÉO TÍNH KẾ ĐOẠT NGÔI)
const svgTier5 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t5_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#b37feb" />
      <stop offset="60%" stop-color="#531dab" />
      <stop offset="100%" stop-color="#22075e" />
    </radialGradient>
    <linearGradient id="t5_border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#efdbff" />
      <stop offset="50%" stop-color="#9254de" />
      <stop offset="100%" stop-color="#391085" />
    </linearGradient>
    <clipPath id="circleClip5">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip5)">
    <!-- Purple Royal Night Background -->
    <circle cx="100" cy="100" r="100" fill="url(#t5_bg)" />

    <!-- Robe (Tử Bào Quan Đại Thần) -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#391085" stroke="#9254de" stroke-width="3" />
    <!-- Mandarin Square / Bổ Tử Phẩm Cấp -->
    <rect x="75" y="152" width="50" height="42" rx="4" fill="#ffd666" stroke="#b37feb" stroke-width="2" />
    <text x="100" y="174" font-size="18" text-anchor="middle" dominant-baseline="central">🦅</text>

    <!-- Ears (Siamese dark points) -->
    <polygon points="50,60 30,20 75,40" fill="#261b17" stroke="#000" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#594339" />
    <polygon points="150,60 170,20 125,40" fill="#261b17" stroke="#000" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#594339" />

    <!-- Siamese Cream Body & Head -->
    <ellipse cx="100" cy="100" rx="58" ry="48" fill="#f5e8d0" stroke="#43281c" stroke-width="3" />
    <!-- Siamese Dark Mask (Mặt xám đen đặc trưng) -->
    <path d="M68,85 Q100,75 132,85 Q145,115 125,128 Q100,135 75,128 Q55,115 68,85 Z" fill="#3d2b1f" />

    <!-- Scheming Side-Eye (Mắt liếc xéo sắc lẹm màu xanh lam) -->
    <!-- Left Eye looking sharp right -->
    <ellipse cx="78" cy="98" rx="14" ry="10" fill="#e6f7ff" stroke="#000" stroke-width="2" />
    <ellipse cx="85" cy="98" rx="6" ry="8" fill="#096dd9" />
    <ellipse cx="87" cy="98" rx="3" ry="5" fill="#001529" />
    <circle cx="88" cy="95" r="2" fill="#fff" />
    <!-- Scheming Eyebrow -->
    <path d="M66,88 Q78,82 92,90" fill="none" stroke="#d4b106" stroke-width="3" stroke-linecap="round" />

    <!-- Right Eye looking sharp right -->
    <ellipse cx="122" cy="98" rx="14" ry="10" fill="#e6f7ff" stroke="#000" stroke-width="2" />
    <ellipse cx="129" cy="98" rx="6" ry="8" fill="#096dd9" />
    <ellipse cx="131" cy="98" rx="3" ry="5" fill="#001529" />
    <circle cx="132" cy="95" r="2" fill="#fff" />
    <path d="M110,90 Q124,82 136,88" fill="none" stroke="#d4b106" stroke-width="3" stroke-linecap="round" />

    <!-- Nose & Mischievous Smirk -->
    <polygon points="97,112 103,112 100,117" fill="#1f1105" />
    <path d="M92,122 Q100,126 100,118 Q102,125 114,120" fill="none" stroke="#f5e8d0" stroke-width="2.5" stroke-linecap="round" />

    <!-- Scheming long whiskers -->
    <line x1="50" y1="115" x2="15" y2="120" stroke="#f5e8d0" stroke-width="2" stroke-linecap="round" />
    <line x1="50" y1="122" x2="20" y2="132" stroke="#f5e8d0" stroke-width="2" stroke-linecap="round" />
    <line x1="150" y1="115" x2="185" y2="120" stroke="#f5e8d0" stroke-width="2" stroke-linecap="round" />
    <line x1="150" y1="122" x2="180" y2="132" stroke="#f5e8d0" stroke-width="2" stroke-linecap="round" />

    <!-- High Minister Winged Hat (Mũ Cánh Chuồn Thừa Tướng) -->
    <!-- Wing left -->
    <ellipse cx="30" cy="52" rx="28" ry="7" transform="rotate(-10 30 52)" fill="#22075e" stroke="#b37feb" stroke-width="2" />
    <!-- Wing right -->
    <ellipse cx="170" cy="52" rx="28" ry="7" transform="rotate(10 170 52)" fill="#22075e" stroke="#b37feb" stroke-width="2" />
    <!-- Cap Dome -->
    <path d="M65,58 Q100,30 135,58 L128,68 Q100,55 72,68 Z" fill="#22075e" stroke="#b37feb" stroke-width="2.5" />
    <!-- Cap Base Band -->
    <rect x="68" y="58" width="64" height="12" rx="3" fill="#9254de" stroke="#efdbff" stroke-width="1.5" />
    <circle cx="100" cy="64" r="4" fill="#ffd666" />
  </g>

  <!-- Regal Purple Ring Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t5_border)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.6" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">🗡️</text>
</svg>`;

// 3. TIER 4: MÈO TRẠNG NGUYÊN (MÈO TAM THỂ CƯỜI HÍP MẮT VANG DỌNG ĐỖ ĐẦU)
const svgTier4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t4_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fff1f0" />
      <stop offset="60%" stop-color="#ff7875" />
      <stop offset="100%" stop-color="#a8071a" />
    </radialGradient>
    <linearGradient id="t4_gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffb8f" />
      <stop offset="50%" stop-color="#d48806" />
      <stop offset="100%" stop-color="#613400" />
    </linearGradient>
    <clipPath id="circleClip4">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip4)">
    <circle cx="100" cy="100" r="100" fill="url(#t4_bg)" />

    <!-- Scarlet Silk Robe (Áo Gấm Đỏ Trạng Nguyên) -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#cf1322" stroke="#fadb14" stroke-width="3" />
    <path d="M80,146 L100,175 L120,146 Z" fill="#fadb14" />

    <!-- Ears -->
    <polygon points="50,60 30,20 75,40" fill="#d46b08" stroke="#873800" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,20 125,40" fill="#262626" stroke="#000" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#ffccc7" />

    <!-- Calico White Head with Calico Patches -->
    <ellipse cx="100" cy="102" rx="58" ry="48" fill="#fff" stroke="#5c2200" stroke-width="3" />
    <!-- Calico Orange Patch on Left -->
    <path d="M44,80 Q65,65 80,82 Q75,110 50,115 Z" fill="#fa8c16" />
    <!-- Calico Black Patch on Right -->
    <path d="M156,80 Q135,65 125,82 Q130,105 152,112 Z" fill="#262626" />

    <!-- Laughing Eyes (Cười tít mắt siêu vui mừng đậu thủ khoa) -->
    <path d="M62,96 Q74,84 86,96" fill="none" stroke="#262626" stroke-width="4" stroke-linecap="round" />
    <path d="M114,96 Q126,84 138,96" fill="none" stroke="#262626" stroke-width="4" stroke-linecap="round" />

    <!-- Rosy Happy Cheeks -->
    <ellipse cx="60" cy="110" rx="12" ry="8" fill="#ff7875" opacity="0.7" />
    <ellipse cx="140" cy="110" rx="12" ry="8" fill="#ff7875" opacity="0.7" />

    <!-- Big Happy Open Mouth -->
    <polygon points="96,104 104,104 100,109" fill="#ff4d4f" />
    <path d="M86,114 Q100,135 114,114 Z" fill="#a8071a" stroke="#262626" stroke-width="2" />
    <path d="M92,124 Q100,135 108,124 Z" fill="#ff7875" />

    <!-- Joyful Whiskers -->
    <line x1="45" y1="108" x2="15" y2="105" stroke="#262626" stroke-width="2" stroke-linecap="round" />
    <line x1="45" y1="116" x2="20" y2="120" stroke="#262626" stroke-width="2" stroke-linecap="round" />
    <line x1="155" y1="108" x2="185" y2="105" stroke="#262626" stroke-width="2" stroke-linecap="round" />
    <line x1="155" y1="116" x2="180" y2="120" stroke="#262626" stroke-width="2" stroke-linecap="round" />

    <!-- Scholar Hat with 2 Red Flowers (Mũ Cánh Chuồn Cài Hoa Trạng Nguyên) -->
    <!-- Wing left -->
    <ellipse cx="28" cy="54" rx="26" ry="6" transform="rotate(-8 28 54)" fill="#1f1f1f" stroke="#fadb14" stroke-width="2" />
    <!-- Wing right -->
    <ellipse cx="172" cy="54" rx="26" ry="6" transform="rotate(8 172 54)" fill="#1f1f1f" stroke="#fadb14" stroke-width="2" />
    <!-- Hat body -->
    <path d="M68,58 Q100,34 132,58 L126,68 Q100,56 74,68 Z" fill="#1f1f1f" stroke="#fadb14" stroke-width="2.5" />
    <rect x="70" y="58" width="60" height="10" rx="3" fill="#cf1322" stroke="#fadb14" stroke-width="1.5" />
    <!-- Two Red Roses on Hat! -->
    <circle cx="68" cy="54" r="8" fill="#f5222d" stroke="#fff" stroke-width="1.5" />
    <circle cx="68" cy="54" r="4" fill="#ff7875" />
    <circle cx="132" cy="54" r="8" fill="#f5222d" stroke="#fff" stroke-width="1.5" />
    <circle cx="132" cy="54" r="4" fill="#ff7875" />
  </g>

  <!-- Festive Red-Gold Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t4_gold)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">🌺</text>
</svg>`;

// 4. TIER 3: MÈO CỬ NHÂN (MÈO XÁM ĐEO KÍNH NGỐ TRI THỨC)
const svgTier3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t3_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#bae7ff" />
      <stop offset="60%" stop-color="#2f54eb" />
      <stop offset="100%" stop-color="#030852" />
    </radialGradient>
    <linearGradient id="t3_border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#91d5ff" />
      <stop offset="50%" stop-color="#1890ff" />
      <stop offset="100%" stop-color="#003a8c" />
    </linearGradient>
    <clipPath id="circleClip3">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip3)">
    <circle cx="100" cy="100" r="100" fill="url(#t3_bg)" />

    <!-- Scholar Blue Robe -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#10239e" stroke="#69c0ff" stroke-width="3" />
    <path d="M85,145 L100,175 L115,145 Z" fill="#bae7ff" />

    <!-- Grey Cat Ears -->
    <polygon points="50,60 30,20 75,40" fill="#8c8c8c" stroke="#434343" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,20 125,40" fill="#8c8c8c" stroke="#434343" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#ffccc7" />

    <!-- Grey Chubby Cat Head -->
    <ellipse cx="100" cy="102" rx="58" ry="48" fill="#bfbfbf" stroke="#434343" stroke-width="3" />
    <!-- Cheeks -->
    <ellipse cx="65" cy="116" rx="20" ry="14" fill="#bfbfbf" />
    <ellipse cx="135" cy="116" rx="20" ry="14" fill="#bfbfbf" />
    <circle cx="62" cy="115" r="8" fill="#ffadd2" opacity="0.6" />
    <circle cx="138" cy="115" r="8" fill="#ffadd2" opacity="0.6" />

    <!-- Eyes Behind Round Glasses -->
    <circle cx="75" cy="98" r="9" fill="#fff" />
    <circle cx="77" cy="98" r="5" fill="#262626" />
    <circle cx="79" cy="96" r="2" fill="#fff" />

    <circle cx="125" cy="98" r="9" fill="#fff" />
    <circle cx="123" cy="98" r="5" fill="#262626" />
    <circle cx="121" cy="96" r="2" fill="#fff" />

    <!-- GIANT ROUND NERD GLASSES (Kính tri thức) -->
    <circle cx="75" cy="98" r="17" fill="none" stroke="#141414" stroke-width="3.5" />
    <circle cx="125" cy="98" r="17" fill="none" stroke="#141414" stroke-width="3.5" />
    <line x1="92" y1="98" x2="108" y2="98" stroke="#141414" stroke-width="4" />
    <!-- Glasses glare -->
    <path d="M65,90 L75,85" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />
    <path d="M115,90 L125,85" stroke="#fff" stroke-width="2.5" stroke-linecap="round" />

    <!-- Serious Studious Nose & Mouth -->
    <polygon points="97,108 103,108 100,113" fill="#ff85c0" />
    <path d="M92,118 Q100,122 100,115 Q100,122 108,118" fill="none" stroke="#262626" stroke-width="2.5" stroke-linecap="round" />

    <!-- Whiskers -->
    <line x1="45" y1="112" x2="15" y2="112" stroke="#262626" stroke-width="2" />
    <line x1="45" y1="120" x2="20" y2="125" stroke="#262626" stroke-width="2" />
    <line x1="155" y1="112" x2="185" y2="112" stroke="#262626" stroke-width="2" />
    <line x1="155" y1="120" x2="180" y2="125" stroke="#262626" stroke-width="2" />

    <!-- Confucian Scholar Cap (Mũ Nho Sinh Vuông Vắn) -->
    <polygon points="70,62 100,38 130,62" fill="#002766" stroke="#40a9ff" stroke-width="2.5" />
    <rect x="72" y="60" width="56" height="10" rx="3" fill="#1890ff" stroke="#bae7ff" stroke-width="1.5" />
    <!-- Book in Paws -->
    <rect x="80" y="155" width="40" height="28" rx="3" fill="#f6ffed" stroke="#52c41a" stroke-width="2" />
    <line x1="100" y1="155" x2="100" y2="183" stroke="#52c41a" stroke-width="1.5" />
    <line x1="85" y1="162" x2="95" y2="162" stroke="#8c8c8c" stroke-width="1" />
    <line x1="85" y1="168" x2="95" y2="168" stroke="#8c8c8c" stroke-width="1" />
    <line x1="105" y1="162" x2="115" y2="162" stroke="#8c8c8c" stroke-width="1" />
    <line x1="105" y1="168" x2="115" y2="168" stroke="#8c8c8c" stroke-width="1" />
  </g>

  <!-- Blue Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t3_border)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">📜</text>
</svg>`;

// 5. TIER 2: MÈO TÚ TÀI (MÈO CHILL NHÂM NHI CHÉN TRÀ BỐC KHÓI)
const svgTier2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t2_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#f6ffed" />
      <stop offset="60%" stop-color="#73d13d" />
      <stop offset="100%" stop-color="#135200" />
    </radialGradient>
    <linearGradient id="t2_border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b7eb8f" />
      <stop offset="50%" stop-color="#52c41a" />
      <stop offset="100%" stop-color="#237804" />
    </linearGradient>
    <clipPath id="circleClip2">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip2)">
    <circle cx="100" cy="100" r="100" fill="url(#t2_bg)" />

    <!-- Green Robe -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#237804" stroke="#95de64" stroke-width="3" />
    <path d="M85,145 L100,175 L115,145 Z" fill="#b7eb8f" />

    <!-- White Ears -->
    <polygon points="50,60 30,20 75,40" fill="#fff" stroke="#389e0d" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,20 125,40" fill="#fff" stroke="#389e0d" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#ffccc7" />

    <!-- Cute White Cat Head -->
    <ellipse cx="100" cy="102" rx="58" ry="48" fill="#fff" stroke="#237804" stroke-width="3" />
    <!-- Zen Relaxed Eyes (Mắt híp nửa vầng trăng chill xem sự đời) -->
    <path d="M64,98 Q76,108 88,98" fill="none" stroke="#135200" stroke-width="3.5" stroke-linecap="round" />
    <path d="M112,98 Q124,108 136,98" fill="none" stroke="#135200" stroke-width="3.5" stroke-linecap="round" />

    <!-- Blush -->
    <circle cx="62" cy="112" r="8" fill="#ff7875" opacity="0.6" />
    <circle cx="138" cy="112" r="8" fill="#ff7875" opacity="0.6" />

    <!-- Content peaceful mouth -->
    <polygon points="97,105 103,105 100,110" fill="#ff85c0" />
    <path d="M92,114 Q100,119 100,112 Q100,119 108,114" fill="none" stroke="#135200" stroke-width="2.5" stroke-linecap="round" />

    <!-- Whiskers -->
    <line x1="45" y1="108" x2="15" y2="108" stroke="#135200" stroke-width="2" />
    <line x1="45" y1="116" x2="20" y2="120" stroke="#135200" stroke-width="2" />
    <line x1="155" y1="108" x2="185" y2="108" stroke="#135200" stroke-width="2" />
    <line x1="155" y1="116" x2="180" y2="120" stroke="#135200" stroke-width="2" />

    <!-- Green Scholar Headband -->
    <ellipse cx="100" cy="62" rx="42" ry="10" fill="#52c41a" stroke="#fff" stroke-width="2" />
    <circle cx="100" cy="62" r="4" fill="#faad14" />

    <!-- STEAMING HOT CUP OF TEA IN PAWS (Chén Trà Nóng Bốc Khói) -->
    <!-- Tea Cup -->
    <path d="M85,150 L115,150 L110,175 L90,175 Z" fill="#fff" stroke="#135200" stroke-width="2" />
    <!-- Green Tea Liquid -->
    <ellipse cx="100" cy="151" rx="12" ry="4" fill="#a0d911" />
    <!-- Steam Curves -->
    <path d="M94,144 Q91,136 96,130 Q100,124 95,118" fill="none" stroke="#fff" stroke-width="2" opacity="0.8" stroke-linecap="round" />
    <path d="M104,142 Q107,134 102,128 Q98,122 103,116" fill="none" stroke="#fff" stroke-width="2" opacity="0.8" stroke-linecap="round" />
    <!-- Cat Paws Holding Cup -->
    <circle cx="82" cy="160" r="7" fill="#fff" stroke="#135200" stroke-width="2" />
    <circle cx="118" cy="160" r="7" fill="#fff" stroke="#135200" stroke-width="2" />
  </g>

  <!-- Green Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t2_border)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">🍵</text>
</svg>`;

// 6. TIER 1A: MÈO ĐỒNG SINH KHÓC NHÈ (MEME CRYING CAT LO ÔN THI)
const svgTier1A = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t1a_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fff7e6" />
      <stop offset="60%" stop-color="#ffa940" />
      <stop offset="100%" stop-color="#873800" />
    </radialGradient>
    <linearGradient id="t1a_border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffd591" />
      <stop offset="50%" stop-color="#fa8c16" />
      <stop offset="100%" stop-color="#ad4e00" />
    </linearGradient>
    <clipPath id="circleClip1a">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip1a)">
    <circle cx="100" cy="100" r="100" fill="url(#t1a_bg)" />

    <!-- Simple Cloth Robe (Áo Vải Nâu Sĩ Tử Hàn Vi) -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#873800" stroke="#d46b08" stroke-width="3" />
    <path d="M85,145 L100,175 L115,145 Z" fill="#ffd591" />

    <!-- Orange Cat Ears -->
    <polygon points="50,60 30,20 75,40" fill="#fa8c16" stroke="#873800" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,20 125,40" fill="#fa8c16" stroke="#873800" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#ffccc7" />

    <!-- Head -->
    <ellipse cx="100" cy="102" rx="58" ry="48" fill="#ffe7ba" stroke="#873800" stroke-width="3" />

    <!-- CRYING MEME EYES (Đôi mắt đẫm lệ long lanh meme mèo khóc) -->
    <!-- Left Eye with tears -->
    <ellipse cx="74" cy="96" rx="14" ry="12" fill="#40a9ff" stroke="#003a8c" stroke-width="2" />
    <circle cx="71" cy="93" r="5" fill="#fff" />
    <circle cx="78" cy="98" r="3" fill="#fff" />
    <!-- Big Teardrop falling -->
    <path d="M70,108 Q66,120 66,126 A5,5 0 0,0 76,126 Q76,120 72,108 Z" fill="#69c0ff" />
    <path d="M60,90 Q74,84 85,92" fill="none" stroke="#873800" stroke-width="2.5" stroke-linecap="round" />

    <!-- Right Eye with tears -->
    <ellipse cx="126" cy="96" rx="14" ry="12" fill="#40a9ff" stroke="#003a8c" stroke-width="2" />
    <circle cx="123" cy="93" r="5" fill="#fff" />
    <circle cx="130" cy="98" r="3" fill="#fff" />
    <!-- Big Teardrop falling -->
    <path d="M128,108 Q124,120 124,126 A5,5 0 0,0 134,126 Q134,120 130,108 Z" fill="#69c0ff" />
    <path d="M115,92 Q126,84 140,90" fill="none" stroke="#873800" stroke-width="2.5" stroke-linecap="round" />

    <!-- Trembling sad mouth -->
    <polygon points="97,106 103,106 100,110" fill="#d4380d" />
    <path d="M90,118 Q100,113 110,118" fill="none" stroke="#873800" stroke-width="3" stroke-linecap="round" />

    <!-- Whiskers -->
    <line x1="45" y1="110" x2="15" y2="114" stroke="#873800" stroke-width="2" />
    <line x1="45" y1="118" x2="18" y2="124" stroke="#873800" stroke-width="2" />
    <line x1="155" y1="110" x2="185" y2="114" stroke="#873800" stroke-width="2" />
    <line x1="155" y1="118" x2="182" y2="124" stroke="#873800" stroke-width="2" />

    <!-- White Student Headband (Băng rôn quyết tâm thi đỗ) -->
    <ellipse cx="100" cy="62" rx="42" ry="8" fill="#fff" stroke="#873800" stroke-width="2" />
    <text x="100" y="65" font-size="9" font-weight="900" fill="#cf1322" text-anchor="middle" dominant-baseline="central">QUYẾT ĐỖ</text>
  </g>

  <!-- Amber Orange Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t1a_border)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">🥺</text>
</svg>`;

// 7. TIER 1B: MÈO POPCAT SĨ TỬ (MEME HÁ MỒM NGƠ NGÁC)
const svgTier1B = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <defs>
    <radialGradient id="t1b_bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#e6fffb" />
      <stop offset="60%" stop-color="#13c2c2" />
      <stop offset="100%" stop-color="#00474f" />
    </radialGradient>
    <linearGradient id="t1b_border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#87e8de" />
      <stop offset="50%" stop-color="#13c2c2" />
      <stop offset="100%" stop-color="#006d75" />
    </linearGradient>
    <clipPath id="circleClip1b">
      <circle cx="100" cy="100" r="95" />
    </clipPath>
  </defs>

  <g clip-path="url(#circleClip1b)">
    <circle cx="100" cy="100" r="100" fill="url(#t1b_bg)" />

    <!-- Scholar Robe -->
    <path d="M40,150 Q100,135 160,150 L175,205 L25,205 Z" fill="#006d75" stroke="#87e8de" stroke-width="3" />
    <path d="M85,145 L100,175 L115,145 Z" fill="#e6fffb" />

    <!-- White Ears -->
    <polygon points="50,60 30,20 75,40" fill="#fff" stroke="#00474f" stroke-width="2.5" />
    <polygon points="50,55 38,28 70,42" fill="#ffccc7" />
    <polygon points="150,60 170,20 125,40" fill="#fff" stroke="#00474f" stroke-width="2.5" />
    <polygon points="150,55 162,28 130,42" fill="#ffccc7" />

    <!-- Head -->
    <ellipse cx="100" cy="102" rx="58" ry="48" fill="#fff" stroke="#00474f" stroke-width="3" />

    <!-- POPCAT DERP WIDE EYES (Mắt to tròn ngơ ngác) -->
    <circle cx="75" cy="88" r="13" fill="#000" />
    <circle cx="72" cy="85" r="4" fill="#fff" />
    <circle cx="125" cy="88" r="13" fill="#000" />
    <circle cx="122" cy="85" r="4" fill="#fff" />

    <!-- POPCAT GIANT O-MOUTH (Há mồm to tròn kinh ngạc vì đề thi khó) -->
    <ellipse cx="100" cy="120" rx="20" ry="16" fill="#820014" stroke="#000" stroke-width="3" />
    <ellipse cx="100" cy="126" rx="12" ry="8" fill="#ff4d4f" />

    <!-- Whiskers -->
    <line x1="45" y1="108" x2="15" y2="108" stroke="#00474f" stroke-width="2" />
    <line x1="45" y1="116" x2="20" y2="120" stroke="#00474f" stroke-width="2" />
    <line x1="155" y1="108" x2="185" y2="108" stroke="#00474f" stroke-width="2" />
    <line x1="155" y1="116" x2="180" y2="120" stroke="#00474f" stroke-width="2" />

    <!-- Fabric Student Turban (Khăn Đóng Sĩ Tử) -->
    <ellipse cx="100" cy="62" rx="42" ry="8" fill="#13c2c2" stroke="#00474f" stroke-width="2" />
    <circle cx="100" cy="62" r="3" fill="#fff" />
  </g>

  <!-- Teal Border -->
  <circle cx="100" cy="100" r="95" fill="none" stroke="url(#t1b_border)" stroke-width="8" />
  <circle cx="100" cy="100" r="91" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7" />
  <text x="100" y="24" font-size="18" text-anchor="middle" dominant-baseline="central">😮</text>
</svg>`;

fs.writeFileSync(path.join(outDir, 'cat_tier_6_hoang_thuong.svg'), svgTier6, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_5_thua_tuong.svg'), svgTier5, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_4_trang_nguyen.svg'), svgTier4, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_3_cu_nhan.svg'), svgTier3, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_2_tu_tai.svg'), svgTier2, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_1_dong_sinh_1.svg'), svgTier1A, 'utf8');
fs.writeFileSync(path.join(outDir, 'cat_tier_1_dong_sinh_2.svg'), svgTier1B, 'utf8');

console.log('Successfully generated all 7 Cat Meme Avatars in', outDir);
