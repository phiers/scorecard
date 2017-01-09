import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import settingsActions from 'settingsActions'; // eslint-disable-line
import TitleBar from 'TitleBar'; // eslint-disable-line

const Start = (props) => {
  const handleStart = () => {
    const { dispatch, router } = props;
    dispatch(settingsActions.setSelectionMode(true));
    router.push('/players');
  };
  return (
    <div className="start-page">
      <TitleBar title="Golf Scorecard" />
      <div className="column small-centered">
        <button className="start button large" onClick={handleStart}>Start Round</button>
      </div>
      <div className="column small-centered">
        <button className="resume button large">Resume Round</button>
      </div>
      <div className="column small-centered">
        <Link to="/players" className=" button large">Manage Players</Link>
      </div>
      <div className="column small-centered">
        <Link to="/courses-manage" className=" button large">Manage Courses</Link>
      </div>
      <div className="column small-centered">
        <Link to="/settings" className="button large">Settings</Link>
      </div>
    </div>
  );
};

export default connect(state => state)(Start);
