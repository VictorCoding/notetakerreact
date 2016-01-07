var React = require('react');

var Repos = React.createClass({
  render: function() {
    return (
      <div>
        <p> Reposss </p>
        <p> Repos: {this.props.repos} </p>
      </div>
    );
  }
});

module.exports = Repos;