import NavBar from 'components/NavBar';
import NavCart from 'components/NavCart';
import PokemonsList from 'components/PokemonsList';
import React from 'react';

const Pokemons = ({ pokemonsListFormated }) => {

  const [displayRightCart, setDisplayRightCart] = React.useState(false)

  return (
    <div className='Pokemons'>

      <NavBar setDisplayRightCart={setDisplayRightCart} displayRightCart={displayRightCart} />

      {displayRightCart && <NavCart />}

      <div className='Items'>
        {pokemonsListFormated !== null && <PokemonsList pokemonsListFormated={pokemonsListFormated} />}
      </div>

      <div className='bg-overlay'></div>

    </div>
  );
};

export default Pokemons;