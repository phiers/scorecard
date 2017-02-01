import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import GroupRound from 'GroupRound'; // eslint-disable-line

const GroupRoundList = (props) => {
  const { groups } = props;
  const renderList = () => {
    if (groups.length === 0) {
      return <tr><td>No Active Groups</td></tr>;
    }
    return groups.map(group => <GroupRound key={group.id} {...group} />,
    );
  };
  return (
    <table>
      <thead>
        <tr className="group-list-row">
          <td />
          <td>Name</td>
          <td>Course</td>
        </tr>
      </thead>
      <tbody>
        {renderList()}
      </tbody>
    </table>
  );
};

GroupRoundList.propTypes = {
  groups: PropTypes.array.isRequired, // eslint-disable-line
};

export default connect(state => ({ groups: state.groupRounds }))(GroupRoundList);
