import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from 'components/NavBar';
import PokemonPresentation from 'components/PokemonPresentation';
import RightCart from 'components/RightCart';


const PokemonDetail = ({ pokemonsList }) => {

  const { id } = useParams()
  const [pokemon, setPokemon] = React.useState(null)
  const [displayRightCart, setDisplayRightCart] = React.useState(true)

  React.useEffect(
    () => {
      console.log("coucou", pokemonsList)
      if (pokemonsList !== null && pokemonsList !== undefined)
        setPokemon(pokemonsList.filter(item => item.id === parseInt(id, 10))[0])
    }, [id, pokemonsList]
  )

  return (
    <div className='PokemonDetail'>

      <NavBar setDisplayRightCart={setDisplayRightCart} displayRightCart={displayRightCart} />

      <div className='Shop'>

        <div className='Pokemon'>
          {pokemon !== null && pokemon !== undefined && <PokemonPresentation pokemon={pokemon} />}
        </div>

        <RightCart displayRightCart={displayRightCart} />

      </div>

      <div className='Footer' />

    </div>
  );
};

export default PokemonDetail;