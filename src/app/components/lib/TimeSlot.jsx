import React from 'react';

const TimeSlot = ({ time, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {time}
    </button>
  );
};

export default TimeSlot;