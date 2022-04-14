import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "src/lib//supabaseClient";
import type { UserType } from "src/types/UserType";

const useUser = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_: AuthChangeEvent, session: Session | null) => {
        if (session) {
          setSession(session);
        } else {
        }
      }
    );
    return () => {
      if (authListener) authListener.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const setupUser = async () => {
      if (session && session.user && session.user.id) {
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();
        setUser(user);
      }
    };
    setupUser();
  }, [session]);

  const signInWithGithub = () => {
    supabase.auth.signIn(
      { provider: "github" },
      { redirectTo: "http://localhost:3000/dashboard" }
    );
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return {
    session,
    user,
    signInWithGithub,
    signOut,
  };
};

export default useUser;
