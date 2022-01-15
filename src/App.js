import { useState } from 'react';
import Container from './components/Container';
import FeedbackForm from './components/FeedbackForm';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = ({ currentTarget: { textContent } }) => {
    const statToChange = textContent.toLowerCase();
    switch (statToChange) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalVotes = votes => {
    return Object.values(votes).reduce((value, acc) => (acc += value));
  };

  const countPositiveVotesPercentage = (totalVotes, goodVotes) => {
    return goodVotes > 0 ? Math.round((goodVotes * 100) / totalVotes) : 0;
  };

  const feedback = { good, neutral, bad };
  const totalVotes = countTotalVotes(feedback);
  const positiveVotesPercentage = countPositiveVotesPercentage(
    totalVotes,
    good,
  );
  const options = Object.keys(feedback);

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
              positivePercentage={positiveVotesPercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </FeedbackForm>
    </Container>
  );
}
