// routes.js
const { Router } = require("express");
const sendMessage = require("../send");
const router = Router();

router.post('/enviarMensaje', async (req, res) => {
  const { tel, message, location } = req.body;

  if (!tel || !message) {
    return res.status(400).send({ success: false, message: 'Telefono y mensaje requeridos' });
  }
 
  const result = await sendMessage(tel,message,location);
  if (result.success) {
    res.status(200).send(result);
  } else {
    res.status(500).send(result);
  }
});

module.exports = router;
