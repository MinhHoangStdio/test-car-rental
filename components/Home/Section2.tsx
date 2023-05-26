import { Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import styles from '../../styles/Home.module.scss';

//map
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Section2 = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  });
  const [map, setMap] = useState<any>(null);
  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);
  return (
    <Box sx={{ bgcolor: '#ccc' }}>
      <Box className={`${styles['home-container']}`} sx={{ height: '500px' }}>
        <Box
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        >
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onUnmount={onUnmount}
            >
              <MarkerF key="1" position={center} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default Section2;
