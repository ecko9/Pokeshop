import PokemonsCardSmall from 'components/PokemonsCardSmall';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavCart = () => {

  const cart = useSelector(state => state.cartsReducer.cart)
  const [totalCartPrice, setTotalCartPrice] = React.useState(0)
  const navigate = useNavigate()

  React.useEffect(
    () => {
      if (cart && cart.length > 0)
        setTotalCartPrice(cart.reduce((a, b) => a + (b.pokemonPrice * b.quantity), 0))
      return
    }, [cart]
  )

  return (
    <div
      className='NavCart'
      style={{ opacity: '1' }}
    >
      <h2>Panier</h2>

      <div className='cart-items'>
        {(cart && cart.length > 0) ? cart.map(pokemon => (
          <PokemonsCardSmall key={pokemon.pokemonId} pokemon={pokemon} />
        )) : <span>Vide</span>}
      </div>

      <div className='payment'>
        <h3>Total: <span>{totalCartPrice}€</span></h3>
        <i className="fa-solid fa-money-bill-wave fa-md link" onClick={e => navigate('/payment')}></i>
      </div>

    </div>
  );
};

export default NavCart;