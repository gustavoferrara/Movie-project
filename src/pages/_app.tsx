import '@/styles/globals.scss';
import LayoutWrapper from '@/components/LayoutWrapper';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
};

export default MyApp;
