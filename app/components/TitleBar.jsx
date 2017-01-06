import React, { PropTypes } from 'react';

// TODO: figure how to use this so the title changes based on the screen

const TitleBar = props => (
  <div className="title-bar">
    <h4 className="title-bar-text">{props.title}</h4>
  </div>
);

export default TitleBar;

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
