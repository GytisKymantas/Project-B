import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  marginTop: '20px',
  borderBottomLeftRadius: '24px',
  borderBottomRightRadius: '24px',
};
const Map: React.FC = ({ latitude, longitude }) => {
  console.log(latitude, longitude);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAiwtIaQV5iz-CowHZoKUVBXLNIL4yNwxA',
  });

  const DisplayMap = () => {
    return (
      <GoogleMap
        zoom={10}
        center={{ lat: latitude, lng: longitude }}
        mapContainerStyle={containerStyle}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    );
  };

  if (!isLoaded) return <div>Loading...</div>;
  return <DisplayMap />;
};

export default Map;
