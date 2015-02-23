var React = require('react');

var ChatUser = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.user.username}
      </div>
    );
  }
});

module.exports = ChatUser;
