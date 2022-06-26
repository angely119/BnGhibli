import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import styled from "styled-components";
import RentalIndexItem from './index';

const MapContainer = ({ rentals }) => {
  const [ selectedRental, setSelectedRental ] = useState({});
  const onSelect = rental => {
    setSelectedRental(rental);
  };
  const mapStyles = {
    height: "90vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 36.213876, lng: 137.929798
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={7}
          center={defaultCenter}
          options={options}
          onClick={() => setSelectedRental({})}
        >
          {rentals.map(rental => (
            <Marker
              key={rental.location.name}
              position={rental.location.coords}
              onClick={() => onSelect(rental)}
            />))}
          {selectedRental.location &&
            (<InfoWindow
              position={selectedRental.location.coords}
              clickable={true}
              onCloseClick={() => setSelectedRental({})}
            >
              <RentalIndexItem className="mapRental" rental={selectedRental}/>
            </InfoWindow>
            )
          }
        </GoogleMap>
    </LoadScript>
  )
};

export default MapContainer;
