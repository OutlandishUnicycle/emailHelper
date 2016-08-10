const transporter = require('./mailSetup');
const giverEmail = require('../templates/toGiver');
const takerEmail = require('../templates/toTaker');

const email = process.env.email;

const transporterSendMessage = (message) => {
  transporter.sendMail(message, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}

const sendMessage = (gEmail, gUsername, tEmail, tUsername, itemname) => {
  itemname = itemname || 'item';
  let giverMessage = giverEmail(gEmail, gUsername, tEmail, tUsername, itemname);
  giverMessage.from = `"discollect staff" <${email}>`;
  let takerMessage = takerEmail(gEmail, gUsername, tEmail, tUsername, itemname);
  takerMessage.from = `"discollect staff" <${email}>`;

  transporterSendMessage(giverMessage);
  transporterSendMessage(takerMessage);
}

module.exports = {
  sendMessage
};
