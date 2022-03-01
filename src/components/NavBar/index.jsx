import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ setDisplayRightCart, displayRightCart }) => {

  const navigate = useNavigate()
  return (
    <div className='NavBar'>

      <h1 onClick={e => navigate('/pokemons')}>PokeShop</h1>

      <div className='NavCart' onClick={e => setDisplayRightCart(!displayRightCart)}>
        <i class="fa-solid fa-cart-shopping fa-2xl"></i>
      </div>

    </div>
  );
};

export default NavBar;