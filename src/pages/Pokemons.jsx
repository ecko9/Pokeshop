import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsList }) => {

  return (
    <div className='Pokemons'>
      <h1>Cooucou</h1>

      {pokemonsList !== null &&
        <PokemonsList pokemonsList={pokemonsList} />
      }
    </div>
  );
};

export default Pokemons;