import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import UtilityInput from 'UtilityInput';
import playerActions from 'playerActions';
import roundActions from 'roundActions';
import settingsActions from 'settingsActions';
/* eslint-enable */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const Round = (props) => {
  const { course, dispatch, players, round, router } = props;

  const handleStartRound = () => {
    // add handicaps to round.player object
    const handicaps = document.querySelectorAll('.hdcp');
    for (let i = 0; i < handicaps.length; i += 1) {
      const id = round.players[i].id;
      const hdcp = parseInt(handicaps[i].textContent, 10);
      dispatch(roundActions.setHandicaps(id, hdcp));
    }
    // add scores array to round.player object
    const scores = [];
    for (let h = 1; h < 19; h += 1) {
      scores.push({
        hole: h,
        score: null,
      });
    }
    round.players.forEach(p => dispatch(roundActions.setupScoring(p.id, scores)));
    // navigate to first hole scoring
    router.push('/round/1');
  };
  const handleCancelRound = () => {
    // clear round object and reset scoringMode to false
    dispatch(roundActions.cancelRound());
    dispatch(settingsActions.setScoringMode(false));
    // change selection of round players to false
    players.forEach(p => dispatch(playerActions.selectPlayer(p.id)));
    // return to start
    router.push('/');
  };

  const renderPlayersList = () => round.players.map(
    p => (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <UtilityInput assignedClass="hdcp" display={p.hdcp || 5} />
      </div>
    ),
    );
  return (
    <div>
      <TitleBar title="Round Information" />
      <div className="round">
        <div className="round-info">
          <p>COURSE: {course.name}, {course.state}
            <button className="button tiny" onClick={() => router.push('/courses')}>Edit</button>
          </p>
        </div>
        <div className="round-info">
          <p>PLAYERS: <a className="button tiny" onClick={() => router.push('/players')}>Edit</a></p>
        </div>
        <span className="player-list-heading"><p>Name</p><p>Handicap</p></span>
        {renderPlayersList()}
        <div className="button-group">
          <button className="button" onClick={handleCancelRound}>Cancel Round</button>
          <button className="button" onClick={handleStartRound}>Start Round</button>
        </div>
      </div>
    </div>
  );
};
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
/* eslint-disable react/forbid-prop-types */
Round.propTypes = {
  course: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired,
  round: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};
