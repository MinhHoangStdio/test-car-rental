import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#333',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#333',
    },
    '&:hover fieldset': {
      borderColor: '#333',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333',
    },
    '&:-webkit-autofill': {
      transitionDelay: '9999s',
      transitionProperty: 'background-color, color',
    },
  },
}));
