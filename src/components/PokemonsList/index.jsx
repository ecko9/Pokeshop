import PokemonsListCard from 'components/PokemonsListCard';
import React, { useRef } from 'react';
import Pagination from './_Pagination';
import PokemonsFilters from './_PokemonsFilters';

const PokemonList = ({ pokemonsInfos }) => {

  const [page, setPage] = React.useState(0)
  const resultsPerPage = 50
  const [maxPage, setMaxPage] = React.useState(1)
  const [pageList, setPageList] = React.useState(null)
  const [allResults, setAllResults] = React.useState(null)
  const pokemonListElement = useRef()

  React.useEffect(
    () => {
      if (pokemonsInfos.listFormated !== null)
        setAllResults(pokemonsInfos.listFormated)
      else if (pokemonsInfos.listFormatedTmp !== null)
        setAllResults(pokemonsInfos.listFormatedTmp)
      else
        return
      return
    }, [pokemonsInfos]
  )

  React.useEffect(
    () => {
      pokemonListElement.current.scrollTo(0, 0)
      if (allResults !== null) {
        setPageList(allResults.slice((page * resultsPerPage), (page * resultsPerPage) + resultsPerPage))
        setMaxPage(Math.floor(allResults.length / resultsPerPage))
      }
      return
      // eslint-disable-next-line
    }, [page, resultsPerPage, allResults]
  )

  return (
    <div className='PokemonsList' ref={pokemonListElement}>

      {console.log(pageList)}

      {pageList !== null &&
        <Pagination
          page={page} setPage={setPage}
          maxPage={maxPage}
        />}

      {allResults !== null &&
        <PokemonsFilters
          setPageList={setPageList}
          setPage={setPage}
          allResults={allResults}
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