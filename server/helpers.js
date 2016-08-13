const transporter = require('./mailSetup');
const takenGiverEmail = require('../templates/toGiverItemTaken');
const takenTakerEmail = require('../templates/toTakerItemTaken');
const closedTakerEmail = require('../templates/toTakerClose');


const email = process.env.email;

const transporterSendMessage = (message) => {
  transporter.sendMail(message, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}

const sendTakenMessage = (gEmail, gUsername, tEmail, tUsername, itemname) => {
  itemname = itemname || 'item';
  let giverMessage = takenGiverEmail(gEmail, gUsername, tEmail, tUsername, itemname);
  giverMessage.from = `"discollect staff" <${email}>`;
  let takerMessage = takenTakerEmail(gEmail, gUsername, tEmail, tUsername, itemname);
  takerMessage.from = `"discollect staff" <${email}>`;

  transporterSendMessage(giverMessage);
  transporterSendMessage(takerMessage);
}

const sendClosedMessage = (gUsername, tEmail, tUsername, itemname) => {
  let closedMessage = closedTakerEmail(gUsername, tEmail, tUsername, itemname);

  giverMessage.from = `"discollect staff" <${email}>`;

  transporterSendMessage(closedMessage);
}

module.exports = {
  sendTakenMessage,
  sendClosedMessage
};
