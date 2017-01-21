import React, { PropTypes } from 'react';

const TitleBar = props => (
  <div className="title-bar">
    <span className="title-bar-left">{props.left}</span>
    <h4 className="title-bar-text">{props.title}</h4>
    <span className="title-bar-right">{props.right}</span>
  </div>
);

export default TitleBar;
/* eslint-disable react/forbid-prop-types */
TitleBar.propTypes = {
  left: PropTypes.object,
  title: PropTypes.string.isRequired,
  right: PropTypes.object,
};
