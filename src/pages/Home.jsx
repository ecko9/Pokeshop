import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='Home'>

      <div className='bg-overlay' />

      <div className='welcome'>
        <h1>PokéShoP</h1>
        <h2>Achetez les tous!</h2>
        <div className='btn-enter' onClick={e => navigate(`/pokemons`)}>
          {"Entrer"}
        </div>
      </div>

    </div>
  );
};

export default Home;