import React, { Component, PropTypes } from 'react';

export default class CourseAddHole extends Component {
  render() {
    return (
      <div className="add-hole">
        <p>{this.props.holeNo}</p>
        <input type="text" placeholder="par" className="par" />
        <input type="text" placeholder="handicap" className="hdcp" />
      </div>
    );
  }
}

CourseAddHole.propTypes = {
  holeNo: PropTypes.number.isRequired,
};
