import { useState } from 'react';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/lib/context';
import { Routes } from '@/lib/route/index';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import '@/styles/landingEffect.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const pathname = router.pathname as Routes;
  const isAuthPage = [Routes.LOGIN, Routes.SIGNUP].includes(pathname);
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <AuthProvider>
          {!isAuthPage && <Header />}
          <div className="custom-footer-height">
            <Component {...pageProps} />
          </div>
          {!isAuthPage && <Footer />}
        </AuthProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default App;
