/** ==========================================================================
 * OWNER: Member 4 (Database Configuration)
 * 
 * TASKS:
 * 1. Go to supabase.com, create a project, and get the URL and Anon Key.
 * 2. Replace the placeholder strings below.
 * ========================================================================== */

const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

// Initializes the client using the globally loaded script from index.html
export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);