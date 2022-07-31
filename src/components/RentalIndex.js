import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRentals } from "../store/rentals";
import { RentalIndexItem } from "./index";
import { StyledRentalsIndex } from "./styles";

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
