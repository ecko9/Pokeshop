import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {

  const navigate = useNavigate()

  return (
    <div className='PaymentSuccess'>
      <p>Félicitation, votre paiement à bien été effectué.<br /> PoKéShoP vous remercie pour votre achat !</p>
      <div className='btn-redirect link' onClick={e => navigate('/pokemons')}>
        <span>Pokémons</span>
      </div>
    </div>
  );
};

export default PaymentSuccess;