import Header from "src/components/organisms/Header";
import Footer from "src/components/organisms/Footer";
import bgImage from "public/images/bg-image.jpg";
import { FOOTER_TEXT } from "src/utils/constants";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "src/lib/supabaseClient";

type Props = {
  children: React.ReactNode;
};

const TemplateDashboard = ({ children }: Props) => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
      } else {
        router.push("/");
      }
    });
  }, [router, session]);

  const logOut = () => {
    supabase.auth.signOut();
    router.push("/");
  };
  return (
    <>
      <Header>
        <div className="flex justify-between">
          <p>LOGO</p>
          {session && (
            <span className="cursor-pointer">
              <p onClick={logOut}>{session.user.email} LOGOUT</p>
            </span>
          )}
        </div>
      </Header>
      <main
        style={{ backgroundImage: `url(${bgImage.src})` }}
        className="relative w-full h-screen overflow-hidden"
      >
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
