import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import ScorecardRow from 'ScorecardRow';
import ScorecardSummary from 'ScorecardSummary';
/* eslint-enable */

class ArchivedScorecard extends Component {
  constructor() {
    super();
    // state variable used to show or hide summary
    this.state = {
      card: true,
    };
  }

  render() {
    const { rounds, params } = this.props;
    // grab approprate
    const round = rounds.filter(r => r.id === params.id)[0];
    const { holeData } = round.course;
    // construct player names for scorecard
    const player = round.players;
    const player1Name = `${player[0].first.slice(0, 5)} ${player[0].last.slice(0, 5)}`;
    const player2Name = player[1] ? `${player[1].first.slice(0, 5)} ${player[1].last.slice(0, 5)}` : '';
    const player3Name = player[2] ? `${player[2].first.slice(0, 5)} ${player[2].last.slice(0, 5)}` : '';
    const player4Name = player[3] ? `${player[3].first.slice(0, 5)} ${player[3].last.slice(0, 5)}` : '';

    const showSummary = this.state.card ? 'summary hide' : 'summary';

    const renderSummaryButton = () => {
      const buttonText = this.state.card ? 'Show Summary' : 'Hide Summary';

      const handleClick = () => {
        this.setState({ card: !this.state.card });
      };

      return <button className="button tiny" onClick={handleClick}>{buttonText}</button>;
    };

    const goBackButton = () => (
      <button
        className="button tiny"
        onClick={() => this.props.router.goBack()}
      > Round List</button>
    );

    const renderCard = () =>
      holeData.map(hole => <ScorecardRow key={hole.holeNo} {...hole} />);

    return (
      <div>
        <TitleBar title="Scorecard" left={renderSummaryButton()} right={goBackButton()} />
        <div className="scorecard">
          <div className={showSummary}>
            <ScorecardSummary {...round} />
          </div>
          <table>
            <thead>
              <tr className="row-flex header">
                <td className="nonplayer">Hole</td>
                <td className="nonplayer">Hcp</td>
                <td className="nonplayer">Par</td>
                <td className="player">{player1Name}</td>
                <td className="player">{player2Name}</td>
                <td className="player">{player3Name}</td>
                <td className="player">{player4Name}</td>
              </tr>
            </thead>
            <tbody>
              {renderCard()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
/* eslint-disable react/forbid-prop-types */
ArchivedScorecard.propTypes = {
  params: PropTypes.object.isRequired,
  rounds: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ rounds: state.archivedRounds });

export default connect(mapStateToProps)(ArchivedScorecard);
