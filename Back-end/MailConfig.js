const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "avatarverse999@outlook.com",
    pass: "Yourfinalmessage",
  },
});


module.exports = transporter;
