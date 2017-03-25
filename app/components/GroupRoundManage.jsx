import React from 'react';

/* eslint-disable */
import GroupRoundAdd from 'GroupRoundAdd';
import GroupRoundList from 'GroupRoundList';
import TitleBar from 'TitleBar';
/* eslint-enable */

const GroupRoundManage = (props) => {
  const { router } = props;

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => router.goBack()}
    > Go Back</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="My Group Rounds" />
      <div className="group-round">
        <GroupRoundList />
      </div>
    </div>
  );
};

export default GroupRoundManage;
