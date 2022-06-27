import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchRentals } from "../store/rentals";
import styled from "styled-components";
import { RentalIndexItem } from "./index";
import MapContainer from './MapContainer';

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

const RentalsSearch = () => {
  const rentals = useSelector((state) => state.rentals);
  const dispatch = useDispatch();
  const { search } = useLocation();
  useEffect(() => {
    dispatch(fetchRentals(search))
  }, [dispatch, search]);


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
        <MapContainer rentals={rentals}/>
      </StyledSearchRightContainer>
    </StyledSearchRentalsContainer>
  );
};

export default RentalsSearch;
