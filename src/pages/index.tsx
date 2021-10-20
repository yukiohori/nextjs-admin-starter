import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import NewsList from "src/components/NewsList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen flex items-center justify-center">
        <NewsList />
      </main>
      <footer className="h-10 -mt-10 flex justify-center items-center">
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by YUKI OHORI
        </a>
      </footer>
    </div>
  );
};

export default Home;
