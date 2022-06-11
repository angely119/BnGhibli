// REDUX STORE
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rentalsReducer from './rentals';
import singleRentalReducer from './singleRental';
import authReducer from './auth';

// What state looks like:
// state: {
//  auth: {}, // this obj will either be the authUser or the authError
//  rentals: [];
//  singleRental: {};
// }

const rootReducer = combineReducers({
  auth: authReducer,
  rentals: rentalsReducer,
  singleRental: singleRentalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
