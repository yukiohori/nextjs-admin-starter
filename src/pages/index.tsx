import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'src/components/atoms/Button';
import Spinner from 'src/components/atoms/Spinner';
import Template from 'src/components/templates/Template';
import useUser from 'src/hooks/useUser';
import { supabase } from 'src/lib/supabaseClient';

const Home: NextPage = () => {
  const router = useRouter();
  const { signInWithGithub } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (supabase.auth.session()) {
      router.push('/dashboard');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const loginWithGithub = () => {
    setIsLoading(true);
    signInWithGithub();
  };

  return (
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="z-10 rounded bg-white/50 p-4">
            <h1 className="mb-4 text-center font-bold text-gray-600">LOGIN</h1>
            <Button
              label="LOGIN WITH GITHUB"
              textFormat="text-gray-600 font-bold"
              borderFormat="rounded-md border-2 border-gray-600"
              onClick={() => loginWithGithub()}
            />
          </div>
        )}
      </Template>
    </div>
  );
};

export default Home;
