import React from 'react';
/* eslint-disable */
import TitleBar from 'TitleBar';
/* eslint-enable */
const Splash = () => (
  <div>
    <TitleBar title="Loading Data..." />
    <div className="start-page">
      <div className="column small-centered">
        <button className="button large play">Play Golf</button>
      </div>
      <div className="column small-centered">
        <button className="button large">Manage My Data</button>
      </div>
      <div className="column small-centered">
        <button to="help" className="button large">Help</button>
      </div>
      <div className="column small-centered">
        <button
          className="alert button large"
        >Logout</button>
      </div>
    </div>
  </div>
  );

export default Splash;
