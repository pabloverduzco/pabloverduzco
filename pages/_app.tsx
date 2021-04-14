// Next
import Head from 'next/head';
import type { AppProps } from 'next/app';

// Components
import Navbar from 'components/navbar';

import 'styles/globals.css';

export default function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Pablo Verduzco</title>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
