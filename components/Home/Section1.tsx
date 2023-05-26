import { Box } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.scss';

const Section1 = () => {
  return (
    <Box className={`${styles['home-container']}`} sx={{ height: '500px' }}>
      <Box
        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      >
        Session 1
      </Box>
    </Box>
  );
};
export default Section1;
