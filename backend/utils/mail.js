const nodemailer = require("nodemailer");
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;

exports.sendMail = (user, text, subject) => {
  const smtpTrans = nodemailer.createTransport({
    service: "gmail", //smtp.gmail.com  //in place of service use host...
    secure: false, //true
    port: 25, //465
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    to: user.email,
    from: GMAIL_USER,
    subject,
    text,
  };

  return smtpTrans.sendMail(mailOptions);
};
