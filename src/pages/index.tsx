import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from 'src/components/atoms/Spinner';
import useUser from 'src/hooks/useUser';
import { supabase } from 'src/lib/supabaseClient';

import TemplateLogin from '@/components/templates/TemplateLogin';

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
        <title>Login | NAS</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TemplateLogin>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="mockup-code">
            <h1 className="mb-4 text-center text-2xl font-bold">LOGIN</h1>
            <div className="flex w-full items-center justify-center">
              <button
                onClick={() => {
                  loginWithGithub();
                }}
                className="btn btn-active"
              >
                LOGIN WITH GITHUB
              </button>
            </div>
          </div>
        )}
      </TemplateLogin>
    </div>
  );
};

export default Home;
