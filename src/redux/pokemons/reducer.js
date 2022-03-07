import { FETCH_POKEMONS_LIST, FETCH_POKEMONS_LIST_SUCCESS, FETCH_ERROR } from "./types";

const initialState = {
  loading: false,
  pokemonsList: [],
  error: ""
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_POKEMONS_LIST:
      return {
        ...state,
        loading: true
      }

    case FETCH_POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        pokemonsList: action.list,
        loading: false
      }

    case FETCH_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state;
  }
}

export default pokemonsReducer;