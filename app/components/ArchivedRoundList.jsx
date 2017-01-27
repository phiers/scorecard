import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import * as actions from 'archivedRoundActions';
import ArchivedRound from 'ArchivedRound';
/* eslint-enable */

/* eslint-disable no-confusing-arrow */
class ArchivedRoundList extends Component {

  componentDidMount() {
    this.props.dispatch(actions.startFetchArchivedRounds());
  }

  renderRoundList() {
    const { rounds } = this.props;
    if (rounds.length > 0) {
      return rounds.map(round => <ArchivedRound key={round.id} {...round} />)
      .sort((a, b) => a - b > 0 ? -1 : 1);
    }
    return <tr><td>No Archived Rounds</td></tr>;
  }

  render() {
    return (
      <div>
        <TitleBar title="Round History" />
        <table className="round-list">
          <thead>
            <tr>
              <td>Date</td>
              <td>Course</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.renderRoundList()}
          </tbody>
        </table>
      </div>
    );
  }
}

ArchivedRoundList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  rounds: PropTypes.object,  // eslint-disable-line
};

const mapStateToProps = state => ({ rounds: state.archivedRounds });

export default connect(mapStateToProps)(ArchivedRoundList);
