import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from 'pages/Pokemons';
import PokemonDetail from 'pages/PokemonDetail';
import Payment from 'pages/Payment';
import usePokemonsInfos from 'hooks/usePokemonsInfos';

const App = () => {

  const fetchList = usePokemonsInfos()

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/pokemons' exact element={<Pokemons />} />
          <Route path='/pokemons/:id' exact element={<PokemonDetail />} />
          <Route path='/payment' exact element={<Payment />} />
          <Route path='*' element={<Pokemons />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;