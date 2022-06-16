import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { theme } from 'styles/theme';

const containerStyle = {
  width: '100%',
  height: '25rem',
  marginTop: `${theme.space.s20}`,
  borderBottomLeftRadius: `${theme.radii.br24}`,
  borderBottomRightRadius: `${theme.radii.br24}`,
};

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
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
