import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import SideMenu from 'src/components/molecules/SideMenu';
import { supabase } from 'src/lib/supabaseClient';
import { FOOTER_TEXT } from 'src/utils/constants';

import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import useUser from '@/hooks/useUser';

import Spinner from '../atoms/Spinner';

type Props = {
  children: React.ReactNode;
};

const TempDashboard = ({ children }: Props) => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const { signInWithGithub } = useUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGithub = () => {
    setIsLoading(true);
    signInWithGithub();
  };

  const logOut = useCallback(() => {
    supabase.auth.signOut();
    router.push('/');
  }, []);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, sessionData) => {
      if (sessionData) {
        setSession(sessionData);
      } else {
        router.push('/');
      }
    });
  }, [router, session]);

  const Login = () => {
    return isLoading ? (
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
    );
  };

  return (
    <div className="h-full bg-gray-700/30">
      {session && (
        <>
          <Header logOut={logOut} email={session?.user?.email ?? ''} />
          <SideMenu />
        </>
      )}
      {session ? (
        <main className="relative w-full px-6 pt-24 pb-16">
          <div className="mockup-window border bg-base-300 px-6 py-6">
            {children}
          </div>
        </main>
      ) : (
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <Login />
        </div>
      )}
      <Footer>
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FOOTER_TEXT}
        </a>
      </Footer>
    </div>
  );
};

export default TempDashboard;
