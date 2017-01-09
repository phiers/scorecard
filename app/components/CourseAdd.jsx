import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
/* eslint-disable */
import CourseAddHoleList from 'CourseAddHoleList';
import TitleBar from 'TitleBar';
import courseActions from 'courseActions';
/* eslint-enable */

class CourseAdd extends Component {
  render() {
    const addCourseInfo = (evt) => {
      evt.preventDefault();
      const { dispatch } = this.props;
      const noOfHoles = document.querySelectorAll('input')[2].value;
      const state = document.querySelectorAll('input')[1].value;
      const name = document.querySelectorAll('input')[0].value;
      const holeData = [];
      const pars = document.querySelectorAll('.par');
      const hdcps = document.querySelectorAll('.hdcp');
      const id = Date.now();
      for (let i = 0; i < noOfHoles; i += 1) {
        const par = parseInt(pars[i].value, 10);
        const hdcp = parseInt(hdcps[i].value, 10);
        holeData.push({ no: i + 1, par, hdcp });
      }
      // save input
      if (name && noOfHoles) {
        dispatch(courseActions.saveCourse({ id, name, state, noOfHoles, holeData }));
        browserHistory.push('/');
      }
    };
    return (
      <div>
        <TitleBar title="Add Course" />
        <div className="add-course">
          <form>
            <input type="text" placeholder="Course Name" />
            <div className="loc-holes">
              <input type="text" placeholder="State Abbreviation" />
              <input type="text" placeholder="No. of Holes" />
            </div>
            <hr />
            < CourseAddHoleList />
            <div className="button-group">
              <button
                className="button"
                onClick={() => browserHistory.push('/')}
              >Cancel</button>
              <button
                className="button"
                onClick={addCourseInfo}
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CourseAdd);

CourseAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
