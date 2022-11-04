import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled('p')`
  font-size: ${p => p.theme.fontSizes.m};
`;

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>total: {total}</p>
      <Text>
        positiveFeedback: {total ? Math.round(positiveFeedback) : 0} %
      </Text>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
