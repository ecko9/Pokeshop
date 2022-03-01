import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import cartsReducer from './carts/reducer';

const rootReducer = combineReducers({
  cartsReducer
})

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
  )
);

export default store;