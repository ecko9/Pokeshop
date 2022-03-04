import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from 'redux/carts/actions';

const PokemonsCardSmall = ({ pokemon }) => {

  const dispatch = useDispatch()

  const addOneQuantity = (e) => {
    e.stopPropagation()
    dispatch(addToCart(pokemon.pokemonId, pokemon.pokemonName, pokemon.pokemonColor, pokemon.pokemonPrice, pokemon.pokemonImage, 1))
  }

  const removeOneQuantity = (e) => {
    e.stopPropagation()
    dispatch(removeToCart(pokemon.pokemonId, 1))
  }

  const removePokemonToCart = (e) => {
    e.stopPropagation()
    dispatch(removeToCart(pokemon.pokemonId, pokemon.quantity))
  }

  return (
    <div className='PokemonsCardSmall'>

      <img src={`${pokemon.pokemonImage}`} alt={`small ${pokemon.pokemonName}`} />

      <div className='item-infos'>
        <span className='price'>{pokemon.pokemonPrice}€</span>

        <span className='txt'>x</span>

        <div className='quantity'>
          <div className='remove-one link' onClick={e => removeOneQuantity(e)}><i className="fa-solid fa-minus"></i></div>
          <span>{pokemon.quantity}</span>
          <div className='add-one link' onClick={e => addOneQuantity(e)}><i className="fa-solid fa-plus"></i></div>
        </div>

        <span className='txt'>:</span>

        <span className='total-price'>{pokemon.pokemonPrice * pokemon.quantity}€</span>

        <div className='btn-remove-item link' onClick={e => removePokemonToCart(e)}>
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>

      <div className='bg-overlay' style={{ background: `linear-gradient(to left, ${pokemon.pokemonColor}, white 75%)` }} />
    </div>
  );
};

export default PokemonsCardSmall;