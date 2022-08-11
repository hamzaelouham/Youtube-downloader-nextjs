import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>downlader</title>
        <meta
          name="description"
          content="downlaod your favorite youtute videos faster"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
