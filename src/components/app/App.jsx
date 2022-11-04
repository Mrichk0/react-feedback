import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Sections from 'components/Sections/Sections';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedBack = items => {
    this.setState(prewState => {
      return { [items]: prewState[items] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { addFeedBack } = this;

    const total = good + neutral + bad;

    const countPositiveFeedbackPercentage = () => {
      const positiveFeedback = (good / total) * 100;
      return Math.round(positiveFeedback * 100) / 100;
    };

    const positiveFeedback = countPositiveFeedbackPercentage();

    return (
      <>
        <Sections title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedBack}
          />
        </Sections>

        <Sections title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positiveFeedback={positiveFeedback}
              total={total}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Sections>
      </>
    );
  }
}

export default App;
