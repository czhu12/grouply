var React = require('react');
var ChatMessageList = require('./components/ChatMessageList');
var ChatForm = require('./components/ChatForm');
var ChatUsersList = require('./components/ChatUsersList');
var Router = require('react-router');

var ChatClient = React.createClass({
  getInitialState: function() {
    return {
      messages: [],
      users: [
      ]
    };
  },
  componentWillMount: function() {
    this.socket = io('http://aneyeout.com:9090');
    this.socket.on('message', function(data) {
      this.state.messages.push({
        username: data.username, 
        content: data.message
      });

      this.setState({messages: this.state.messages});
    }.bind(this));
    
    this.socket.on('user_joined', function(data) {
      this.state.users.push({
        username: data.username
      });

      this.setState({users: this.state.users});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-2">
          <ChatUsersList users={this.state.users} />
        </div>
        <div className="col-md-10">
          <div className="comment-box">
            <div>Comments</div>
            <ChatMessageList messages={this.state.messages}/>
            <ChatForm />
          </div>
        </div>
      </div>
    );
  }
});

React.render(<ChatClient />, document.getElementById('content'));
