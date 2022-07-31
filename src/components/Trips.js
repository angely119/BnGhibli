import React from "react";
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
`;

const Trips = () => {
  return (
    <PageContainer>
      <StyledTripsHeader>
        Trips
      </StyledTripsHeader>
      <StyledNoTripsContainer>

      </StyledNoTripsContainer>
      <br />
      <StyledTripsHeader>
        Where you've been
      </StyledTripsHeader>
    </PageContainer>
  );
};

export default Trips;
