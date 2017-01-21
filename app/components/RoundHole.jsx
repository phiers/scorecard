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
  const nextHole = hole + 1;
  const hdcp = hole < 19 ? course.holeData[hole - 1].hdcp : 0;
  const par = hole < 19 ? course.holeData[hole - 1].par : 0;

  const handleSave = () => {
    // post scores
    const scoreNode = document.querySelectorAll('.score');
    for (let i = 0; i < scoreNode.length; i += 1) {
      const playerID = round.players[i].roundId;
      const score = parseInt(scoreNode[i].textContent, 10);
      dispatch(roundActions.saveHoleScore(playerID, hole, score));
    }
    // update last hole played
    dispatch(roundActions.updateLastHole(hole));
    // continue to next hole
    if (nextHole <= 18) {
      router.push(`/round/${nextHole}`);
    } else {
      router.push('/scorecard');
    }
  };

  const returnToRoundInfoButton = () => (
    <button
      className="button tiny"
      onClick={() => router.push('/round')}
    > Round Info</button>
  );

  const renderPlayersList = () => round.players.map(
    p => (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <UtilityInput assignedClass="score" display={par} />
      </div>
    ),
    );
  return (
    <div>
      <TitleBar left={returnToRoundInfoButton()} title={`Scoring for Hole #${hole}`} />
      <div className="hole">
        <div className="hole-info">
          <div className="hole-label"><span>Par</span><span>{par}</span></div>
          <div className="hole-label"><span>Handicap</span><span>{hdcp}</span></div>
        </div>
        {renderPlayersList()}
        <div className="button-group">
          <button className="button" onClick={() => router.push('/scorecard')}>View Card</button>
          <button className="button" onClick={handleSave}>Save</button>
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
