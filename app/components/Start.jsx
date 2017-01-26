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
        <Link to="round-menu" className="start button large">My Rounds</Link>
      </div>
      <div className="column small-centered">
        <Link to="/players" className=" button large">My Players</Link>
      </div>
      <div className="column small-centered">
        <Link to="/courses" className=" button large">My Courses</Link>
      </div>
      <div className="column small-centered">
        <Link to="/settings" className="button large">My Settings</Link>
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
