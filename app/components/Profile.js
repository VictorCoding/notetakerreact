var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes.js');
var Repos = require('./Github/Repos');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Victor Ramos' 
      },
      repos: ['a', 'b', 'c']
    };
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://')
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;