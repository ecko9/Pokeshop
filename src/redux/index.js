import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cartsReducer from './carts/reducer';
import pokemonsReducer from './pokemons/reducer';

const rootReducer = combineReducers({
  cartsReducer,
  pokemonsReducer
})

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
  )
);

export default store;