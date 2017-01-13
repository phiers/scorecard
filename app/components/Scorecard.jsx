import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
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
    const { course, round, dispatch, router } = this.props;

    const renderContinue = () => {
      const lastHole = round.lastHole || 0;
      const handleClick = () => router.push(`/round/${lastHole + 1}`);
      return (
        <button className="button tiny" onClick={handleClick}>Continue</button>
      );
    };
    const showSummary = this.state.card ? 'summary hide' : 'summary';
    const renderSummary = () => {
      const buttonText = this.state.card ? 'Show Summary' : 'Hide Summary';

      const handleClick = () => {
        this.setState({ card: !this.state.card });
      };

      return <button className="button tiny" onClick={handleClick}>{buttonText}</button>;
    };

    return (
      <div>
        <TitleBar title="Scorecard" left={renderSummary()} right={renderContinue()} />
        <div className="scorecard">
          <div className={showSummary}>
            <ScorecardSummary {...round} />
          </div>
          ScoreCard
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // grab selected course
  const course = state.courses.find(c => c.id.toString() === state.round.courseId);
  return {
    course,
    round: state.round,
  };
};

export default connect(mapStateToProps)(Scorecard);
