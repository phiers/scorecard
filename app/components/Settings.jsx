import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import settingsActions from 'settingsActions'; // eslint-disable-line

import TitleBar from 'TitleBar'; // eslint-disable-line
/* eslint-disable no-param-reassign */
const Settings = (props) => {
  const { dispatch } = props;
  // const { first, last, hdcp } = props.settings;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target[0].value;
    const lastName = evt.target[1].value;
    const handicap = evt.target[2].value || 0;
    if (firstName !== '' && lastName !== '') {
      dispatch(settingsActions.updateUserInfo({
        first: firstName,
        last: lastName,
        hdcp: handicap,
      }));
      browserHistory.push('/');
    }
    evt.target[0].value = '';
    evt.target[1].value = '';
    evt.target[2].value = '';
  };
  return (
    <div>
      <TitleBar title="Settings" />
      <div className="settings">
        <h3>Enter or update your information:</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" />
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" />
          <label htmlFor="hdcp">Handicap</label>
          <input type="text" id="hcdp" />
          <button className="button expanded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default connect(state => state)(Settings);

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
