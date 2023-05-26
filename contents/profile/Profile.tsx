import { authActions } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { getAuth } from '@/utils/auth';
import { Avatar, Box, Button, IconButton, MenuItem, Popover, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { displayCenter } from '@/declares/modal';

interface IProfile {}
const Profile = ({}: any) => {
  const { t } = useTranslation('common');

  const dispatch = useAppDispatch();
  const router = useRouter();
  const currentUser = getAuth()?.user;

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const DisplayNameUser = currentUser?.firstName
    ? `${currentUser?.firstName} ${currentUser?.lastName}`
    : currentUser?.name;
  const DisplayEmail = currentUser?.socialAccount
    ? currentUser?.socialAccount?.email
    : currentUser?.email;
  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Avatar alt="avatar" sx={{ bgcolor: 'secondary.dark' }}></Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            px: 0.5,
            background: '#fff',
            width: 290,
            color: '#262626',
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ ...displayCenter, flexDirection: 'column', mt: 3.5, px: 3 }}>
          <Avatar alt="avatar" sx={{ bgcolor: 'secondary.dark', width: 100, height: 100 }}></Avatar>

          <Box sx={{ ...displayCenter, flexDirection: 'column', mt: 1 }}>
            <Typography variant="subtitle2" noWrap sx={{ fontWeight: 'bold', maxWidth: '200px' }}>
              {DisplayNameUser}
            </Typography>
            <Typography variant="body2" sx={{ color: '#A6A9B9', maxWidth: '200px' }} noWrap>
              {DisplayEmail}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ border: '1px solid #A6A9B9' }} />

        <MenuItem onClick={handleClose} sx={{ ...displayCenter, py: 1.5 }}>
          <Button
            onClick={() => dispatch(authActions.logout({}))}
            sx={{ fontWeight: 'bold', textTransform: 'none', color: '#333' }}
          >
            {t('log-out')}
          </Button>
        </MenuItem>
      </Popover>
    </Box>
  );
};

export default Profile;
