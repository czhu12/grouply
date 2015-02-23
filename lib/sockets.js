function sockets() {
  console.log('=========called once========');
  var io = require('socket.io').listen(9090);

  return {
    onMessage: function(username, message) {
      io.sockets.emit('message', {username: username, message: message});
    },
    onUserJoined: function(username) {
      io.sockets.emit('user_joined', {username: username});
    }
  };
}

module.exports = sockets();
