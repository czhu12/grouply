var express = require('express');
var router = express.Router();
var sockets = require('../lib/sockets');

/* GET users listing. */
router.post('/', function(req, res, next) {
  //io.sockets.emit('message', {username: req.body.username, message: req.body.message});
  sockets.onMessage(req.body.username, req.body.message);
  res.send({message: "Success"});
});


module.exports = router;
