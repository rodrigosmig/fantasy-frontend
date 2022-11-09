import { Router } from 'next/router';
import NProgress from 'nprogress';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../components/Contexts/AuthContext';
import { theme } from '../styles/theme';
import { PositionProvider } from '../components/Contexts/PositionContext';
import { JogadoresPosicoesProvider } from '../components/Contexts/JogadoresPosicoesContext';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <PositionProvider>
          <JogadoresPosicoesProvider>
            <ChakraProvider theme={theme}>            
              <Component {...pageProps} />
            </ChakraProvider>

          </JogadoresPosicoesProvider>
        </PositionProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp