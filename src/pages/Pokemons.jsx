import NavBar from 'components/NavBar';
import RightCart from 'components/RightCart';
import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsInfos }) => {

  const [displayRightCart, setDisplayRightCart] = React.useState(true)

  return (
    <div className='Pokemons'>

      <NavBar setDisplayRightCart={setDisplayRightCart} displayRightCart={displayRightCart} />

      <div className='Shop'>

        <div className='Items'>
          {pokemonsInfos.listFormatedTmp !== null && <PokemonsList pokemonsInfos={pokemonsInfos} />}
        </div>

        <RightCart displayRightCart={displayRightCart} />

      </div>

      <div className='Footer' />

    </div>
  );
};

export default Pokemons;