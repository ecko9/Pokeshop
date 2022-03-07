import useCheckUserInfos from 'hooks/useCheckUserInfos';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckCartStep from './CheckCartStep';
import CheckPaymentInfosStep from './CheckPaymentInfosStep';
import CheckUserInfosStep from './CheckUserInfosStep';
import PaymentSuccess from './PaymentSuccess';
import StepChange from './StepChange';
import StepIndex from './StepIndex';

const PaymentSteps = () => {

  const [step, setStep] = React.useState(0)
  const cart = useSelector(state => state.cartsReducer.cart)
  const [totalCartPrice, setTotalCartPrice] = React.useState(0)
  const [userInfos, setUserInfos] = React.useState({ firstName: "", lastName: "", mail: "", address: "" })
  const isValidUserInfos = useCheckUserInfos(userInfos)

  React.useEffect(
    () => {
      if (cart && cart.length > 0)
        setTotalCartPrice(cart.reduce((a, b) => a + (b.pokemonPrice * b.quantity), 0))
      if (cart.length === 0)
        setTotalCartPrice(0)
      return
    }, [cart]
  )

  const displayStep = () => {
    switch (step) {
      case 0:
        return (<CheckCartStep />)
      case 1:
        return (<CheckUserInfosStep userInfos={userInfos} setUserInfos={setUserInfos} />)
      case 2:
        return (<CheckPaymentInfosStep userInfos={userInfos} totalCartPrice={totalCartPrice} />)
      case 3:
        return (<PaymentSuccess />)
      default:
        return
    }
  }

  return (
    <div className='PaymentSteps'>

      <StepIndex step={step} />

      {displayStep()}

      {(step < 3) && <StepChange step={step} setStep={setStep} totalCartPrice={totalCartPrice} isValidUserInfos={isValidUserInfos} />}

    </div>
  );
};

export default PaymentSteps;