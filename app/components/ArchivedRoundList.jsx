import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import * as actions from 'archivedRoundActions';
import ArchivedRound from 'ArchivedRound';
/* eslint-enable */

class ArchivedRoundList extends Component {
  constructor() {
    super();
    this.state = { rounds: null };
  }
  componentDidMount() {
    this.props.dispatch(actions.startFetchArchivedRounds());
    // this.setState({ rounds: this.state.rounds });
  }

  renderRoundList() {
    const { rounds } = this.props;
    if (rounds.length > 0) {
      return rounds.map(round => <ArchivedRound key={round.milliseconds} {...round} />);
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
              <td>Holes</td>
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
};

const mapStateToProps = state => ({ rounds: state.archivedRounds });

export default connect(mapStateToProps)(ArchivedRoundList);
