import React from 'react';
import Buttons from './Buttons';

class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };
  render() {
    // -----LOCAL STORAGE------------
    // window.localStorage.setItem('Feedbacks', JSON.stringify(this.state));
    // window.localStorage.setItem('Total', this.countTotalFeedback());
    // window.localStorage.setItem('Positive feedback(%)', this.countPositiveFeedbackPercentage());
    // -------------------------------------------
    return (
      <section>
        <h2>Please leave feedback</h2>
        <Buttons
          onGoodFeedback={this.goodFeedback}
          onNeutralFeedback={this.neutralFeedback}
          onBadFeedback={this.badFeedback}
        />

        <div>
          <h2>Statistics</h2>
          {this.countTotalFeedback() === 0 ? (
            <span>No statistics</span>
          ) : (
            <ul>
              <li>Good: "{this.state.good}"</li>
              <li>Neutral: "{this.state.neutral}"</li>
              <li>Bad: "{this.state.bad}"</li>
              <li>Total: "{this.countTotalFeedback()}"</li>
              <li>
                Positive feedback: "{this.countPositiveFeedbackPercentage()}%"
              </li>
            </ul>
          )}
        </div>
      </section>
    );
  }
}

export default Feedback;
