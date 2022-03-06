import React from 'react';

const CheckPaymentInfosStep = ({ userInfos, totalCartPrice }) => {

  const [cardNumber, setCardNumber] = React.useState("424242424242")

  return (
    <div className='CheckPaymentInfosStep'>
      <div className='resume-transaction'>
        <p className='name'>{userInfos.firstName} {userInfos.lastName}</p>
        <p className='mail'>{userInfos.mail}</p>
        <p className='address'>{userInfos.address}</p>
        <p className='price'>Total: {totalCartPrice}€</p>
      </div>

      <div className='payment-infos'>
        <span>Carte:</span>
        <input
          name="cardnumber"
          type="text"
          value={cardNumber}
          placeholder={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
      </div>
    </div >
  );
};

export default CheckPaymentInfosStep;