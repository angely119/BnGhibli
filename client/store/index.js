// REDUX STORE
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rentalsReducer from './rentals';
import singleRentalReducer from './singleRental';

// What state looks like:
// state: {
//  authUser: {},
//  rentals: [];
//  singleRental: {};
// }

const rootReducer = combineReducers({
  // authUser: authUserReducer,
  rentals: rentalsReducer,
  singleRental: singleRentalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
