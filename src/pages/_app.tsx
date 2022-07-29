import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../contexts/AuthContext';
import { FormationProvider } from '../contexts/FormationContext';
import { TeamProvider } from '../contexts/TeamContext';
import { GlobalStyle } from '../styles/GlobalStyles';

import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TeamProvider>
          <FormationProvider>
            <GlobalStyle />
            <ToastContainer theme={"dark"} position="top-right" />
            <Component {...pageProps} />
          </FormationProvider>
        </TeamProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default MyApp
