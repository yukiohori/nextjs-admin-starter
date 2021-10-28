import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useUser from "src/hooks/useUser";
import Dashboard from "src/components/organisms/Dashboard";

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
        <div className="p-4 rounded border flex flex-col items-center justify-center bg-gray-600 text-white">
          <h1>Login</h1>
          <div>
            {session ? (
              <button onClick={() => signOut()}>
                {user && user.fullname} サインアウト
              </button>
            ) : (
              <Dashboard signInWithGithub={signInWithGithub} />
            )}
          </div>
        </div>
      </main>
      <footer className="fixed left-0 w-full bottom-0 h-10 -mt-10 flex justify-center items-center bg-gray-700 text-white">
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
