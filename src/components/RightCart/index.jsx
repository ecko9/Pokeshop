import PokemonsRightCartCard from 'components/PokemonsRightCartCard';
import React from 'react';
import { useSelector } from 'react-redux';

const RightCart = ({ displayRightCart }) => {

  const cart = useSelector(state => state.cartsReducer.cart)
  const [totalCartPrice, setTotalCartPrice] = React.useState(0)

  React.useEffect(
    () => {
      if (cart && cart.length > 0)
        setTotalCartPrice(cart.reduce((a, b) => a + (b.pokemonPrice * b.quantity), 0))
      return
    }, [cart]
  )


  return (
    <div
      className='RightCart'
      style={displayRightCart ? { opacity: '1' } : { opacity: '0' }}
    >
      <h2>Panier</h2>

      <div className='cart-items'>
        {(cart && cart.length > 0) && cart.map(pokemon => (
          <PokemonsRightCartCard key={pokemon.pokemonId} pokemon={pokemon} />
        ))}
      </div>

      <div className='payment'>
        <h3>Total: <span>{totalCartPrice} €</span></h3>
        <i className="fa-solid fa-money-bill-wave fa-lg link"></i>
      </div>

    </div>
  );
};

export default RightCart;