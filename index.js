const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "ameer1122084-b2wc.aternos.me", // عنوان السيرفر
  port: 13388,                          // البورت
  username: "AMEER1990",                // اسم البوت أو الإيميل
  version: "1.20.1"                     // إصدار ماينكرافت
});

// عند تسجيل الدخول
bot.on('login', () => {
  console.log('✔ Bot logged in successfully!');
});

// عند حدوث خطأ
bot.on('error', (err) => {
  console.log('❌ Error:', err);
});

// عند فصل البوت
bot.on('end', () => {
  console.log('⚠ Bot disconnected! Restart the script if needed.');
  // لا تستخدم bot.connect() لأنها غير موجودة
});

// لتجنب الطرد بتحريك البوت حركة بسيطة
setInterval(() => {
  if (!bot.entity) return;
  const pos = bot.entity.position;
  const dx = Math.random() - 0.5;
  const dz = Math.random() - 0.5;
  bot.setControlState('forward', true);
  bot.lookAt(pos.offset(dx, 0, dz));
  setTimeout(() => bot.setControlState('forward', false), 1000);
}, 5000);