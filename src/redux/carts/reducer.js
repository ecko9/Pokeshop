import { ADD_TO_CART, REMOVE_TO_CART } from "./types";

const initialState = {
  cart: localStorage['cart'] ? JSON.parse(localStorage['cart']) : []
}

const addQuantityOrItemToCart = (cart, item) => {
  let stored = false

  let cartTmp = cart.map((cartItem) => {
    if (cartItem.pokemonId === item.pokemonId) {
      stored = true
      return { pokemonId: item.pokemonId, pokemonName: item.pokemonName, pokemonColor: item.pokemonColor, pokemonPrice: item.pokemonPrice, pokemonImage: item.pokemonImage, quantity: cartItem.quantity + item.quantity }
    }
    else
      return cartItem
  })

  if (stored === false)
    cartTmp.push(item)

  localStorage['cart'] = JSON.stringify(cartTmp)
  return cartTmp
}

const removeQuantityOrItemToCart = (cart, item) => {
  let cartTmp = cart.map((cartItem) => {
    if (cartItem.pokemonId === item.pokemonId) {
      if (cartItem.quantity - item.quantity <= 0)
        return null
      else
        return { pokemonId: cartItem.pokemonId, pokemonName: cartItem.pokemonName, pokemonColor: cartItem.pokemonColor, pokemonPrice: cartItem.pokemonPrice, pokemonImage: cartItem.pokemonImage, quantity: cartItem.quantity - item.quantity }
    }
    else
      return cartItem
  })

  localStorage['cart'] = JSON.stringify(cartTmp.filter(x => x !== null))
  return cartTmp.filter(x => x !== null)
}

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        cart: addQuantityOrItemToCart(state.cart, action.item)
      }

    case REMOVE_TO_CART:
      return {
        ...state,
        cart: removeQuantityOrItemToCart(state.cart, action.item)
      }

    default:
      return state;
  }
}

export default cartsReducer;