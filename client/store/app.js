// AUTH REDUCER
import axios from "axios";

// ACTION TYPES
const SET_AUTH_USER = 'SET_AUTH_USER';

// ACTION CREATORS
const setAuthUser = (authUser) => {
  return {
    type: SET_AUTH_USER,
    authUser
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
  // GET /auth/user returns the user object after it verifies the token
  return async (dispatch) => {
    const { data: authUser } = await axios.get('/auth/user', {
      headers: {
        authorization: token // GET /auth/user takes in token in the authorization header to find the User
      }
    });
    dispatch(setAuthUser(authUser));
  }
};

// RETURNS A TOKEN ON LOGIN/SIGNUP THEN FETCHES THE USER
export const authenticateUser = () => {
  return async (dispatch) => {

  }
}
