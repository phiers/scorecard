import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import * as settingsActions from 'settingsActions';
import * as roundActions from 'roundActions';
import * as playerActions from 'playerActions';
/* eslint-enable */
const RoundMenu = (props) => {
  const { dispatch, router, activeRound, round } = props;

  const renderStartSection = () => {
    const handleStart = () => {
      dispatch(settingsActions.startSetScoringMode(true));
      router.push('/players');
    };
    const handleGroupStart = () => {
      console.log('functionality todo');
    };
    if (activeRound) {
      return (
        <p>You have an active round. To resume that round, choose the appropriate button below.
          To start a new round, cancel or archive your active round.
      </p>
      );
    }
    return (
      <div className="column small-centered">
        <button className="button large" onClick={handleStart}>New Round</button>
        <button className="button large" onClick={handleGroupStart}>New Group Round</button>
      </div>
    );
  };

  const renderActiveRoundSection = () => {
    const handleResume = () => {
      router.push('/scorecard');
    };
    const handleArchive = () => {
      dispatch(roundActions.startArchiveRound());
      round.players.forEach(p => dispatch(playerActions.startSelectPlayer(p.id)));
    };
    const handleCancel = () => {
      dispatch(roundActions.startCancelRound());
      dispatch(settingsActions.startSetScoringMode(false));
      // change selection of round players to false
      if (round.players) {
        round.players.forEach(p => dispatch(playerActions.startSelectPlayer(p.id)));
      }
    };
    // check that an active round with scoring present
    if (activeRound && props.round.lastHole) {
      return (
        <div className="callout">
          <div className="column small-centered">
            <button className=" button large" onClick={handleResume}>Resume Round</button>
          </div>
          <div className="column small-centered">
            <button className=" button large" onClick={handleArchive}>Archive Round</button>
          </div>
          <div className="column small-centered">
            <button className="button large" onClick={handleCancel}>Cancel Round</button>
          </div>
        </div>
      );
    } else if (activeRound && !props.round.lastHole) {
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
          <Link to="/roundList" className="button large">History</Link>
        </div>
      </div>
    </div>
  );
};

RoundMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activeRound: PropTypes.bool.isRequired,
  round: PropTypes.object.isRequired, // eslint-disable-line
  router: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    activeRound: state.settings.scoringMode,
    round: state.round,
  };
};

export default connect(mapStateToProps)(RoundMenu);
