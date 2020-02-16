const nodemailer = require('nodemailer');

const smtpTransport = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
module.exports = smtpTransport;
