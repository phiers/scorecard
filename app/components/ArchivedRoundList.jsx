import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import * as actions from 'archivedRoundActions';
import ArchivedRound from 'ArchivedRound';
/* eslint-enable */

/* eslint-disable no-confusing-arrow */
const ArchivedRoundList = (props) => {
  const { router } = props;
  const renderRoundList = () => {
    const { rounds } = props;
    if (rounds.length > 0) {
      return rounds.map(round => <ArchivedRound key={round.id} {...round} />)
      .reverse();
    }
    return <tr><td>No Archived Rounds</td></tr>;
  };

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => router.goBack()}
    > Go Back</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="Round History" />
      <table className="round-list">
        <thead>
          <tr>
            <td>Date</td>
            <td>Course</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {renderRoundList()}
        </tbody>
      </table>
    </div>
  );
};

ArchivedRoundList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rounds: PropTypes.array,  // eslint-disable-line
  router: PropTypes.object, // eslint-disable-line
};

const mapStateToProps = state => ({ rounds: state.archivedRounds });

export default connect(mapStateToProps)(ArchivedRoundList);
