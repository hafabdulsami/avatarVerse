const generateRandomString = () => {
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  var randomString = "";
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

export const mailOptions = (Email) => {
  var RandomString = generateRandomString;
  var Email = {
    from: "avatarverse999@outlook.com",
    to: Email,
    subject: "Verification Code",
    text: "Your verification code is: " + RandomString,
  };

  return Email;
  // html: '<p>This is a <b>test email</b> sent from <i>Node.js</i>.</p>'
};
