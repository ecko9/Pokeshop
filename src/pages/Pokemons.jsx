import NavBar from 'components/NavBar';
import NavCart from 'components/NavCart';
import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsInfos }) => {

  const [displayRightCart, setDisplayRightCart] = React.useState(false)

  return (
    <div className='Pokemons'>

      <NavBar setDisplayRightCart={setDisplayRightCart} displayRightCart={displayRightCart} />

      <div className='Shop'>

        <div className='Items'>
          {pokemonsInfos.listFormatedTmp !== null && <PokemonsList pokemonsInfos={pokemonsInfos} />}
        </div>

        {displayRightCart && <NavCart />}

      </div>

      <div className='Footer' />

    </div>
  );
};

export default Pokemons;