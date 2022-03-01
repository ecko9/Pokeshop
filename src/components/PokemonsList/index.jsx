import PokemonsListCard from 'components/PokemonsListCard';
import React from 'react';

const PokemonList = ({ pokemonsList }) => {

  const [page, setPage] = React.useState(0)
  const resultsPerPage = 50
  const [pageList, setPageList] = React.useState(null)

  React.useLayoutEffect(
    () => {
      setPageList(pokemonsList.slice(page, page + resultsPerPage))
      return
      // eslint-disable-next-line
    }, [page, resultsPerPage]
  )

  return (
    <div className='PokemonsList'>
      {pageList !== null && pageList.map((pokemon) => (
        <PokemonsListCard key={pokemon.id} pokemon={pokemon} />
      ))
      }
    </div>
  );
};

export default PokemonList;