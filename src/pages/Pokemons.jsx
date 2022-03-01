import NavBar from 'components/NavBar';
import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsList }) => {

  const [displayRightCart, setDisplayRightCart] = React.useState(true)

  return (
    <div className='Pokemons'>

      <NavBar setDisplayRightCart={setDisplayRightCart} displayRightCart={displayRightCart} />

      <div className='Shop'>

        <div className='Items'>
          {pokemonsList !== null &&
            <PokemonsList pokemonsList={pokemonsList} />
          }
        </div>
        <div className='Cart' style={displayRightCart ? { width: '20%' } : { width: '0%' }} />

      </div>

      <div className='Footer' />

    </div>
  );
};

export default Pokemons;