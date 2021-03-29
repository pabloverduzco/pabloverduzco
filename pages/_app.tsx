// Next
import Head from 'next/head';
import { AppProps } from 'next/app';

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
          href='https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Work+Sans:wght@400;700&display=swap'
          rel='print'
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLoad="this.media='all'"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
