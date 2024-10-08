import { createClient } from '@supabase/supabase-js';

export type Database = {};

const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;