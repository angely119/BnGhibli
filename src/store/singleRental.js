// RENTALS REDUCER
import axios from "axios";

// ACTION TYPES
const SET_SINGLE_RENTAL = 'SET_SINGLE_RENTAL';

// ACTION CREATORS
const setSingleRental = (singleRental) => {
  return {
    type: SET_SINGLE_RENTAL,
    singleRental
  }
};

// THUNK CREATORS
export const fetchSingleRental = (rentalId) => {
  return async (dispatch) => {
    const { data: singleRental } = await axios.get(`/api/rentals/${rentalId}`);
    dispatch(setSingleRental(singleRental));
  }
};

// REDUCER
const singleRentalReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SINGLE_RENTAL:
      return action.singleRental;
    default:
      return state;
  }
};

export default singleRentalReducer;
