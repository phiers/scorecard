import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import UtilityInput from 'UtilityInput';
import * as roundActions from 'roundActions';
/* eslint-enable */

const RoundHole = (props) => {
  const { course, dispatch, params, round, router } = props;
  const hole = parseInt(params.hole, 10);
  const hdcp = hole < 19 ? course.holeData[hole - 1].hdcp : 0;
  const par = hole < 19 ? course.holeData[hole - 1].par : 0;

  const handleSave = () => {
    const scoreNode = document.querySelectorAll('.score');
    for (let i = 0; i < scoreNode.length; i += 1) {
      const playerID = round.players[i].roundId;
      const score = parseInt(scoreNode[i].textContent, 10);
      dispatch(roundActions.saveHoleScore(playerID, hole, score));
    }
    // Navigation
    router.push('/scorecard');
  };

  const renderPlayersList = () => round.players.map((p) => {
    const score = p.scores[hole - 1].score;
    return (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <UtilityInput assignedClass="score" display={score} />
      </div>
    );
  });
  return (
    <div>
      <TitleBar title={`Edit Hole #${hole}`} />
      <div className="hole">
        <div className="hole-info">
          <div className="hole-label"><span>Par</span><span>{par}</span></div>
          <div className="hole-label"><span>Handicap</span><span>{hdcp}</span></div>
        </div>
        {renderPlayersList()}
        <div className="button-group">
          <button className="button" onClick={() => router.push('/scorecard')}>Back to Card</button>
          <button className="button" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};
/* eslint-disable react/forbid-prop-types */
RoundHole.propTypes = {
  course: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  round: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {  // eslint-disable-line
  return {
    round: state.round,
    course: state.round.course,
  };
};

export default connect(mapStateToProps)(RoundHole);
