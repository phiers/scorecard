import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import ScorecardRow from 'ScorecardRow';
import ScorecardSummary from 'ScorecardSummary';
/* eslint-enable */

class Scorecard extends Component {
  constructor() {
    super();
    // state variable used to show or hide summary
    this.state = {
      card: true,
    };
  }

  render() {
    const { course, round, router } = this.props;
    const { holeData } = course;
    // construct player names for scorecard
    const player = round.players;
    const player1Name = `${player[0].first.slice(0, 5)} ${player[0].last.slice(0, 5)}`;
    const player2Name = player[1] ? `${player[1].first.slice(0, 5)} ${player[1].last.slice(0, 5)}` : '';
    const player3Name = player[2] ? `${player[2].first.slice(0, 5)} ${player[2].last.slice(0, 5)}` : '';
    const player4Name = player[3] ? `${player[3].first.slice(0, 5)} ${player[3].last.slice(0, 5)}` : '';

    const renderContinueButton = () => {
      const lastHole = round.lastHole || 0;
      const handleContinue = () => router.push(`/round/${lastHole + 1}`);
      const handleFinish = () => router.push('/round-summary');
      // only show continue if all 18 holes aren't scorecard
      if (lastHole < 18) {
        return (
          <button className="button tiny" onClick={handleContinue}>Continue</button>
        );
      }
      // if round is over...
      return <button className="button tiny" onClick={handleFinish}>Round Summary</button>;
    };
    // set class variable to show or hide summary
    const showSummary = this.state.card ? 'summary hide' : 'summary';

    const renderSummaryButton = () => {
      const buttonText = this.state.card ? 'Show Summary' : 'Hide Summary';

      const handleClick = () => {
        this.setState({ card: !this.state.card });
      };

      return <button className="button tiny" onClick={handleClick}>{buttonText}</button>;
    };

    const renderCard = () =>
      holeData.map(hole => <ScorecardRow key={hole.holeNo} {...hole} />);

    return (
      <div>
        <TitleBar title="Scorecard" left={renderSummaryButton()} right={renderContinueButton()} />
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
Scorecard.propTypes = {
  course: PropTypes.object.isRequired,
  round: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

const mapStateToProps = state =>
  ({
    course: state.round.course,
    round: state.round,
  });

export default connect(mapStateToProps)(Scorecard);
