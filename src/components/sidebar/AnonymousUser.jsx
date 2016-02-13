import React, { PropTypes } from 'react';
const AnonymousUser = React.createClass({
  propTypes: {
    onLogin: PropTypes.func.isRequired,
    pending: PropTypes.bool.isRequired
  },
  handleLogin() {
    window.auth0.login({
      connection: 'github'
    });
  },
  render() {
    const { onLogin, pending } = this.props;
    if (pending) return (
      <div>Loading...</div>
    );
    return (
      <div>
        <button className="ui inverted btn" onClick={ this.handleLogin }>
          <span className="octicon octicon-mark-github"></span>
          {' '}
          Sign in with Github
        </button>
      </div>
    );
  }
});
export default AnonymousUser;