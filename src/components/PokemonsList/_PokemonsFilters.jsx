import React from 'react';

const PokemonsFilters = ({ setPageList, allResults, setPage }) => {

  const [search, setSearch] = React.useState("")

  React.useEffect(
    () => {
      setPage(0)
      if (search.length > 1 && (search !== "" || " " || "  "))
        setPageList(allResults.filter(((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()) === true)))
      else
        setPageList(allResults.slice(0, 50))
      return
      // eslint-disable-next-line
    }, [search, allResults]
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