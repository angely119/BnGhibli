import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "./Map";

// const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const RentalsSearch = () => {
  return (
    <Wrapper apiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <Map />
    </Wrapper>
  );
};

export default RentalsSearch;
