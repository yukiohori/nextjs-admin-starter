import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "src/lib/supabaseClient";
import Template from "src/components/templates/Template";
import { useEffect, useState } from "react";

const Dashboard: NextPage = () => {
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
    <div>
      <Head>
        <title>NextJS ADMIN STARTER</title>
        <meta name="description" content="NextJS ADMIN STARTER" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Template>
        {session && (
          <button
            onClick={() => {
              logOut();
            }}
          >
            {session.user.id} Sign out
          </button>
        )}
      </Template>
    </div>
  );
};

export default Dashboard;
