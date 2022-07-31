// AUTH REDUCER
import axios from "axios";

// ACTION TYPES
const TOKEN = 'token';
const SET_AUTH = 'SET_AUTH';

// ACTION CREATORS
const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    auth
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: {}
  }
};

// FETCHES THE USER OBJECT (AFTER AUTHENTICATION)
export const fetchAuthUser = (history) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (!token) {
        throw new Error;
      }
      const res = await axios.get('/auth/user', {
        headers: {
          authorization: token
        }
      });
      if (history.location.pathname !== "/home") {
        history.push('/home'); // Redirects to /home after user is fetched
      }
      return dispatch(setAuth(res.data));
    } catch (error) {
      const authError = { error };
      return dispatch(setAuth(authError));
    }
  }
};

// RETURNS A TOKEN ON LOGIN/SIGNUP THEN FETCHES THE USER
export const authenticate = (email, password, username, loginOrSignup, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${loginOrSignup}`, {email, password, username});
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(fetchAuthUser(history));
    } catch (error) {
      const authError = { error };
      return dispatch(setAuth(authError)); // auth = {error: error}
    }
  }
};

// AUTH REDUCER
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
};

export default authReducer;
