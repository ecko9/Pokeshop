import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/carts/actions';

const AddToCart = ({ pokemon }) => {

  const [quantity, setQuantity] = React.useState(1)
  const dispatch = useDispatch()

  const removeOneQuantity = (e) => {
    e.stopPropagation()
    if (quantity > 1)
      setQuantity(quantity - 1)
  }

  const addOneQuantity = (e) => {
    e.stopPropagation()
    setQuantity(quantity + 1)
  }

  const addPokemonToCart = (e) => {
    e.stopPropagation()
    dispatch(addToCart(pokemon.id, pokemon.name, pokemon.color, pokemon.price, pokemon.images[1], quantity))
    setQuantity(1)
  }

  return (
    <div className='AddToCart' onClick={e => e.stopPropagation()}>

      <span className='price'>{pokemon.price} €</span>

      <div className='quantity'>
        <div className='remove-one' onClick={e => removeOneQuantity(e)}><i className="fa-solid fa-minus"></i></div>
        <span>{quantity}</span>
        <div className='add-one' onClick={e => addOneQuantity(e)}><i className="fa-solid fa-plus"></i></div>
      </div>

      <div className='btn-cart' onClick={e => addPokemonToCart(e)}>
        <i className="fa-solid fa-cart-shopping fa-xl"></i>
      </div>

    </div>
  );
};

export default AddToCart;