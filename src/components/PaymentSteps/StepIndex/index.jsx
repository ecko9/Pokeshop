import React from 'react';

const StepIndex = ({ step }) => {

  const setStepName = () => {
    switch (step) {
      case 0:
        return "Récapitulatif Commande"
      case 1:
        return "Coordonnées"
      case 2:
        return "Paiement"
      default:
        return ""
    }
  }

  return (
    <div className='StepIndex'>
      <div className='steps-number'>
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
      <p>{setStepName()}</p>
    </div>
  );
};

export default StepIndex;