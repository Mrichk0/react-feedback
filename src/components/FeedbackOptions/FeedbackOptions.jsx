import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsBtn = styled('button')`
  margin-right: ${p => p.theme.spice[3]}px;
`;

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  const elements = options.map(item => (
    <OptionsBtn type="button" onClick={() => onLeaveFeedback(item)} key={item}>
      {item}
    </OptionsBtn>
  ));

  return <div>{elements}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
