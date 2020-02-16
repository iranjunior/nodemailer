const smtpTransport = require('../config/smtp');
const buildEmail = require('../lib/buildEmail');

const send = (req, res) => {
  try {
    const mailOptions = buildEmail(req.body);

    smtpTransport().sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).json({ error }).send();
      }
      return res.status(200).json({
        message: 'Email enviado com sucesso',
      }).send();
    });
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack }).send();
  }
};
module.exports = {
  send,
};
