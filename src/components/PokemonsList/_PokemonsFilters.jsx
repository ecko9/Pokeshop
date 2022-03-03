import React from 'react';

const PokemonsFilters = ({ setPageList, pokemonsList, pokemonsListTmp, setPage }) => {

  const [search, setSearch] = React.useState("")

  React.useEffect(
    () => {
      setPage(0)
      if (search.length > 1 && (search !== "" || " " || "  "))
        if (pokemonsList !== null)
          setPageList(pokemonsList.filter(((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()) === true)))
        else
          setPageList(pokemonsListTmp.filter(((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()) === true)))
      else
        setPageList(pokemonsListTmp.slice(0, 50))
      return
      // eslint-disable-next-line
    }, [search, pokemonsList]
  )

  return (
    <div className='PokemonsFilters'>
      <input
        name="search"
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default PokemonsFilters;