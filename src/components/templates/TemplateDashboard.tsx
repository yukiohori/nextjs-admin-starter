import { useRouter } from 'next/router';
import bgImage from 'public/images/bg-image.jpg';
import { useEffect, useState } from 'react';
import Footer from 'src/components/organisms/Footer';
import Header from 'src/components/organisms/Header';
import { supabase } from 'src/lib/supabaseClient';
import { FOOTER_TEXT } from 'src/utils/constants';

type Props = {
  children: React.ReactNode;
};

const TemplateDashboard = ({ children }: Props) => {
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

  // const logOut = () => {
  //   supabase.auth.signOut();
  //   router.push('/');
  // };
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative h-screen w-full overflow-hidden"
      >
        <Header />
        {children}
      </main>
      <Footer>
        <a
          href="https://github.com/yukiohori"
          target="_blank"
          rel="noopener noreferrer"
        >
          {FOOTER_TEXT}
        </a>
      </Footer>
    </>
  );
};

export default TemplateDashboard;
