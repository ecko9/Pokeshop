import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from 'pages/Pokemons';
import PokemonDetail from 'pages/PokemonDetail';
import usePokemonsInfos from 'hooks/usePokemonsInfos';

const App = () => {

  const pokemonsListFormated = usePokemonsInfos()

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/pokemons' exact element={<Pokemons pokemonsList={pokemonsListFormated} />} />
          <Route path='/pokemons/:id' exact element={<PokemonDetail />} />
          <Route path='*' element={<Pokemons pokemonsList={pokemonsListFormated} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;