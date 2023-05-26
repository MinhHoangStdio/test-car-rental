import { authActions } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { getAuth } from '@/utils/auth';

import dynamic from 'next/dynamic';

import { styled } from '@mui/system';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import styles from '../../styles/Home.module.scss';
import { Divider } from '@mui/material';

const Profile = dynamic(() => import('@/contents/profile/Profile'));

function CustomButton<C extends React.ElementType>(props: ButtonProps<C, { component?: C }>) {
  return <Button sx={{ fontSize: '16px', fontWeight: 600, textTransform: 'none' }} {...props} />;
}

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = getAuth()?.user;
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <div className={`${styles['home-container']}`}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ height: '70px' }}
            alignItems="center"
          >
            <Box>
              <Link href="/" className={`${styles.link}`}>
                {'HCR logo'}
              </Link>
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Link href="/home" className={`${styles.link}`} style={{ marginRight: '' }}>
                {'Về HCR'}
              </Link>
              <Link href="/home" className={`${styles.link}`}>
                {'Trở thành chủ xe'}
              </Link>
              <Link href="/home" className={`${styles.link}`}>
                {'Blog'}
              </Link>
              <div style={{ height: '20px', borderRight: '1px solid #ccc' }}></div>
              {currentUser ? (
                <>
                  <Profile />
                </>
              ) : (
                <>
                  <CustomButton
                    variant="text"
                    color="inherit"
                    onClick={() => dispatch(authActions.openSignInModal())}
                  >
                    Đăng nhập
                  </CustomButton>
                  <CustomButton
                    variant="outlined"
                    color="inherit"
                    onClick={() => dispatch(authActions.openSignUpModal())}
                  >
                    Đăng ký
                  </CustomButton>
                </>
              )}
            </Stack>
          </Stack>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
