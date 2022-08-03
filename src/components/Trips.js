import React from "react";
import { Link } from "react-router-dom";
import { PageContainer, StyledRentalsIndex } from "./styles";
import styled from "styled-components";

const StyledTripsHeader = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const StyledNoTripsContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 12px;
  width: 100%;
  height: 286px;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledSearchButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF5A5F;
  height: 50px;
  width: 200px;
  margin-top: 15px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 12px;
  &:hover {
    color: #DEDEDE;
  }
`;

const Trips = () => {
  return (
    <PageContainer>
      <StyledTripsHeader>
        Trips
      </StyledTripsHeader>
      <StyledNoTripsContainer>
        <h2>No trips booked...yet!</h2>
        <p>Start planning your next adventure here</p>
        <StyledSearchButton to='/rentals'>Start searching</StyledSearchButton>
      </StyledNoTripsContainer>
      <br />
      <StyledTripsHeader>
        Where you've been
      </StyledTripsHeader>
    </PageContainer>
  );
};

export default Trips;
