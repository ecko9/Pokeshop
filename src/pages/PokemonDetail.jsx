import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from 'components/NavBar';
import PokemonPresentation from 'components/PokemonPresentation';
import RightCart from 'components/RightCart';


const PokemonDetail = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = React.useState(null)
  const [displayRightCart, setDisplayRightCart] = React.useState(false)

  React.useEffect(
    () => {

      const getAllImagesUrl = (images) => {
        return [images.other["official-artwork"].front_default, images.other.dream_world.front_default, images.front_default]
      }

      const getFrenchDescription = (texts) => {
        return texts.filter(text => text.language.name === "fr")[0].flavor_text
      }

      const getAllStats = (stats) => {
        return stats.map(value => ({ name: value.stat.name, value: value.base_stat }))
      }

      const getAllTypes = (types) => {
        return types.map(value => (value.type.name))
      }

      const getFrenchName = (names) => {
        return names.filter(value => value.language.name === "fr")[0].name
      }

      const formatedPokemonInfos = (response1, response2) => {
        return {
          name: getFrenchName(response2.names),
          id: response1.id,
          color: response2.color.name,
          types: getAllTypes(response1.types),
          height: response1.height,
          weight: response1.weight,
          stats: getAllStats(response1.stats),
          description: getFrenchDescription(response2.flavor_text_entries),
          images: getAllImagesUrl(response1.sprites),
          price: Math.floor((response1.height * response1.weight * 2) / (response1.height * 5))
        }
      }

      const fetchPokemon = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(response1 => response1.json())
          .then(async (response1) => {

            fetch(`${response1.species.url}`)
              .then(response2 => response2.json())
              .then((response2) => {

                setPokemon(formatedPokemonInfos(response1, response2))
              })
              .catch(error => console.error(error))
          })
          .catch(error => console.error(error))
      }

      fetchPokemon()
    }, [id]
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