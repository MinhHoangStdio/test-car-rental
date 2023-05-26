import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./Footer'));
const Navbar = dynamic(() => import('./Navbar'), {
  ssr: false,
});
import { authActions } from '@/store/auth/authSlice';
import SignInModal from '@/contents/auth/SignInModal';
import SignUpModal from '@/contents/auth/SignUpModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import VerifyCode from '@/contents/auth/ForgotPassword/VerifyCode';
import SendEmail from '@/contents/auth/ForgotPassword/SendEmail';
import ResetPassword from '@/contents/auth/ForgotPassword/ResetPassword';

export default function MyLayout({ children }: any) {
  const modalSignIn = useAppSelector((state) => state.auth.modalSignIn);
  const modalSignUp = useAppSelector((state) => state.auth.modalSignUp);

  const modalSendEmail = useAppSelector((state) => state.auth.modalSendEmail);
  const modalVerifyCode = useAppSelector((state) => state.auth.modalVerifyCode);
  const modalResetPassword = useAppSelector((state) => state.auth.modalResetPassword);

  const dispatch = useAppDispatch();
  return (
    <>
      <Navbar />
      {children}
      <SignInModal
        isOpen={modalSignIn.isOpen}
        CloseModal={() => dispatch(authActions.closeSignInModal())}
      />
      <SignUpModal
        isOpen={modalSignUp.isOpen}
        CloseModal={() => dispatch(authActions.closeSignUpModal())}
      />
      <SendEmail
        isOpen={modalSendEmail.isOpen}
        CloseModal={() => dispatch(authActions.closeModalSendEmail())}
      />
      <VerifyCode
        isOpen={modalVerifyCode.isOpen}
        CloseModal={() => dispatch(authActions.closeModalVerifyCode())}
      />
      <ResetPassword
        isOpen={modalResetPassword.isOpen}
        CloseModal={() => dispatch(authActions.closeModalResetPassword())}
      />
      <Footer />
    </>
  );
}
