import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import GroupRoundList from 'GroupRoundList';
import * as roundActions from 'roundActions';
import * as actions from 'groupRoundActions';
/* eslint-enable */
/* eslint-disable no-alert */

const GroupRoundChoice = (props) => {
  const { router, groups, dispatch } = props;
  const handleContinue = () => {
    // create array of checked groups
    const selected = groups.filter(group => group.checked === true);
    if (selected.length === 0) {
      router.push('/players');
    } else if (selected.length > 1) {
      alert('You can only join one group');
    } else {
      // add selected group id to round object
      dispatch(roundActions.startAddGroupKey(selected[0].id));
      // clear the checkmark from db and state
      dispatch(actions.startSelectGroup(selected[0].id));
      router.push('/players');
    }
  };

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => router.push('/round-menu')}
    > Round Menu</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="Choose Group" />
      <div className="group-round">
        <GroupRoundList />
        <button className="button expanded" onClick={handleContinue}>Continue</button>
      </div>
    </div>
  );
};

GroupRoundChoice.propTypes = {
  dispatch: PropTypes.func.isRequired,
  groups: PropTypes.array, //eslint-disable-line
  router: PropTypes.object.isRequired, //eslint-disable-line
};

export default connect(state => ({ groups: state.groupRounds }))(GroupRoundChoice);
