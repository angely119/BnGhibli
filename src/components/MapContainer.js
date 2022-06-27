import React, { useState, useRef, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import RentalIndexItem from './RentalIndexItem';

const MapContainer = ({ rentals }) => {
  const [ selectedRental, setSelectedRental ] = useState({});
  const onSelect = rental => {
    setSelectedRental(rental);
  };

  // Stores current reference of map to useRef to access it throughout code without causing rerenders
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    // map passed from GoogleMap component
    mapRef.current = map;
  }, []);

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
          center={(rentals.length === 8 || rentals.length === 0) ? defaultCenter: rentals[0].location.coords}
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
              <RentalIndexItem isMapInfo={true} rental={selectedRental}/>
            </InfoWindow>
            )
          }
        </GoogleMap>
    </LoadScript>
  )
};

export default MapContainer;
