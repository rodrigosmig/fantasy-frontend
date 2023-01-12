import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import store from 'store/createStore';
import { theme } from 'styles/theme';

function MyApp({ Component, ...pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  const {ToastContainer} = createStandaloneToast({theme: theme})
  
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>            
        <Component {...pageProps} />
        <ToastContainer />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp;