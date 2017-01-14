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
    this.state = {
      card: true,
    };
  }

  render() {
    const { course, round, router } = this.props;
    const renderContinue = () => {
      const lastHole = round.lastHole || 0;
      const handleClick = () => router.push(`/round/${lastHole + 1}`);
      return (
        <button className="button tiny" onClick={handleClick}>Continue</button>
      );
    };
    // set class variable to show or hide summary
    const showSummary = this.state.card ? 'summary hide' : 'summary';
    const renderSummary = () => {
      const buttonText = this.state.card ? 'Show Summary' : 'Hide Summary';

      const handleClick = () => {
        this.setState({ card: !this.state.card });
      };

      return <button className="button tiny" onClick={handleClick}>{buttonText}</button>;
    };
    const renderCard = () => {
      return this.props.course.holeData.map(hole => <ScorecardRow key={hole.holeNo} {...hole} />);
    };
    return (
      <div>
        <TitleBar title="Scorecard" left={renderSummary()} right={renderContinue()} />
        <div className="scorecard">
          <div className={showSummary}>
            <ScorecardSummary {...round} />
          </div>
          <table>
            <thead>
              <tr className="row-flex header">
                <td className="nonplayer">Hole</td>
                <td className="nonplayer">Hdcp</td>
                <td className="nonplayer">Par</td>
                <td className="player">Player 1</td>
                <td className="player">Player 2</td>
                <td className="player">Player 3</td>
                <td className="player">Player 4</td>
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

const mapStateToProps = (state) => {
  // grab selected course
  const course = state.courses.find(c => c.id.toString() === state.round.courseId);
  return {
    course,
    round: state.round,
  };
};

export default connect(mapStateToProps)(Scorecard);
