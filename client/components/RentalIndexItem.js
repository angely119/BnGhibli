import React from "react";
import styled from "styled-components";

const RentalsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;

const StyledRentalIndexItem = styled.div`
  display: flex;
  flex: 1 0 21%;
  height: 386px;
  border: solid grey 1px;
`;

const RentalIndexItem = (props) => {
  const { rentals } = props;
  return (
    <RentalsContainer>
      {rentals.map(rental => (
        <StyledRentalIndexItem key={rental.id}>{rental.rentalName}</StyledRentalIndexItem>
      ))}
      <StyledRentalIndexItem>DUMMY 6</StyledRentalIndexItem>
      <StyledRentalIndexItem>DUMMY 7</StyledRentalIndexItem>
      <StyledRentalIndexItem>DUMMY 8</StyledRentalIndexItem>
  </RentalsContainer>
  )
};

export default RentalIndexItem;
