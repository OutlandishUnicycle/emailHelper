const router = require('express').Router();

const _h = require('./helpers');

router.get('/', (req, res) => {
  res.send('this is the base of the api route. Nothing really happens here... But welcome!');
});

router.get('/taken', (req, res) => {
  res.send('the queue has 0 messages in it');
});

// this will add a message to the queue
// giverEmail, giverUsername, takerEmail, takerUsername
router.post('/taken', (req, res) => {
  _h.sendTakenMessage(req.body.giverEmail, req.body.giverUsername, req.body.takerEmail, req.body.takerUsername, req.body.itemname);
  res.send('Messages sent to ' + req.body.takerUsername + ' and ' + req.body.giverUsername);
});

router.post('/closed', (req, res) => {
  _h.sendClosedMessage(req.body.giverUsername, req.body.takerEmail, req.body.takerUsername, req.body.itemname);
  res.send('Message sent to ' + req.body.takerUsername);
});



module.exports = router;
