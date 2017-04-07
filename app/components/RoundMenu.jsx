import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import { startSetScoringMode } from 'settingsActions';
import {startArchiveRound, startCancelRound} from 'roundActions';
import { startSelectPlayer } from 'playerActions';
import { startSelectGroup, startCancelGroupRound } from 'groupRoundActions';
/* eslint-enable */
const RoundMenu = (props) => {
  const { dispatch, groups, router, mode, round } = props;

  const renderStartSection = () => {
    const handleStart = (evt) => {
      dispatch(startSetScoringMode(true));
      if (evt.target.textContent === 'New Round') {
        router.push('/players');
      } else if (groups.length > 0) { // check to see if there are groups to choose from
        router.push('/group-rounds');
      } else {
        alert('There are no active groups. Select "Add Group Round" or "New Round"'); // eslint-disable-line
      }
    };

    if (mode) {
      return (
        <p>You have an active round. If you want to start
          a new round, your active round must be canceled or archived.
        </p>
      );
    }
    return (
      <div className="column small-centered">
        <button className="button large" onClick={handleStart}>New Round</button>
        <button className="button large" onClick={handleStart} disabled>Join Group Round</button>
      </div>
    );
  };

  const renderActiveRoundSection = () => {
    const handleResume = () => {
      browserHistory.push('scorecard');
    };
    const handleArchive = () => {
      dispatch(startArchiveRound());
      round.players.forEach(p => dispatch(startSelectPlayer(p.id)));
    };

    const handleCancel = () => {
      dispatch(startCancelRound());
      dispatch(startSetScoringMode(false));
      // change selection of round players to false
      if (round.players) {
        round.players.forEach(p => dispatch(startSelectPlayer(p.id)));
      }
      // set group to unchecked if group round
      if (round.groupKey) {
        // TODO: delete group round
      }
    };
    // check for active round with scoring
    if (mode && round.lastHole) {
      return (
        <div className="callout">
          <div className="column small-centered">
            <button className="button large" onClick={handleResume}>Resume Round</button>
          </div>
          <div className="column small-centered">
            <button className="button large" onClick={handleArchive}>Archive Round</button>
          </div>
          <div className="column small-centered">
            <button className="button large" onClick={handleCancel}>Cancel Round</button>
          </div>
        </div>
      );
    } else if (mode && !round.lastHole) {
      handleCancel();
    }
    return null;
  };

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => props.router.push('/start')}
    > Main Menu</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="Round Menu" />
      <div className="round-menu">
        <div>
          {renderStartSection()}
        </div>
        {renderActiveRoundSection()}
        <div className="column small-centered">
          <button className="button large" onClick={() => router.push('group-round-add')} disabled>Add Group Round</button>
        </div>
      </div>
    </div>
  );
};

RoundMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  mode: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired, // eslint-disable-line
  round: PropTypes.object.isRequired, // eslint-disable-line
  router: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    mode: state.settings.scoringMode,
    round: state.round,
    groups: state.groupRounds,
  };
};

export default connect(mapStateToProps)(RoundMenu);
