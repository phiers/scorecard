import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import courseActions from 'courseActions';  // eslint-disable-line
import roundActions from 'roundActions';  // eslint-disable-line

const Course = (props) => {
  const { courses, dispatch, name, state, settings, id } = props;
  const mode = settings.scoringMode;
  // continue setting up round object when in scoring mode
  const handleSelect = (evt) => {
    evt.preventDefault();
    const courseChoice = courses.find(c => c.id.toString() === evt.target.id);
    dispatch(roundActions.selectCourse(courseChoice));
    browserHistory.push('/round');
  };
  const handleDelete = (evt) => {
    evt.preventDefault();
    const itemId = parseInt(evt.target.id, 10);
    dispatch(courseActions.removeCourse(itemId));
  };
  const handleEdit = (evt) => {
    evt.preventDefault();
    browserHistory.push(`edit-course/${id}`);
  };
  const renderAction = () => {
    if (mode) {
      return <button className="button tiny" id={id} onClick={handleSelect}>Select</button>;
    }
    return (
      <div className="button-group tiny">
        <button className="button" id={id} onClick={handleEdit}>Edit</button>
        <button className="button" id={id} onClick={handleDelete}>Delete</button>
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
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    user: PropTypes.object,
    scoringMode: PropTypes.bool,
  }),
};
