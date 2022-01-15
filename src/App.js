import { Component } from 'react';
import Container from './components/Container';
import FeedbackForm from './components/FeedbackForm';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const statToChange = e.currentTarget.textContent.toLowerCase();

    this.setState(prevState => ({
      [statToChange]: prevState[statToChange] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((value, acc) => (acc += value));
  }

  countPositiveFeedbackPercentage(totalVotes, goodVotes) {
    return goodVotes > 0 ? Math.round((goodVotes * 100) / totalVotes) : 0;
  }

  render() {
    const {
      handleLeaveFeedback,
      state: { good, neutral, bad },
      state,
    } = this;

    const totalVotes = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      totalVotes,
      good,
    );
    const options = Object.keys(state);

    return (
      <Container>
        <FeedbackForm>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleLeaveFeedback}
            />
          </Section>
          {totalVotes > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalVotes}
                positivePercentage={positiveFeedbackPercentage}
              />
            </Section>
          ) : (
            <Notification message="No feedback given" />
          )}
        </FeedbackForm>
      </Container>
    );
  }
}

export default App;
