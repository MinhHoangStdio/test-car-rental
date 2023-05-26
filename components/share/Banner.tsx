import * as React from 'react';
import Button from './Button';
import BannerLayout from '../../contents/home/BannerLayout';
import Typography from './Typography';
import { Box, Card } from '@mui/material';
import DatePickerValue from './DatePickerValue';

const backgroundImage = 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg';

const Banner: React.FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <BannerLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: '#7fc7d9', // Average color of the background image.
          backgroundPosition: 'center',
        }}
      >
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Slogan gì đấy
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
          Bạn cần sự riêng tư khi đi xa, ở đây chúng tôi có cho thuê xe(kèm tài xế nếu muốn)
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="#"
          sx={{ minWidth: 200 }}
        >
          Đặt xe ngay
        </Button>
      </BannerLayout>
      {/* Form rent */}
      <Box sx={{ position: 'absolute', zIndex: 11, bottom: '-20px', width: '100%' }}>
        <Card sx={{ width: '100%', maxWidth: '800px', p: 2, mr: 'auto', ml: 'auto' }}>
          Form thuê xe
          <DatePickerValue />
        </Card>
      </Box>
    </Box>
  );
};
export default Banner;
