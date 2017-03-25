import React from 'react';
import { Link } from 'react-router';
/* eslint-disable */
import firebase from 'firebaseConfig';
import * as actions from 'settingsActions';
import TitleBar from 'TitleBar';
/* eslint-enable */
const Start = () => (
  <div>
    <TitleBar title="Main Menu" />
    <div className="start-page">
      <div className="column small-centered">
        <Link to="round-menu" className="button large play">Play Golf</Link>
      </div>
      <div className="column small-centered">
        <Link to="/manage-menu" className="button large">Manage My Data</Link>
      </div>
      <div className="column small-centered">
        <Link to="help" className="button large">Help</Link>
      </div>
      <div className="column small-centered">
        <button
          className="alert button large"
          onClick={() => firebase.auth().signOut()}
        >Logout</button>
      </div>
    </div>
  </div>
  );

export default Start;
