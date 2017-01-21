import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
/* eslint-disable */
import firebase from 'firebaseConfig';
import * as actions from 'settingsActions';
import TitleBar from 'TitleBar';
/* eslint-enable */
const Start = (props) => {
  const handleStart = () => {
    const { dispatch, router } = props;
    dispatch(actions.startSetScoringMode(true));
    router.push('/players');
  };
  return (
    <div>
      <TitleBar title="Golf Scorecard" />
      <div className="start-page">
        <div className="column small-centered">
          <button className="start button large" onClick={handleStart}>Start Round</button>
        </div>
        <div className="column small-centered">
          <Link to="/players" className=" button large">Manage Players</Link>
        </div>
        <div className="column small-centered">
          <Link to="/courses" className=" button large">Manage Courses</Link>
        </div>
        <div className="column small-centered">
          <Link to="/settings" className="button large">Settings</Link>
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
};

export default connect(state => state)(Start);
