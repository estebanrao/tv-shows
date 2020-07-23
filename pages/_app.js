import Head from 'next/head';

import Header from '../components/header/header.component';

import '../styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TV Shows App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
