import { appWithTranslation } from 'next-i18next';
import MyLayout from '@/components/layouts';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import theme from '../utils/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <DefaultSeo
        title={`Theraisedhands`}
        description={`Theraisedhands Online Classes Web Application`}
        openGraph={{
          title: 'Theraisedhands',
          description: 'Theraisedhands Online Classes Web Application',
          images: [{ url: `` }],
          site_name: 'theraisedhands.com',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MyLayout>
            <CssBaseline />
            <Component {...pageProps} />
            <ToastContainer />
          </MyLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default appWithTranslation(App);
