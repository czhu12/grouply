var React = require('react');
var ChatMessage = require('./ChatMessage');

var ChatMessageList = React.createClass({
  render: function() {
    var messages = this.props.messages.map(function(message) {
      return <ChatMessage message={message} />;
    });

    return (
      <div className="messages-container">
        <ul ref="chatList" className="messages-list">
          {messages}
        </ul>
      </div>
    );
  },
  componentDidUpdate: function() {
    this._scrollToBottom();
  },
  _scrollToBottom: function() {
    var ul = this.refs.chatList.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  },
});



module.exports = ChatMessageList;
