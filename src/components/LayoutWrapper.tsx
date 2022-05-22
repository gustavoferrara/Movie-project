import Head from 'next/head';

import Navbar from './Navbar';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div id='wrapper'>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default LayoutWrapper;
