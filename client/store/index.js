// REDUX STORE
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// What state looks like:
// state: {
//   auth: auth,
// }

// const reducer = combineReducers({ auth })

const reducer = (state = {}, action) => {
  return state;
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger()));

export default store;
