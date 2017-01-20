import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import * as actions from 'settingsActions';
import { googleProvider } from 'firebaseConfig';
/* eslint-enable */

const Login = (props) => {
  const onLogin = () => {
    props.dispatch(actions.startLogin(googleProvider));
  };
  return (
    <div className="login">
      <h1 className="page-title">Todo App</h1>
      <div className="row">
        <div className="columns small-centered small-10 medium 6 large 4">
          <div className="callout callout-auth">
            <h3>Please Login</h3>
            <button className="button" onClick={onLogin}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Login);

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
