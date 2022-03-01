import { ADD_TO_CART, REMOVE_TO_CART } from "./types";

export const addToCart = (pokemonId, pokemonName, pokemonColor, pokemonPrice, pokemonImage, quantity) => {
  return {
    type: ADD_TO_CART,
    item: { pokemonId, pokemonName, pokemonColor, pokemonPrice, pokemonImage, quantity }
  }
}

export const RemoveToCart = (pokemonId, quantity) => {
  return {
    type: REMOVE_TO_CART,
    item: { pokemonId, quantity }
  }
}

