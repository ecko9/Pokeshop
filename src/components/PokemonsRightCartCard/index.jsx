import React from 'react';

const PokemonsRightCartCard = ({ pokemon, displayRightCart }) => {
  return (
    <div
      className='PokemonsRightCartCard'
      style={displayRightCart ? { opacity: '1' } : { opacity: '0' }}
    >

      <img src={`${pokemon.pokemonImage}`} alt="pokemon small" />

      <p style={displayRightCart ? { opacity: '1' } : { opacity: '0' }}>
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