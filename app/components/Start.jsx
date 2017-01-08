import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import TitleBar from 'TitleBar'; // eslint-disable-line

export default class Start extends Component {
  render() {
    return (
      <div className="start-page">
        <TitleBar title="Golf Scorecard" />
        <div className="column small-centered">
          <Link to="/players" className="start button large">Start Round</Link>
        </div>
        <div className="column small-centered">
          <button className="resume button large">Resume Round</button>
        </div>
        <div className="column small-centered">
          <Link to="/add-course" className=" button large">Add Course</Link>
        </div>
        <div className="column small-centered">
          <Link to="/settings" className="button large">Settings</Link>
        </div>
      </div>
    );
  }
}
