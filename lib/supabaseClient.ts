import { createClient } from '@supabase/supabase-js';

// IMPORTANT: 
// 1. Create a project on Supabase: https://supabase.com/
// 2. Go to Project Settings > API and find your Project URL and anon public key.
// 3. Replace the placeholder values below with your actual Supabase credentials.

const supabaseUrl = 'YOUR_SUPABASE_URL'; // e.g. 'https://xyz.supabase.co'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL and Anon Key are required. Make sure to replace the placeholder values in `lib/supabaseClient.ts`.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
