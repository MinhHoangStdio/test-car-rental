import * as React from 'react';
import { Theme, styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import styles from '../../styles/Home.module.scss';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  color: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
};

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

interface BannerLayoutProps {
  sxBackground: SxProps<Theme>;
}

export default function BannerLayout(
  props: React.HTMLAttributes<HTMLDivElement> & BannerLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <Box className={`${styles['home-container']}`} sx={containerStyle}>
      {children}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'common.black',
          opacity: 0.5,
          zIndex: -1,
        }}
      />
      <Background sx={sxBackground} />
    </Box>
  );
}
