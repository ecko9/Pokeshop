import React from 'react';

const PokemonsRightCartCard = ({ pokemon }) => {
  return (
    <div className='PokemonsRightCartCard'>

      <img src={`${pokemon.pokemonImage}`} alt={`small ${pokemon.name}`} />

      <p>
        <span className='quantity'>{pokemon.quantity}</span>
        {` x `}
        <span className='price'>{pokemon.pokemonPrice} €</span>
        {` = `}
        <span className='total-price'>{pokemon.pokemonPrice * pokemon.quantity} €</span>
      </p>

      <div className='bg-overlay' style={{ background: `linear-gradient(to left, ${pokemon.pokemonColor}, white 75%)` }} />
    </div>
  );
};

export default PokemonsRightCartCard;