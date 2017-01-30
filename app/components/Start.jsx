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
        <Link to="/players" className=" button large">Manage Players</Link>
      </div>
      <div className="column small-centered">
        <Link to="/courses" className=" button large">Manage Courses</Link>
      </div>
      <div className="column small-centered">
        <Link to="/settings" className="button large user-info">Manage My User Info</Link>
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
