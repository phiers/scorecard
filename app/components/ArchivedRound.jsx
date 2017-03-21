import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as actions from 'archivedRoundActions'; // eslint-disable-line

const ArchivedRound = (props) => {
  const { date, course, id, dispatch } = props;
  const handleView = (evt) => {
    evt.preventDefault();
    browserHistory.push(`scorecard/${evt.target.id}`);
  };

  const handleDelete = (evt) => {
    evt.preventDefault();
    dispatch(actions.startRemoveRound(evt.target.id));
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{course.name}</td>
      <td>
        <div className="button-group tiny">
          <button className="button tiny" id={id} onClick={handleView}>View</button>
          <button className="alert button tiny" id={id} onClick={handleDelete}>Del</button>
        </div>
      </td>
    </tr>
  );
};

ArchivedRound.propTypes = {
  date: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired, // eslint-disable-line
};
// only require connect to get dispatch
export default connect()(ArchivedRound);
