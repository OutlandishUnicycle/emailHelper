const fetch = require('isomorphic-fetch');
const nm = require('nodemailer');

const pw = process.env.emailPassword;
const email = process.env.email;



const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pw,
  }
};

const transporter = nm.createTransport(smtpConfig);

module.exports = transporter;
