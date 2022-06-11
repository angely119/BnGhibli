// AUTH REDUCER
import axios from "axios";

// ACTION TYPES
const SET_AUTH = 'SET_AUTH';

// ACTION CREATORS
const setAuth = (auth) => {
  return {
    type: SET_AUTH,
    auth
  }
};

// THUNK CREATORS

// FETCHES THE USER OBJECT (AFTER AUTHENTICATION)
export const fetchAuthUser = () => {
  // Obtain the token that we previously stored in window.localStorage
  const token = window.localStorage.getItem(token);
  if (!token) {
    throw new Error;
  }
  // ELSE if there is a token return the user object
  // GET /auth/user returns the user object after it verifies the token
  return async (dispatch) => {
    const { data: authUser } = await axios.get('/auth/user', {
      headers: {
        authorization: token // GET /auth/user takes in token in the authorization header to find the User
      }
    });
    dispatch(setAuth(authUser));
  }
};

// RETURNS A TOKEN ON LOGIN/SIGNUP THEN FETCHES THE USER
export const authenticate = (username, password, loginOrSignup) => {
  return async (dispatch) => {
    try {
      const { token } = await axios.post(`/auth/${loginOrSignup}`, {username, password}); // will either make POST /auth/login or /auth/signup based on value
      window.localStorage.setItem(token); // sets the token in localStorage
      dispatch(fetchAuthUser()); // dispatches fetchAuthUser
    } catch (authError) {
      // if there is an auth error set auth as the error object in the store
      const auth = { error: authError };
      dispatch(setAuth(auth));
    }
  }
};

// REMOVES TOKEN FROM LOCALSTORAGE UPON LOGOUT
export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  // history.push('/login') redirects after removnig token
  return {
    type: SET_AUTH,
    auth: {}
  }
}
