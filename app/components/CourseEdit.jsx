import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from 'courseActions';  // eslint-disable-line
/* eslint-disable */
import CourseAddHoleList from 'CourseAddHoleList';
import TitleBar from 'TitleBar';
/* eslint-enable */

const CourseEdit = (props) => {
  const { router, dispatch, courses, params } = props;
  const courseToEdit = courses.filter(course => course.id === params.id);
  const { name, id, state, holeData } = courseToEdit[0];

  const editCourse = (evt) => {
    evt.preventDefault();
    const courseState = document.querySelectorAll('input')[1].value;
    const courseName = document.querySelectorAll('input')[0].value;
    const courseHoleData = [];
    const pars = document.querySelectorAll('.par');
    const hdcps = document.querySelectorAll('.hdcp');
    for (let i = 0; i < 18; i += 1) {
      const par = parseInt(pars[i].textContent, 10);
      const hdcp = parseInt(hdcps[i].textContent, 10);
      courseHoleData.push({ holeNo: i + 1, par, hdcp });
    }
    // save input
    if (name) {
      dispatch(courseActions.startEditCourse(id,
        {
          id: params.id,
          name: courseName,
          state: courseState,
          holeData: courseHoleData,
        }));
      router.push('/courses');
    }
  };

  const cancelEdit = (evt) => {
    evt.preventDefault();
    router.push('/courses');
  };

  return (
    <div>
      <TitleBar title="Edit Course" />
      <div className="add-course">
        <form>
          <div className="add-course-info">
            <input type="text" defaultValue={name} />
            <input type="text" defaultValue={state} />
          </div>
          <span className="add-hole-headings">
            <p>Hole</p>
            <p>Par</p>
            <p>Handicap</p>
          </span>
          <CourseAddHoleList data={holeData} />
          <div className="button-group">
            <button
              className="button"
              onClick={cancelEdit}
            >Cancel</button>
            <button
              className="button"
              onClick={editCourse}
            >Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(state => state)(CourseEdit);
/* eslint-disable react/forbid-prop-types */
CourseEdit.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};
