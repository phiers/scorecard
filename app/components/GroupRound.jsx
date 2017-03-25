import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from 'groupRoundActions'; // eslint-disable-line

const GroupRound = (props) => {
  const { name, id, checked, sponsor, mode, dispatch } = props;
  const handleChange = () => {
    dispatch(actions.startSelectGroup(id));
    // browserHistory.push('/players');
  };

  const handleDelete = () => {
    // TODO:
  };

  const renderAction = () => {
    if (mode) {
      return <td><input type="checkbox" onChange={handleChange} checked={checked} /></td>;
    }
    return <td><button className="button tiny" onClick={handleDelete}>Del</button></td>;
  };

  return (
    <tr className="group-list-row">
      <td>{name}</td>
      <td>{sponsor}</td>
      {renderAction()}
    </tr>
  );
};

GroupRound.propTypes = {
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  mode: PropTypes.bool,
  name: PropTypes.string.isRequired,
  sponsor: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  mode: state.settings.scoringMode,
});

export default connect(mapStateToProps)(GroupRound);
