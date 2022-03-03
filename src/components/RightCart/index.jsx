import PokemonsRightCartCard from 'components/PokemonsRightCartCard';
import React from 'react';
import { useSelector } from 'react-redux';

const RightCart = ({ displayRightCart }) => {

  const cart = useSelector(state => state.cartsReducer.cart)
  const [totalCartPrice, setTotalCartPrice] = React.useState(0)
  const [displayBorder, setDisplayBorder] = React.useState('none')

  React.useEffect(
    () => {
      if (cart && cart.length > 0)
        setTotalCartPrice(cart.reduce((a, b) => a + (b.pokemonPrice * b.quantity), 0))
      return
    }, [cart]
  )

  React.useEffect(
    () => {
      if (displayRightCart && displayBorder === 'none')
        setDisplayBorder('1px solid black')

      return
    }, [displayRightCart]
  )

  const stopDisplayBorder = (e) => {
    if (!displayRightCart)
      setDisplayBorder('none')
  }

  return (
    <div
      className='RightCart'
      style={displayRightCart ? { width: '20%', borderLeft: displayBorder } : { width: '0%', borderLeft: displayBorder }}
      onTransitionEnd={e => stopDisplayBorder(e)}
    >

      <div className='payment' style={displayRightCart ? { opacity: '1' } : { opacity: '0' }}>
        <h3>Total: <span>{totalCartPrice} €</span></h3>
        <i className="fa-solid fa-money-bill-wave fa-lg"></i>
      </div>

      {(cart && cart.length > 0) && cart.map(pokemon => (
        <PokemonsRightCartCard key={pokemon.pokemonId} pokemon={pokemon} displayRightCart={displayRightCart} />
      ))}



    </div>
  );
};

export default RightCart;