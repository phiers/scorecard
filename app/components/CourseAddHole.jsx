import React, { PropTypes } from 'react';
import UtilityInput from 'UtilityInput'; // eslint-disable-line

const CourseAddHole = (props) => {
  /* This component will display par and hdcp data if editing a course,
   * otherwise, it displays the default values. Props are passed from
   * CourseEdit down thru CourseAddHoleList
   */
  const holeNo = props.holeNo;
  // Next three lines are key to add or edit mode
  const { hdcp, par } = props.data ? props.data[holeNo - 1] : 0;
  const parDisplay = par || 4;
  const hdcpDisplay = hdcp || 9;

  return (
    <div className="add-hole">
      <span className="button-row">
        <p>{holeNo}</p>
        <UtilityInput assignedClass="par" display={parDisplay} />
        <UtilityInput assignedClass="hdcp" display={hdcpDisplay} />
      </span>
    </div>
  );
};

export default CourseAddHole;

CourseAddHole.propTypes = {
  holeNo: PropTypes.number.isRequired,
  data: PropTypes.array, // eslint-disable-line
};
