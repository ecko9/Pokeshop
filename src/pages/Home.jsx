import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className='Home'>

      <div className='welcome'>
        <h1>PoKéShoP</h1>
        <h2>Achetez les tous !</h2>
        <div className='btn-enter' onClick={e => navigate(`/pokemons`)}>
          <span className='link'>{"Entrer"}</span>
        </div>
      </div>

    </div>
  );
};

export default Home;