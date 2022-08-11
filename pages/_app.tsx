import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>downlader</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/manifast.json" />
        <meta
          name="description"
          content="downlaod your favorite youtute videos faster"
        />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
