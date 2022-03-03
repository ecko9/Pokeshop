import PokemonsListCard from 'components/PokemonsListCard';
import React from 'react';
import Pagination from './_Pagination';
import PokemonsFilters from './_PokemonsFilters';

const PokemonList = ({ pokemonsInfos }) => {

  const [page, setPage] = React.useState(0)
  const resultsPerPage = 50
  const [maxPage, setMaxPage] = React.useState(null)

  const [pageList, setPageList] = React.useState(null)

  React.useEffect(
    () => {
      if (pokemonsInfos.listFormated !== null)
        setPageList(pokemonsInfos.listFormated.slice((page * resultsPerPage), (page * resultsPerPage) + resultsPerPage))
      else if (pokemonsInfos.listFormatedTmp !== null)
        setPageList(pokemonsInfos.listFormatedTmp.slice((page * resultsPerPage), (page * resultsPerPage) + resultsPerPage))
      else
        return

      return
      // eslint-disable-next-line
    }, [page, resultsPerPage]
  )

  React.useEffect(
    () => {
      if (pokemonsInfos.listFormated !== null)
        setMaxPage(Math.floor(pokemonsInfos.listFormated.length / resultsPerPage))
      return
    }, [pokemonsInfos.listFormated]
  )

  return (
    <div className='PokemonsList'>

      {pokemonsInfos.listFormatedTmp !== null &&
        <Pagination
          page={page} setPage={setPage}
          maxPage={maxPage}
        />}

      {pokemonsInfos.listFormatedTmp !== null &&
        <PokemonsFilters
          setPageList={setPageList}
          setPage={setPage}
          pokemonsListTmp={pokemonsInfos.listFormatedTmp}
          pokemonsList={pokemonsInfos.listFormated}
        />}

      {pageList !== null && pageList.map((pokemon) => (
        <PokemonsListCard key={pokemon.id} pokemon={pokemon} />
      ))}

    </div>
  );
};

export default PokemonList;