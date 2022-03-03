import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ setDisplayRightCart, displayRightCart }) => {

  const navigate = useNavigate()
  return (
    <div className='NavBar'>

      <h1>
        <span className='link' onClick={e => navigate('/pokemons')}>PokéShoP</span>
      </h1>

      <div className='NavCartBtn'>
        <i className="fa-solid fa-cart-shopping fa-xl link" onClick={e => setDisplayRightCart(!displayRightCart)}></i>
      </div>

    </div>
  );
};

export default NavBar;