import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepChange = ({ step, setStep, totalCartPrice, isValidUserInfos }) => {

  const navigate = useNavigate()

  const nextStep = (e) => {
    if (step === 0 && totalCartPrice > 0)
      setStep(1)
    if (step === 1 && isValidUserInfos)
      setStep(2)
    if (step === 2)
      navigate('/pokemons')
  }

  const prevStep = (e) => {
    if (step > 0)
      setStep(step - 1)
  }

  const isValid = () => {
    if (step === 0 && totalCartPrice > 0)
      return true
    if (step === 1 && isValidUserInfos)
      return true
    return false
  }

  return (
    <div className='StepChange'>
      {step > 0 ?
        <div className='btn-prev' onClick={e => prevStep(e)}>
          <i className="fa-solid fa-arrow-left-long link"></i>
        </div>
        :
        <h3>
          Total: <span>{totalCartPrice}€</span>
        </h3>
      }

      <div className={isValid() ? 'btn-check valid' : 'btn-check not-valid'} onClick={e => nextStep(e)}>
        <i className="fa-solid fa-check link"></i>
      </div>
    </div>
  );
};

export default StepChange;