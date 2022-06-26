import React from 'react';
import Map from "./Map";
import { Wrapper } from "@googlemaps/react-wrapper";

const RentalsSearch = () => {
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <Map />
    </Wrapper>
  );
};

export default RentalsSearch;
