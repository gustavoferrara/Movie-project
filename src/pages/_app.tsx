import '@/styles/globals.scss';
import LayoutWrapper from '@/components/LayoutWrapper';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const routeChange = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions.
      // Issue:
      // https://github.com/vercel/next.js/issues/17464

      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach(elem => {
        elem.removeAttribute('media');
      });
    };

    router.push(router.pathname);
    router.events.on('beforeHistoryChange', routeChange);
    router.events.on('routeChangeComplete', routeChange);
    router.events.on('routeChangeStart', routeChange);
  }, []);

  return (
    <LayoutWrapper>
      <Component {...pageProps} key={router.route} />
    </LayoutWrapper>
  );
};

export default MyApp;
