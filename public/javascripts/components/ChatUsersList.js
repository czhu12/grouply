var React = require('react');
var ChatUser = require('./ChatUser');

var ChatUsersList = React.createClass({
  render: function() {
    var users = this.props.users.map(function(user) {
      return <ChatUser user={user} />;
    });

    return (
      <div>
        {users}
      </div>
    );
  }
});

module.exports = ChatUsersList;
