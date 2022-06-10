import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchRentals } from "../store/rentals";
import { RentalIndexItem } from "./index";

// STYLED COMPONENTS
const StyledRentalIndex = styled.div`
  padding: 40px 80px
`;

const RentalIndexHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #484848;
  padding-bottom: 10px;
`;

const RentalsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;

// FUNCTIONAL COMPONENT
const RentalIndex = () => {
  const rentals = useSelector((state) => state.rentals);
  // useSelector is passed the Redux store state by default
  // Which we made an empty array as initial state
  // Once we dispatch fetchRentals, the array will have the rentals
  // Takes in a selector function as its first argument that determines which part of the state to extract
  // useSelector will return the return value of the selector fn
  // The selector will be run whenever the function component renders

  const dispatch = useDispatch();
    // useDispatch returns a reference to the dispatch function from the Redux store

  useEffect(() => {
    dispatch(fetchRentals())
  }, [dispatch]);
    // useEffect takes in an effect, aka a function to run after render as the 1st argument
    // By default, it runs after every render (After component mounting and updating)
    // The 2nd argument is a dependency array that tells useEffect to run the effect again ONLY if the dependencies in the array change
    //
  return(
    <StyledRentalIndex>
      <RentalIndexHeader>Explore ghibli·nb</RentalIndexHeader>
      <RentalsContainer>
      {rentals.map(rental => (
        <RentalIndexItem key={rental.id} rental={rental} />
      ))}
  </RentalsContainer>
    </StyledRentalIndex>
  )
};

export default RentalIndex;
