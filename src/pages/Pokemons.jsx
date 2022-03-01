import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsList }) => {

  return (
    <div className='Pokemons'>
      <div className='NavBar' />
      <div className='Shop'>
        <div className='Items'>
          {pokemonsList !== null &&
            <PokemonsList pokemonsList={pokemonsList} />
          }
        </div>
        <div className='Cart' />

      </div>
      <div className='Footer' />
    </div>
  );
};

export default Pokemons;