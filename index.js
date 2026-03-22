const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('QR KODU OKUT');
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
