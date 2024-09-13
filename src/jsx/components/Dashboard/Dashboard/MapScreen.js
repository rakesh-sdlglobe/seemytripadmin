import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapScreen = () => {
  return (
    <div className="container mt-4 bg-white p-3 rounded shadow-sm">
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <div>
          <h2 className="mb-2 fs-22">Google Map</h2>
          <p className='text-grey fs-17'>Airport Hotels: The Right Way To Start A Short Break Holiday</p>
        </div>
        <div>
          <button className="btn btn-light rounded-circle">
            <i className="fa fa-ellipsis-v text-dark" />
          </button>          
        </div>
      </div>
      <div className="border-top my-4"></div>
      <LoadScript
        googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapScreen;
