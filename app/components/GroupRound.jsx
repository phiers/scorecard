import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'groupRoundActions'; // eslint-disable-line

const GroupRound = (props) => {
  const { name, id, course, checked } = props;
  const handleChange = () => {
    props.dispatch(actions.startSelectGroup(id));
  };

  return (
    <tr className="group-list-row">
      <td><input type="checkbox" onChange={handleChange} checked={checked} /></td>
      <td>{name}</td>
      <td>{course.name}</td>
    </tr>
  );
};

GroupRound.propTypes = {
  checked: PropTypes.bool.isRequired,
  // course: PropTypes.bool.isRequired, course can be bool or object
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect()(GroupRound);
