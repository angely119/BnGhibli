import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRental } from "../store/singleRental";


const RentalDetails = (props) => {
  const rental = useSelector((state) => state.singleRental);
  const rentalId = props.match.params.rentalId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleRental(rentalId))
  }, [dispatch]);

  return (
    <div>
      <h1>RENTAL DETAILS PAGE</h1>
      <h3>{rental.rentalName}</h3>
    </div>
  )
};

export default RentalDetails;
