import React from 'react';
import Description from './Description';
import Illustrations from './Illustrations';

const PokemonPresentation = ({ pokemon }) => {
  return (
    <div className='PokemonPresentation'>
      <Illustrations pokemon={pokemon} />
      <Description pokemon={pokemon} />
    </div>
  );
};

export default PokemonPresentation;