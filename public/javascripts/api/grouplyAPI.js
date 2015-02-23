module.exports = {
  sendMessage: function(message, callback) {
    $.post('/messages', {username: username, message: message}, function(result) {
      if ('message' in result) {
        callback();
      }
    });
  }
}
