const { Client } = require('whatsapp-web.js');
const client = new Client({puppeteer: {args: ['--no-sandbox']}});

client.initialize();

client.on('qr', (qr) => {
    console.log('QR:', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
    if (message.body === '!pingg') {
        client.sendMessage(message.from, message.from);
    }
    if (message.body === 'Siapakah andi?') {
        client.sendMessage(message.from, 'ketua mpk cuy😹');
    }
});