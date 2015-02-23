var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  fbid: String, 
  created_at: Date,
  username: String,
  color: String,
  content: String
});

module.exports = Message = mongoose.model("Message", schema);
