var express = require('express');
var sockets = require('../lib/sockets');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var username = getRandomUsername();
  sockets.onUserJoined(username);
  res.render('home', { username: username });
});

function getRandomUsername() {
  var row1 = [
    'shark',
    'candy',
    'child',
    'frog',
    'pony',
    'hump',
    'butt'
  ];
  var row2 = [
    'licker',
    'fatty',
    'finkle',
    'bubbles',
    'rug',
    'wrinkle',
    'hair',
    'licious',
    'roar'
  ];

  var first = row1[Math.floor(Math.random() * row1.length)];
  var second = row2[Math.floor(Math.random() * row1.length)];
  return first + second;
}
module.exports = router;
