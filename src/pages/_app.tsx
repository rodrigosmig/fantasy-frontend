import { Router } from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from 'store/context/AuthContext';
import { theme } from 'styles/theme';
import { PositionProvider } from 'store/context/PositionContext';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  
  return (
    <AuthProvider>
      <PositionProvider>
        {/* <JogadoresPosicoesProvider> */}
          <ChakraProvider theme={theme}>            
            <Component {...pageProps} />
          </ChakraProvider>

        {/* </JogadoresPosicoesProvider> */}
      </PositionProvider>
    </AuthProvider>
  )
}

export default MyApp