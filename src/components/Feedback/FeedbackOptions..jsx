import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => {
    // const label = { option }.toLocaleUpperCase();
    return (
      <StyledButton
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </StyledButton>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
