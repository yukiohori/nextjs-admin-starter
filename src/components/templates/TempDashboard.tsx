import { useRouter } from 'next/router';
import bgImage from 'public/images/bg-image.jpg';
import { useCallback, useEffect, useState } from 'react';
import SideMenu from 'src/components/molecules/SideMenu';
import Footer from 'src/components/organisms/Footer';
import Header from 'src/components/organisms/Header';
import { supabase } from 'src/lib/supabaseClient';
import { FOOTER_TEXT } from 'src/utils/constants';

type Props = {
  children: React.ReactNode;
};

const TempDashboard = ({ children }: Props) => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

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

  const logOut = useCallback(() => {
    supabase.auth.signOut();
    router.push('/');
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="h-full"
    >
      <Header logOut={logOut} email={session?.user?.email ?? ''} />
      <SideMenu />
      <main className="relative w-full px-6 pt-24 pb-16">{children}</main>
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
