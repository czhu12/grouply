var GrouplyAPI = require('../api/grouplyAPI');
var React = require('react');
var styles = require('../styles/styles.js');

var ChatForm = React.createClass({
  getInitialState: function() {
    return {
      userInput: ''
    };
  },
  keyPressed: function(e) {
    if (e.key == "Enter" && e.target.value.trim() != '') {
      this.handleEnter();
    }
  },
  handleChange: function(e) {
    this.setState({userInput: e.target.value});
  },
  clearAndFocusInput: function() {
    this.setState({userInput: ''}); 
  },
  handleEnter: function() {
    var thiz = this;
    GrouplyAPI.sendMessage(this.state.userInput, function() {
      thiz.clearAndFocusInput();
    });
  },
  render: function() {
    return (
      <div className="comment-form row">
        <div className="col-md-10">
          <input type="text" value={this.state.userInput} onChange={this.handleChange} onKeyDown={this.keyPressed} placeholder="Start typing something..."/>
        </div>
        <div className="col-md-2">
          <button onClick={this.handleEnter} className="btn btn-success">Send</button>
        </div>
      </div>
    );
  }
});

module.exports = ChatForm;
