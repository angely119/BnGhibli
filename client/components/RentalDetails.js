import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleRental } from "../store/singleRental";
import styled from "styled-components";

// STYLED COMPONENTS
const StyledRentalContainer = styled.div`
  padding: 40px 80px
`;

const StyledRentalName = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;

const StyledRentalInfoContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledRentalInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
`;


// FUNCTIONAL COMPONENT
const RentalDetails = (props) => {
  const rental = useSelector((state) => state.singleRental);
  const rentalId = props.match.params.rentalId;
  const dispatch = useDispatch();
  const numOfReviews = rental.reviews && rental.reviews.length
  // const avgRating = () => {
  //   return rental.reviews.reduce(avg, cur)
  // }

  useEffect(() => {
    dispatch(fetchSingleRental(rentalId))
  }, [dispatch]);

  return (
    <StyledRentalContainer>
      <StyledRentalName>{rental.rentalName}</StyledRentalName>
      <StyledRentalInfoContainer>
        <StyledRentalInfo>{`${numOfReviews ? numOfReviews : "No"} reviews`}</StyledRentalInfo>
        <StyledRentalInfo>{rental.location}</StyledRentalInfo>
      </StyledRentalInfoContainer>
    </StyledRentalContainer>
  )
};

export default RentalDetails;
