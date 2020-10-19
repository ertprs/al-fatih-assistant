const { Client } = require('whatsapp-web.js');
const client = new Client({puppeteer: {args: ['--no-sandbox']}});
const fs = require('fs');

const sessionData = JSON.parse(process.env.WA_KEY);

client.initialize({
    session: sessionData});

client.on('qr', (qr) => {
    console.log('QR:', qr);
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg = session;
    fs.writeFile('./session.json', JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
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