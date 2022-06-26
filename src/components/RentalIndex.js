import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchRentals } from "../store/rentals";
import { RentalIndexItem } from "./index";

// STYLED COMPONENTS
const StyledRentalsIndex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;

// FUNCTIONAL COMPONENT
const RentalIndex = () => {
  const rentals = useSelector((state) => state.rentals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRentals())
  }, [dispatch]);

  return(
      <StyledRentalsIndex>
        {rentals.map(rental => (
          <RentalIndexItem key={rental.id} rental={rental} />
        ))}
      </StyledRentalsIndex>
  )
};

export default RentalIndex;
