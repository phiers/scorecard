import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as courseActions from 'courseActions';  // eslint-disable-line
import * as roundActions from 'roundActions';  // eslint-disable-line
import * as groupActions from 'groupRoundActions'; // eslint-disable-line

const Course = (props) => {
  const { courses, dispatch, name, state, settings, id, groupRounds } = props;
  const scoring = settings.scoringMode;
  const group = settings.groupMode;

  // set up round object when in scoring mode
  const handleSelect = (evt) => {
    evt.preventDefault();
    const courseChoice = courses.find(c => c.id.toString() === evt.target.id);
    dispatch(roundActions.startSelectCourse(courseChoice));
    // did this here rather than in promise to ensure state is right for round page
    // (it depends on there being a round.course object)
    dispatch(roundActions.selectCourse(courseChoice));
    browserHistory.push('/round');
  };
  // Group select mode
  const handleGroupSelect = (evt) => {
    evt.preventDefault();
    // grab course selected
    const courseChoice = courses.find(c => c.id.toString() === evt.target.id);
    // grab relevant group round (course initially set to false on object)
    const groupChoice = groupRounds.find(g => g.course === false);
    dispatch(groupActions.startSelectCourse(groupChoice.id, courseChoice));
    dispatch(groupActions.selectGroupCourse(courseChoice));
    browserHistory.push('/round-menu');
  };

  // functionality for manage mode
  const handleDelete = (evt) => {
    evt.preventDefault();
    const itemId = evt.target.id;
    dispatch(courseActions.startRemoveCourse(itemId));
  };

  const handleEdit = (evt) => {
    evt.preventDefault();
    browserHistory.push(`edit-course/${id}`);
  };

  // render button group based on mode
  const renderAction = () => {
    if (scoring) {
      return <button className="button tiny" id={id} onClick={handleSelect}>Select</button>;
    }
    if (group) {
      return <button className="button tiny" id={id} onClick={handleGroupSelect}>Select</button>;
    }
    return (
      <div className="button-group tiny">
        <button className="button" id={id} onClick={handleEdit}>Edit</button>
        <button className="button alert" id={id} onClick={handleDelete}>Delete</button>
      </div>
    );
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{state}</td>
      <td>
        {renderAction()}
      </td>
    </tr>
  );
};

export default connect(state => state)(Course);

Course.propTypes = {
  courses: PropTypes.array.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
  groupRounds: PropTypes.object, // eslint-disable-line
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    user: PropTypes.object,
    scoringMode: PropTypes.bool,
  }),
};
