import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import CourseList from 'CourseList';
/* eslint-enable */

const CourseChoice = (props) => {
  const { router, settings } = props;

  // render items based on choosing or managing mode
  const mode = settings.scoringMode;
  const renderTitle = () => {
    if (mode) {
      return 'Choose Course';
    }
    return 'Manage Courses';
  };

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => props.router.push('/start')}
    > Main Menu</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title={renderTitle()} />
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
