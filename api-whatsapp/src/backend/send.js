const { whatsapp } = require("./lib/whatsapp");

async function sendMessage(tel, message, location) {
  try {
    const fullMessage = message + "\n\n" + location;
    const chatId = "506" + tel + "@c.us";
    console.log("popo: ", chatId)
    const number_details = await whatsapp.getNumberId(chatId);
    if (number_details) {
      // const mensaje = "ISma hp";
      for (let i = 0; i < 100; i++) {
        await whatsapp.sendMessage(chatId, fullMessage);
      }
      console.log("mensaje enviado")
      return { success: true, message: "Messages sent successfully" };
    }
  } catch (e) {
    console.log("error: ", e);
    return { success: false, message: "Internal server error" };
  }
}

module.exports = sendMessage;
