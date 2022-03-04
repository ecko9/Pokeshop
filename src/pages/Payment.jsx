import NavBar from 'components/NavBar';
import PaymentSteps from 'components/PaymentSteps';
import React from 'react';

const Payment = () => {

  return (
    <div className='Payment'>

      <NavBar displayRightCart={null} />

      <div className='PaymentBox'>
        <PaymentSteps />
      </div>

      <div className='bg-overlay' />

    </div>


  );
};

export default Payment;