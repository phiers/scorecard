import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
/* eslint-disable */
import TitleBar from 'TitleBar';
import CourseList from 'CourseList';
/* eslint-enable */

const CourseChoice = (props) => {
  const { router, settings } = props;

  // render items based on choosing or managing mode
  const mode = settings.scoringMode;
  const group = settings.groupMode;
  const renderTitle = () => {
    if (mode || group) {
      return 'Choose Course';
    }
    return 'Manage Courses';
  };

  // render goBack button
  const text = mode ? 'Go Back' : 'Main Menu';
  const routerPath = () => {
    if (mode || group) {
      return router.push('/players');
    }
    return props.router.push('/start');
  };
  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => routerPath()}
    > {text}</button>
  );

  // only render add button in manage mode
  const renderAddButton = () => {
    if (!mode && !group) {
      return <Link to="/add-course" className="button tiny">Add Course</Link>;
    }
    return null;
  };

  return (
    <div>
      <TitleBar left={goBackButton()} title={renderTitle()} right={renderAddButton()} />
      <div className="course-choice">
        <CourseList />
      </div>
    </div>
  );
};

export default connect(state => state)(CourseChoice);
/* eslint-disable react/forbid-prop-types */
CourseChoice.propTypes = {
  router: PropTypes.object,
  settings: PropTypes.object,
};
