import { ADD_TO_CART, REMOVE_TO_CART } from "./types";

export const addToCart = (pokemonId, pokemonPrice, quantity) => {
  return {
    type: ADD_TO_CART,
    item: { pokemonId, pokemonPrice, quantity }
  }
}

export const RemoveToCart = (pokemonId, quantity) => {
  return {
    type: REMOVE_TO_CART,
    item: { pokemonId, quantity }
  }
}

