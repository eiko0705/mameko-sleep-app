import supabase from '../supabase';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const { data: authData } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    })

    return () => authData.subscription.unsubscribe();
  })
}

export default useAuth;