import Head from "next/head";
import Main from "../components/Main";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>downlader</title>
      </Head>
      <Header />
      <Main />
    </div>
  );
}
