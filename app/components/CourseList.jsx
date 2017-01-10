import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Course from 'Course'; // eslint-disable-line


const CourseList = (props) => {
  const { courses, settings } = props;
  const mode = settings.scoringMode;
  const renderCourses = () =>
    courses.map(course =>
      <Course key={course.id} {...course} />,
    );
  const renderLastColumnTitle = () => {
    if (mode) {
      return 'Select';
    }
    return 'Actions';
  };
  const renderAddButton = () => {
    if (!mode) {
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
