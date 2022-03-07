import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonsList, fetchPokemonsListSuccess } from 'redux/pokemons/actions';
import formatedPokemonInfos from './useFormatPokemonInfos';

const usePokemonsInfos = () => {

  const dispatch = useDispatch()

  React.useEffect(
    () => {

      const fetchPokemonsInfos = async (pokemonsList, array = [], index = 0) => {
        if (index === pokemonsList.length) {
          dispatch(fetchPokemonsListSuccess(array))
          return
        }
        else {
          fetch(`${pokemonsList[index].url}`)
            .then(response1 => response1.json())
            .then(async (response1) => {

              fetch(`${response1.species.url}`)
                .then(response2 => response2.json())
                .then(async (response2) => {

                  array.push(formatedPokemonInfos(response1, response2))
                  return fetchPokemonsInfos(pokemonsList, array, index + 1)
                })
                .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        }
      }

      const fetchList = async () => {
        dispatch(fetchPokemonsList())
        fetch(`https://pokeapi.co/api/v2/pokemon`)
          .then(response1 => response1.json())
          .then(async (response1) => {

            fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${response1.count}`)
              .then(response2 => response2.json())
              .then(response2 => fetchPokemonsInfos(response2.results))
          })
          .catch(error => console.error(error))
      }

      fetchList()
      return
    }, []
  )

  return

};

export default usePokemonsInfos;