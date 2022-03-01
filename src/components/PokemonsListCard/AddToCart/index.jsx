import React from 'react';

const AddToCart = ({ pokemon }) => {

  const [quantity, setQuantity] = React.useState(1)

  return (
    <div className='AddToCart'>

      <span className='price'>{pokemon.price} €</span>

      <div className='quantity'>
        <button className='remove-one' onClick={e => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button className='add-one' onClick={e => setQuantity(quantity + 1)}>+</button>
      </div>

      <button className='btn-cart'>Ajouter au Panier</button>

    </div>
  );
};

export default AddToCart;