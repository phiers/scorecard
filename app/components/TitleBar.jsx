import React, { PropTypes } from 'react';

// TODO: figure how to use this for buttons
// TODO: figure out sticky navigation

const TitleBar = props => (
  <div className="title-bar">
    <h4 className="title-bar-text">{props.title}</h4>
  </div>
);

export default TitleBar;

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
