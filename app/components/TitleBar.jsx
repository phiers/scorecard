import React, { PropTypes } from 'react';

// TODO: figure how to use this for buttons
// TODO: figure out sticky navigation

const TitleBar = props => (
  <div className="title-bar">
    <span className="title-bar-left">{props.left}</span>
    <h4 className="title-bar-text">{props.title}</h4>
    <span className="title-bar-right">{props.right}</span>
  </div>
);

export default TitleBar;

TitleBar.propTypes = {
  left: PropTypes.func,
  title: PropTypes.string.isRequired,
  right: PropTypes.func,
};
