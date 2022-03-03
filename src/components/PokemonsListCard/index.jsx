import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCart from '../AddToCart';
import Infos from './Infos';

const PokemonsListCard = ({ pokemon }) => {

  const navigate = useNavigate()

  return (
    <div
      className='PokemonsListCard link'
      style={{ background: `linear-gradient(to top, ${pokemon.color}, rgba(255, 255, 255, 0.8) 50%)` }}
      onClick={e => navigate(`/pokemons/${pokemon.id}`)}
    >

      <div className='header' style={{ backgroundColor: `${pokemon.color}` }} />
      <Infos pokemon={pokemon} />
      <AddToCart pokemon={pokemon} />

    </div>
  );
};

export default PokemonsListCard;