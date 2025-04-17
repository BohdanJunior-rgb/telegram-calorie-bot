require('dotenv').config();
const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
    console.error("❌ BOT_TOKEN не знайдено! Переконайтесь, що він є у файлі .env");
    process.exit(1);
}

const GAME_URL = 'https://calorie-game-f1f4xc8yi-bohdans-projects-00e8e12f.vercel.app';
const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    console.log(`🤖 Отримано команду /start від користувача ${ctx.from.username}`);
    ctx.reply('Грай у свою гру тут 👇', {
        reply_markup: {
            inline_keyboard: [[
                { text: '🎮 Запустити гру', web_app: { url: GAME_URL } }
            ]]
        }
    });
});

// Обробка сигналів завершення
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

// 👉 Додаємо HTTP-сервер + запускаємо бота після підняття порту
const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Bot is running!');
}).listen(PORT, () => {
    console.log(`🌐 HTTP-сервер запущено на порту ${PORT}`);

    bot.launch()
        .then(() => console.log('✅ Бот успішно запущено!'))
        .catch(err => console.error('❌ Помилка запуску бота:', err));
});
