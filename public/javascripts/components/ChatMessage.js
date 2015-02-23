var React = require('react');

var ChatMessage = React.createClass({
  render: function() {
    return (
      <div className="message">
        <div>
          <div className="message-username">{this.props.message.username}</div>
          <div className="message-content">{this.props.message.content}</div>
        </div>
      </div>
    );
  }
});

module.exports = ChatMessage;
