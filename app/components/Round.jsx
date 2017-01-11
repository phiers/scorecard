import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TitleBar from 'TitleBar'; // eslint-disable-line

const Round = (props) => {
  const { courses, dispatch, round, router } = props;
  const course = courses.find(c => c.id.toString() === round.courseId);
  const listPlayers = () => {
    return round.players.map(p =>
      <li key={p.id}><span>{p.first} {p.last}</span><span>Handicap</span></li>,
    );
  };
  return (
    <div>
      <TitleBar title="Round Information" />
      <div className="round">
        <p>Course: {course.name}</p>
        <ul className="player-list">Players:
          {listPlayers()}
        </ul>
      </div>
    </div>
  );
};

export default connect(state => state)(Round);
