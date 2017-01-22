import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import CourseAddHoleList from 'CourseAddHoleList';
import TitleBar from 'TitleBar';
import * as courseActions from 'courseActions';
/* eslint-enable */

const CourseAdd = (props) => {
  const { dispatch, router } = props;
  const addCourse = (evt) => {
    evt.preventDefault();
    const state = document.querySelectorAll('input')[1].value;
    const name = document.querySelectorAll('input')[0].value;
    const holeData = [];
    const pars = document.querySelectorAll('.par');
    const hdcps = document.querySelectorAll('.hdcp');
    for (let i = 0; i < 18; i += 1) {
      const par = parseInt(pars[i].textContent, 10);
      const hdcp = parseInt(hdcps[i].textContent, 10);
      holeData.push({ holeNo: i + 1, par, hdcp });
    }
    // save input
    if (name) {
      dispatch(courseActions.startAddCourse({ name, state, holeData }));
      router.push('/courses');
    }
  };
  return (
    <div>
      <TitleBar title="Add Course" />
      <div className="add-course">
        <form>
          <div className="add-course-info">
            <input type="text" placeholder="Course Name" />
            <input type="text" placeholder="  ST" />
          </div>
          <span className="add-hole-headings">
            <p>Hole</p>
            <p>Par</p>
            <p>Handicap</p>
          </span>
          < CourseAddHoleList />
          <div className="button-group">
            <button
              className="button"
              onClick={() => router.push('/courses')}
            >Cancel</button>
            <button
              className="button"
              onClick={addCourse}
            >Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(state => state)(CourseAdd);

CourseAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object, // eslint-disable-line
};
