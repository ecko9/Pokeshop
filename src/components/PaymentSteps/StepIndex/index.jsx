import React from 'react';

const StepIndex = ({ step }) => {

  return (
    <div className='StepIndex'>
      <span style={step >= 0 ? { backgroundColor: `rgba(18, 54, 119, 1)`, color: "white" } : {}}>1</span>
      <div className='bars'>
        <div className='bar-bot' />
        <div className='bar-top' style={step >= 1 ? { width: "100%" } : { width: "0%" }} />
      </div>
      <span style={step >= 1 ? { backgroundColor: `rgba(18, 54, 119, 1)`, color: "white" } : {}}>2</span>
      <div className='bars'>
        <div className='bar-bot' />
        <div className='bar-top' style={step >= 2 ? { width: "100%" } : { width: "0%" }} />
      </div>
      <span style={step >= 2 ? { backgroundColor: `rgba(18, 54, 119, 1)`, color: "white" } : {}}>3</span>
    </div>
  );
};

export default StepIndex;