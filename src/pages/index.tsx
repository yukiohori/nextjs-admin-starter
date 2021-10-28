import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useUser from "src/hooks/useUser";
import Dashboard from "src/components/organisms/Dashboard";
import Footer from "src/components/organisms/Footer";

const Home: NextPage = () => {
  const router = useRouter();
  const { session, user, signOut, signInWithGithub } = useUser();

  return (
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen flex items-center justify-center overflow-hidden">
        {session ? (
          <button onClick={() => signOut()}>
            {user && user.fullname} Sign out
          </button>
        ) : (
          <Dashboard signInWithGithub={signInWithGithub} />
        )}
      </main>
      <Footer>
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by YUKI OHORI
        </a>
      </Footer>
    </div>
  );
};

export default Home;
