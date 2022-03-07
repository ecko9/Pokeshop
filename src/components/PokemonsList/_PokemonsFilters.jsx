import React from 'react';

const PokemonsFilters = ({ setPageList, pokemonsListFormated, setPage }) => {

  const [search, setSearch] = React.useState("")

  React.useEffect(
    () => {
      setPage(0)
      if (search.length > 1 && (search !== "" || " " || "  "))
        setPageList(pokemonsListFormated.filter(((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()) === true)))
      else
        setPageList(pokemonsListFormated.slice(0, 25))
      return
      // eslint-disable-next-line
    }, [search]
  )

  return (
    <div className='PokemonsFilters'>
      <input
        name="pokename"
        type="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default PokemonsFilters;