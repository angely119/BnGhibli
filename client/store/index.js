// REDUX STORE
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rentalsReducer from './rentals';

// What state looks like:
// state: {
//  auth: auth,
//  rentals: [];
// }

const rootReducer = combineReducers({
  // auth,
  rentals: rentalsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
