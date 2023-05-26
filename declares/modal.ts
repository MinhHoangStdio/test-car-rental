import bg from '../public/images/bground.svg';
import bg2 from '../public/images/5559852.jpg';

export const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 570,
  // backgroundImage: `url(${bg.src})`,
  // backgroundImage: `url(${bg.src})`,
  backgroundColor: 'white',
  backgroundSize: 'contain',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  color: '#fff',
  outline: '2px solid #ccc',
  '&:focus': {
    outline: '2px solid #ccc',
    boxShadow: 'none',
  },
};

export const styleModalSetting = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

export const displayCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const tabStyle = {
  border: '1px solid #333',
  p: '10px 24px',
  borderRadius: '20px',
  cursor: 'pointer',
  color: '#333',
  '&:hover': {
    color: '#fff',
    bgcolor: '#333',
  },
};
