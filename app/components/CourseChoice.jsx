import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import CourseList from 'CourseList';
/* eslint-enable */

const CourseChoice = (props) => {
  const { router, settings } = props;
  const handleContinue = () => {
    console.log('continue');
  };
  // render items based on choosing or managing mode
  const mode = settings.scoringMode;
  const renderTitle = () => {
    if (mode) {
      return 'Choose Course';
    }
    return 'Manage Courses';
  };
  const renderButton = () => {
    if (mode) {
      return <button className="button warning expanded" onClick={handleContinue}>Continue</button>;
    }
    return <button className="button expanded" onClick={() => router.push('/')}>Cancel</button>;
  };
  return (
    <div>
      <TitleBar title={renderTitle()} />
      <div className="course-choice">
        <CourseList />
        {renderButton()}
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
