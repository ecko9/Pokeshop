import React from 'react';
import { useSelector } from 'react-redux';
import CheckCartStep from './CheckCartStep';
import CheckPaymentInfosStep from './CheckPaymentInfosStep';
import CheckUserInfosStep from './CheckUserInfosStep';
import StepIndex from './StepIndex';

const PaymentSteps = () => {

  const [step, setStep] = React.useState(0)
  const cart = useSelector(state => state.cartsReducer.cart)
  const [totalCartPrice, setTotalCartPrice] = React.useState(0)

  React.useEffect(
    () => {
      if (cart && cart.length > 0)
        setTotalCartPrice(cart.reduce((a, b) => a + (b.pokemonPrice * b.quantity), 0))
      return
    }, [cart]
  )

  const displayStep = () => {
    switch (step) {
      case 0:
        return (<CheckCartStep />)
      case 1:
        return (<CheckUserInfosStep />)
      case 2:
        return (<CheckPaymentInfosStep />)
      default:
        return
    }
  }

  const nextStep = (e) => {
    if (step < 2)
      setStep(step + 1)
  }

  const prevStep = (e) => {
    if (step > 0)
      setStep(step - 1)
  }

  return (
    <div className='PaymentSteps'>
      <StepIndex step={step} />

      {displayStep()}

      <div className='step-change'>
        {step > 0 ?
          <div className='btn-prev' onClick={e => prevStep(e)}>
            <i className="fa-solid fa-arrow-left-long link"></i>
          </div>
          :
          <h3>
            Total: <span>{totalCartPrice}€</span>
          </h3>
        }

        <div className='btn-check' onClick={e => nextStep(e)}>
          <i className="fa-solid fa-check link"></i>
        </div>

      </div>
    </div>
  );
};

export default PaymentSteps;