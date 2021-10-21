import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useUser from "src/hooks/useUser";

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
      <main className="w-full h-screen flex items-center justify-center">
        <h1>Login</h1>
        <div>
          {session ? (
            <button onClick={() => signOut()}>
              {user && user.fullname} サインアウト
            </button>
          ) : (
            <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
          )}
        </div>
      </main>
      <footer className="h-10 -mt-10 flex justify-center items-center bg-gray-700 text-white">
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
