// server.js
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const { whatsapp } = require("./lib/whatsapp");

const app = express();
const puerto = 3000;

app.use(bodyParser.json());
app.use("/api", route);

//*inicia el server
// function initServer() {
  app.listen(puerto, () => {
    console.log(`Servidor en puerto ${puerto}`);
    whatsapp.initialize();
  });
// }
// export default initServer;