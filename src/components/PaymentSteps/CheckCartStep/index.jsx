import PokemonsCardSmall from 'components/PokemonsCardSmall';
import React from 'react';
import { useSelector } from 'react-redux';

const CheckCartStep = () => {

  const cart = useSelector(state => state.cartsReducer.cart)

  return (
    <div className='CheckCartStep'>
      {(cart && cart.length > 0) ? cart.map(pokemon => (
        <PokemonsCardSmall
          key={pokemon.pokemonId}
          pokemon={pokemon}
        />)) :
        <span>Vide</span>
      }
    </div>
  );
};

export default CheckCartStep;