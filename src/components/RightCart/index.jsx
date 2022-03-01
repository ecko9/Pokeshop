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
    <div className='RightCart' style={displayRightCart ? { width: '20%' } : { width: '0%' }}>

      <h3 style={displayRightCart ? { display: 'flex' } : { display: 'none' }}>Total: {totalCartPrice} €</h3>

      {(cart && cart.length > 0 && displayRightCart) && cart.map(pokemon => (
        <PokemonsRightCartCard key={pokemon.pokemonId} pokemon={pokemon} />
      ))}

      <div className='btn-payment'>
        <i className="fa-solid fa-money-bill-wave fa-lg"></i>
      </div>

    </div>
  );
};

export default RightCart;