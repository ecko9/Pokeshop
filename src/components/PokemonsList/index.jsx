import PokemonsListCard from 'components/PokemonsListCard';
import formatedPokemonInfos from 'hooks/useFormatPokemonInfos';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './_Pagination';
import PokemonsFilters from './_PokemonsFilters';

const PokemonList = () => {

  const resultsPerPage = 25
  const [page, setPage] = React.useState(0)
  const [maxPage, setMaxPage] = React.useState(1)
  const [pageList, setPageList] = React.useState(null)
  const pokemonsListFormated = useSelector(state => state.pokemonsReducer.pokemonsList)
  const loading = useSelector(state => state.pokemonsReducer.loading)
  const pokemonListElement = useRef()

  React.useEffect(
    () => {

      const fetchPokemonsInfos = async (pokemonsList, array = [], index = 0) => {

        if (index === pokemonsList.length) {
          setPageList(array)
          return
        }
        else {
          fetch(`${pokemonsList[index].url}`)
            .then(response1 => response1.json())
            .then(async (response1) => {

              fetch(`${response1.species.url}`)
                .then(response2 => response2.json())
                .then((response2) => {

                  array.push(formatedPokemonInfos(response1, response2))
                  return fetchPokemonsInfos(pokemonsList, array, index + 1)
                })
                .catch(error => console.error(error))
            })
            .catch(error => console.error(error))
        }
      }

      const fetchList = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * resultsPerPage}&limit=${resultsPerPage}`)
          .then(response => response.json())
          .then(async response => {
            setMaxPage(Math.floor(response.count / resultsPerPage))
            fetchPokemonsInfos(response.results)
          })
          .catch(error => console.error(error))
      }

      pokemonListElement.current.scrollTo(0, 0)

      if (pokemonsListFormated && !loading) {
        setMaxPage(Math.floor(pokemonsListFormated.length / resultsPerPage))
        setPageList(pokemonsListFormated.slice((page * resultsPerPage), (page * resultsPerPage) + resultsPerPage))
      }
      else {
        fetchList()
      }
      return
      // eslint-disable-next-line
    }, [page]
  )


  return (
    <div className='PokemonsList' ref={pokemonListElement}>

      {pageList !== null &&
        <Pagination
          page={page} setPage={setPage}
          maxPage={maxPage}
        />}

      {!loading &&
        <PokemonsFilters
          setPageList={setPageList}
          setPage={setPage}
          pokemonsListFormated={pokemonsListFormated}
        />}

      {pageList !== null && pageList.map((pokemon) => (
        <PokemonsListCard key={pokemon.id} pokemon={pokemon} />
      ))}

      {pageList !== null &&
        <Pagination
          page={page} setPage={setPage}
          maxPage={maxPage}
        />}

    </div>
  );
};

export default PokemonList;