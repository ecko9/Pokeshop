import React from 'react';
import AddToCart from '../AddToCart';
import Infos from './Infos';

const PokemonsListCard = ({ pokemon }) => {

  return (
    <div
      className='PokemonsListCard'
      style={{ background: `linear-gradient(to top, ${pokemon.color}, white 50%)` }}
    >

      <div className='header' style={{ backgroundColor: `${pokemon.color}` }} />
      <Infos pokemon={pokemon} />
      <AddToCart pokemon={pokemon} />

    </div>
  );
};

export default PokemonsListCard;