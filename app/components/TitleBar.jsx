import React, { PropTypes } from 'react';

// TODO: figure how to use this for buttons

const TitleBar = props => (
  <div data-sticky-container>
    <div className="title-bar sticky" data-sticky data-options="marginTop:0;">
      <h4 className="title-bar-text">{props.title}</h4>
    </div>
  </div>
);

export default TitleBar;

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};
