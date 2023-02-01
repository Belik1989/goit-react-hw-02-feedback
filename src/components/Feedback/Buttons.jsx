import React from 'react';

const Buttons = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => {
  return (
    <div>
      <button type="button" onClick={onGoodFeedback}>
        Good
      </button>
      <button type="button" onClick={onNeutralFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onBadFeedback}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
