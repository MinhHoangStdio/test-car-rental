import Button from '@/components/share/Button';
import { ErrorMessage } from '@/components/share/ErrorMessage';
import { styleModal, tabStyle } from '@/declares/modal';
import { IModal } from '@/declares/models';
import { authActions } from '@/store/auth/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { setAuth } from '@/utils/auth';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import * as Yup from 'yup';
import EyeCloseIcon from '../../../public/icons/login/eye-close.svg';
import EyeOpenIcon from '../../../public/icons/login/eye-open.svg';
import LockIcon from '../../../public/icons/login/lock.svg';
import MailIcon from '../../../public/icons/login/mail.svg';
import { FormTextField } from '@/components/share/FormTextField';

interface ILogin {
  email: string;
  password: string;
}

const SignInModal = ({ isOpen, CloseModal }: IModal) => {
  const { t } = useTranslation('common');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email(`${t('not-email')}`)
      .min(3, `${t('r-min-3')}`)
      .max(50, `${t('r-max-50')}`)
      .required(`${t('r-email')}`),
    password: Yup.string().required(`${t('r-password')}`),
  });

  const onSubmit = async (values: ILogin, action: any) => {
    action.setSubmitting(true);
    try {
      const _values = {
        ...values,
        email: values?.email?.toLowerCase(),
      };
      dispatch(authActions.login(_values));
      action.setSubmitting(false);
    } catch (error) {
      setAuth(undefined);
      action.setSubmitting(false);
    }
  };

  const initialValues: ILogin = {
    email: '',
    password: '',
  };

  return (
    <Modal open={isOpen} onClose={CloseModal}>
      <Box sx={{ ...styleModal }}>
        <Box sx={{ position: 'absolute', top: '32px', right: '32px', display: 'flex' }}>
          <Button
            sx={{
              ...tabStyle,
              mr: 1.5,
            }}
          >
            {t('log-in')}
          </Button>
          <Button
            sx={{
              ...tabStyle,
            }}
            onClick={() => dispatch(authActions.openSignUpModal())}
          >
            {t('Register')}
          </Button>
        </Box>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 6, textAlign: 'center', color: '#333' }}
          >
            {t('log-in')}
          </Typography>
          <Formik
            initialValues={initialValues}
            validateOnBlur={false}
            validationSchema={SignInSchema}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {({ isSubmitting, dirty }) => (
              <Form>
                <FormControl sx={{ mb: 3, mt: 3 }} fullWidth>
                  <Field
                    as={FormTextField}
                    id="email"
                    name="email"
                    label="Email*"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#333' },
                    }}
                    sx={{
                      input: {
                        color: '#333',
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src={MailIcon} alt="icon" height={20} width={20} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name={`email`} />
                </FormControl>

                <FormControl sx={{ mb: 2 }} fullWidth>
                  <Field
                    as={FormTextField}
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    label={`${t('password')}*`}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                      style: { color: '#333' },
                    }}
                    sx={{
                      input: {
                        color: '#333',
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Image src={LockIcon} alt="icon" height={20} width={20} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            onClick={() => setShowPassword(!showPassword)}
                            color="warning"
                            size="small"
                          >
                            {!showPassword ? (
                              <Image src={EyeCloseIcon} alt="icon" height={24} width={24} />
                            ) : (
                              <Image src={EyeOpenIcon} alt="icon" height={24} width={24} />
                            )}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <ErrorMessage name={`password`} />
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'end', mb: 3 }}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => dispatch(authActions.openModalSendEmail())}
                    sx={{ py: 0, color: '#333' }}
                  >
                    {t('forgot-password')}
                  </Button>
                </Box>

                <Button
                  type={isSubmitting ? `button` : `submit`}
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    color: '#333',
                    background: 'linear-gradient(94.87deg, #FFB7E4 20.12%, #34DBEB 87.72%)',
                    textTransform: 'uppercase',
                    borderRadius: '100px',
                    mt: 1,
                    transition: 'all .4s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 4px 15px 0 rgba(236, 116, 149, 0.75)',
                    },
                  }}
                >
                  {isSubmitting ? `${t('log-in')}...` : `${t('log-in')}`}
                </Button>

                {/* <Box>
                <LoginWithSocial />
              </Box>
              
              </Box> */}
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignInModal;
