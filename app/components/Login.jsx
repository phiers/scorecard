import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
/* eslint-disable */
import TitleBar from 'TitleBar';
import * as actions from 'settingsActions';
import firebase, { googleProvider } from 'firebaseConfig';
/* eslint-enable */

const Login = () => {
  const onLogin = () => {
    firebase.auth().signInWithPopup(googleProvider);
  };
  return (
    <div>
      <TitleBar title="Login Screen" />
      <div className="login">
        <div className="callout">
          <p>This app requires you to sign in with your Google account.</p>
          <button className="button" onClick={onLogin}>Login with Google</button>
        </div>
        <p>Need a Google account or need to sign in to your account?</p>
        <p>
          <a href="https://accounts.google.com/signup?hl=en" target="_blank" rel="noopener noreferrer">Click here</a>
        </p>
      </div>
    </div>
  );
};

export default connect()(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
