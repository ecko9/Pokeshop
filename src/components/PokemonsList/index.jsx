import PokemonsListCard from 'components/PokemonsListCard';
import React, { useRef } from 'react';
import Pagination from './_Pagination';
import PokemonsFilters from './_PokemonsFilters';

const PokemonList = ({ pokemonsListFormated }) => {

  const resultsPerPage = 50
  const [page, setPage] = React.useState(0)
  const [maxPage, setMaxPage] = React.useState(1)
  const [pageList, setPageList] = React.useState(null)
  const pokemonListElement = useRef()

  React.useEffect(
    () => {
      pokemonListElement.current.scrollTo(0, 0)
      if (pokemonsListFormated !== null) {
        setPageList(pokemonsListFormated.slice((page * resultsPerPage), (page * resultsPerPage) + resultsPerPage))
        setMaxPage(Math.floor(pokemonsListFormated.length / resultsPerPage))
      }
      return
      // eslint-disable-next-line
    }, [page, resultsPerPage, pokemonsListFormated]
  )

  return (
    <div className='PokemonsList' ref={pokemonListElement}>

      {pageList !== null &&
        <Pagination
          page={page} setPage={setPage}
          maxPage={maxPage}
        />}

      {pokemonsListFormated !== null &&
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