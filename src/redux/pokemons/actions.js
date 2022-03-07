import { FETCH_POKEMONS_LIST, FETCH_POKEMONS_LIST_SUCCESS, FETCH_ERROR } from "./types";

export const fetchPokemonsList = () => {
  return {
    type: FETCH_POKEMONS_LIST
  }
}

export const fetchPokemonsListSuccess = (list) => {
  return {
    type: FETCH_POKEMONS_LIST_SUCCESS,
    list
  }
}

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    error
  }
}