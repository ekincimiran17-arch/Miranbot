const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log(qr);
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