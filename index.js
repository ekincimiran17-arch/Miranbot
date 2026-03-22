const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log('QR:', qr);
});

client.on('ready', () => {
    console.log('BOT HAZIR!');
});

client.on('message', message => {
    if (message.body === 'selam') {
        message.reply('Aleyküm selam 👋');
    }
});

client.initialize();
