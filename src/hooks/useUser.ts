import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import { supabase } from '@/lib//supabaseClient';
import type { UserType } from '@/types/UserType';
import { SUPABASE_REDIRECT } from '@/utils/constants';

const useUser = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_: AuthChangeEvent, sessionUser: Session | null) => {
        if (sessionUser) {
          setSession(sessionUser);
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
        const { data: userData } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setUser(userData);
      }
    };
    setupUser();
  }, [session]);

  const signInWithGithub = () => {
    supabase.auth.signIn(
      { provider: 'github' },
      { redirectTo: SUPABASE_REDIRECT }
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
