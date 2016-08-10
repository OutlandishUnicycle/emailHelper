const router = require('express').Router();

const _h = require('./helpers');

router.get('/', (req, res) => {
  res.send('this is the base of the api route. Nothing really happens here... But welcome!');
});

router.get('/messageQueue', (req, res) => {
  res.send('the queue has 0 messages in it');
});

// this will add a message to the queue
// giverEmail, giverUsername, takerEmail, takerUsername
router.post('/messageQueue', (req, res) => {
  _h.sendMessage(req.body.giverEmail, req.body.giverUsername, req.body.takerEmail, req.body.takerUsername, req.body.itemname);
  res.send('Messages sent to ' + req.body.takerUsername + ' and ' + req.body.giverUsername);
});

module.exports = router;
