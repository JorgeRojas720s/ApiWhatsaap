const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

//* Creamos una nueva instancia de client
const whatsapp =  new Client({
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
     authStrategy: new LocalAuth()
  });

  //*genera el qr
whatsapp.on('qr', (qr) => {
    console.log('QR: ');
    qrcode.generate(qr, {
        small: true
    });
});

whatsapp.on('ready', () => {
    console.log('Cliente listooo ✅');
});

whatsapp.on('authenticated', (session) => {
    console.log('Cliente autenticado 👻', session);
});

whatsapp.on('auth_failure', (msg) => {
    console.error('Autenticacion falló 📡:', msg);
});

whatsapp.on('disconnected', (reason) => {
    console.log('Cliente desconectaoo ☠️:', reason);
});

module.exports = { whatsapp };
