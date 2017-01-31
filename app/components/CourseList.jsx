import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Course from 'Course'; // eslint-disable-line

/* eslint-disable no-confusing-arrow */
const CourseList = (props) => {
  const { courses, settings } = props;
  const scoring = settings.scoringMode;
  const group = settings.groupMode;

  const renderCourses = () =>
    courses.sort((a, b) => a.name < b.name ? -1 : 1)
    .map(course => <Course key={course.id} {...course} />);
  // change title of last column for scoring or manage mode
  const renderLastColumnTitle = () => {
    if (scoring || group) {
      return 'Select';
    }
    return 'Actions';
  };
  // only render add button in manage mode
  const renderAddButton = () => {
    if (!scoring && !group) {
      return <Link to="/add-course" className="button expanded">Add New Course</Link>;
    }
    return null;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>ST</td>
            <td>{renderLastColumnTitle()}</td>
          </tr>
        </thead>
        <tbody>
          {renderCourses()}
        </tbody>
      </table>
      {renderAddButton()}
    </div>
  );
};

export default connect(state => state)(CourseList);
/* eslint-disable react/forbid-prop-types */
CourseList.propTypes = {
  courses: React.PropTypes.array,
  settings: React.PropTypes.object,
};
