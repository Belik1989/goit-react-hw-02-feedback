import React from 'react';
import { FeedbackOptions } from './FeedbackOptions.';
import { Statistics } from './Statistics/Statistics';
import { ButtonSection } from './FeedbackOptions.styled';
import { Notification } from './Statistics/Notification';
// import PropTypes from 'prop-types';
import { Section } from './Section';
import { FeetbackBlock } from './Section.styled';

export class Feedback extends React.Component {
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

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
    // switch (e.target.innerHTML) {
    //   case 'good':
    //     return this.setState(prevState => ({ good: prevState.good + 1 }));
    //   case 'neutral':
    //     return this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    //   case 'bad':
    //     return this.setState(prevState => ({ bad: prevState.bad + 1 }));
    //   default:
    //     return this.state;
    // }
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };
  render() {
    return (
      <FeetbackBlock>
        <Section title="Please leave feedback">
          <ButtonSection>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.leaveFeedback}
            />
          </ButtonSection>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'No statistics'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </FeetbackBlock>
    );
  }
}
