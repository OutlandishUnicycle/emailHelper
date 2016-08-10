const transporter = require('./mailSetup');
const email = process.env.email;

const mailOptions = (giverEmail, giverName, takerEmail, takerName, itemname) => ({
    from: `"discollect staff" <${email}>`,
    to: `${giverEmail}`,
    subject: 'Someone\'s taken your item!',
    text: `
    Hello, ${giverName}!

    ${takerName} has requested to take your ${itemname}. Please send them a message at: ${takerEmail}.

    Thanks for working with discollect!

    Sincerely,
    Discollect
    `,
});

const transporterSendMessage = (message, res) => {
  transporter.sendMail(message, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.send('message sent to ' + message.to);
  });
}

const sendMessage = (gEmail, gUsername, tEmail, tUsername, itemname, res) => {
  itemname = itemname || 'item';
  let message = mailOptions(gEmail, gUsername, tEmail, tUsername, itemname);
  transporterSendMessage(message, res);
}

module.exports = {
  sendMessage
};
