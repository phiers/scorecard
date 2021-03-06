import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import UtilityInput from 'UtilityInput';
import * as playerActions from 'playerActions';
import * as roundActions from 'roundActions';
import * as settingsActions from 'settingsActions';
import { addPlayersToGroup } from 'groupRoundActions';
/* eslint-enable */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const Round = (props) => {
  const { course, dispatch, players, round, router } = props;

  const handleStartRound = () => {
    // add handicaps and roundId to round.player object
    const handicaps = document.querySelectorAll('.hdcp');
    for (let i = 0; i < handicaps.length; i += 1) {
      const id = round.players[i].id;
      const hdcp = parseInt(handicaps[i].textContent, 10);
      // roundId is used for scorecard rendering
      const roundId = `playerNo${i + 1}`;
      dispatch(roundActions.startSetHandicapsAndRoundId(id, hdcp, roundId));
    }
    // add scores array to round.player object
    const scores = [];
    for (let h = 1; h < 19; h += 1) {
      scores.push({
        hole: h,
        score: null,
      });
    }
    // add group to group scoring if in playing in group
    if (round.groupKey) {
      const key = round.groupKey;
      // build the object to update firebase instead of counting on redux being updated
      const groupPlayers = [];
      // use handicap nodes from above to set player object (otherwise, handicap is null)
      for (let i = 0; i < handicaps.length; i += 1) {
        const p = round.players;
        groupPlayers.push({
          id: p[i].id,
          name: `${p[i].first} ${p[i].last}`,
          hdcp: parseInt(handicaps[i].textContent, 10),
        });
      }

      dispatch(addPlayersToGroup(key, groupPlayers));
    }
    // set up scoring array for each player
    round.players.forEach((p) => {
      dispatch(roundActions.startSetupScoring(p.id, scores));
    });
    // navigate to first hole scoring
    router.push('/round/1');
  };

  const handleContinueRound = () => {
    // course change will already be handled on Course component
    // TODO: player change
    // navigate to scorecard
    router.push('/scorecard');
  };

  const handleCancelRound = () => {
    // clear round object and reset scoringMode to false
    dispatch(roundActions.startCancelRound());
    dispatch(settingsActions.startSetScoringMode(false));
    // change selection of round players to false
    players.forEach(p => dispatch(playerActions.startSelectPlayer(p.id)));
    // return to start
    router.push('/');
  };

  const renderPlayersList = () => round.players.map(
    p => (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <UtilityInput assignedClass="hdcp" display={parseInt(p.hdcp, 10) || 5} />
      </div>
    ),
    );

  const renderStartOrContinueButton = () => {
    if (!round.lastHole) {
      return <button className="button" onClick={handleStartRound}>Start Round</button>;
    }
    return <button className="button" onClick={handleContinueRound}>Continue Round</button>;
  };

  const editButtonClasses = round.lastHole ? 'button tiny hide' : 'button tiny';

  return (
    <div>
      <TitleBar title="Round Information" />
      <div className="round">
        <div className="round-info">
          <p>COURSE: {course.name}, {course.state}
            <button className={editButtonClasses} onClick={() => router.push('/courses')}>Edit</button>
          </p>
        </div>
        <div className="round-info">
          <p>PLAYERS:
            <button className={editButtonClasses} onClick={() => router.push('/players')}>Edit</button>
          </p>
        </div>
        <span className="player-list-heading"><p>Name</p><p>Handicap</p></span>
        {renderPlayersList()}
        <div className="button-group">
          <button className="button" onClick={handleCancelRound}>Cancel Round</button>
          {renderStartOrContinueButton()}
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/forbid-prop-types */
Round.propTypes = {
  course: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  round: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

// make container
const mapStateToProps = (state) => {
  // grab selected players by comparing to round player ids
  const playerIdsArr = state.round.players.map(player => player.id);
  const players = state.players.filter((p) => {
    if (playerIdsArr.indexOf(p.id) > -1) {
      return true;
    }
    return false;
  });

  return {
    course: state.round.course,
    players,
    round: state.round,
  };
};

export default connect(mapStateToProps)(Round);
