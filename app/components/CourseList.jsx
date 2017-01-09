import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const CourseList = (props) => {
  const { courses } = props;
  const renderCourses = () =>
    courses.map(course =>
      <tr key={course.id}>
        <td>{course.name}</td>
        <td>{course.state}</td>
        <td>
          <button className="button tiny alert">DEL</button>
        </td>
      </tr>,
    );

  return (
    <div className="course-list">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>ST</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {renderCourses()}
        </tbody>
      </table>
      <Link to="/add-course" className="button expanded">Add New Course</Link>
    </div>
  );
};

export default connect(state => state)(CourseList);

CourseList.propTypes = {
  courses: React.PropTypes.array, // eslint-disable-line
};
