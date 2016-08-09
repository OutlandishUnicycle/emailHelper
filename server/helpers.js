const transporter = require('./mailSetup');
const email = require('../secret.js').email;
//

const mailOptions = (giverEmail, giverName, takerEmail, takerName) => ({
    from: `"discollect staff" <${email}>`,
    to: `${giverEmail}`,
    subject: 'Someone\'s taken your item!',
    text: `
    Hello, ${giverName}!

    ${takerName} has requested to take you item. Please send them a message at: ${takerEmail}.

    Thanks for working with discollect!

    Sincerely,
    Discollect
    `,
});

const transporterSendMessage = (message) => {
  transporter.sendMail(message, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}

const sendMessage = (gEmail, gUsername, tEmail, tUsername) => {
  let message = mailOptions(gEmail, gUsername, tEmail, tUsername);
  transporterSendMessage(message);
}

module.exports = {
  sendMessage
};
