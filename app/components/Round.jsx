import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TitleBar from 'TitleBar'; // eslint-disable-line
import UtilityInput from 'UtilityInput'; // eslint-disable-line

const Round = (props) => {
  const { courses, dispatch, round, router } = props;
  const course = courses.find(c => c.id.toString() === round.courseId);
  const hdcpDisplay = 0;
  const listPlayers = () =>
    round.players.map(p => (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <UtilityInput assignedClass="hdcp" display={hdcpDisplay} />
      </div>
    ),
    );
  return (
    <div>
      <TitleBar title="Round Information" />
      <div className="round">
        <p>COURSE: {course.name}, {course.state}</p>
        <p>PLAYERS: </p>
        <span className="player-list-heading"><p>Name</p><p>Handicap</p></span>
        {listPlayers()}
        <div className="button-group">
          <button className="button">Cancel</button>
          <button className="button">Start</button>
        </div>
      </div>
    </div>
  );
};

export default connect(state => state)(Round);
/* eslint-disable react/forbid-prop-types */
Round.propTypes = {
  dispatch: PropTypes.func,
  courses: PropTypes.array,
  round: PropTypes.object,
  router: PropTypes.object,
};
