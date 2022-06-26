import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchRentals } from "../store/rentals";
import styled from "styled-components";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map, RentalIndexItem } from "./index";

const StyledSearchRentalsContainer = styled.div`
  display: flex;
  width: 100%;
`;


const StyledSearchRightContainer = styled.div`
  display: flex;
  width: 50%;
`;

const StyledSearchLeftContainer = styled(StyledSearchRightContainer)`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px;
`;

const StyledRentalsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
`;

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const RentalsSearch = () => {
  const rentals = useSelector((state) => state.rentals);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRentals())
  }, [dispatch]);

  return (
    <StyledSearchRentalsContainer>
      <StyledSearchLeftContainer>
        <h3>Showing {rentals.length} of 8 results:</h3>
        <StyledRentalsContainer>
          {rentals.map(rental => (
            <RentalIndexItem key={rental.id} rental={rental} />
          ))}
        </StyledRentalsContainer>
      </StyledSearchLeftContainer>
      <StyledSearchRightContainer>
        <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
          <Map
            zoom={4}
            center={{lat:38.0, lng:-100.0}}
            options={options}/>
        </Wrapper>
      </StyledSearchRightContainer>
    </StyledSearchRentalsContainer>
  );
};

export default RentalsSearch;
