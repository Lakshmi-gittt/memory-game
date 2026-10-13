/** ==========================================================================
 * OWNER: Member 4 (Database API Calls)
 * 
 * AI PROMPT / INSTRUCTIONS FOR GENERATION:
 * You are writing the Supabase database interactions for a vanilla JS game.
 * 
 * DATABASE SCHEMA CONTEXT:
 * Table name: 'leaderboard'
 * Columns: id (UUID), created_at (timestamp), nickname (text), moves (int), time_seconds (int), is_win (boolean).
 * 
 * REQUIRED EXPORTS:
 * 1. `export async function fetchTopScores()`: 
 *    - Uses Supabase client to select records from 'leaderboard'.
 *    - Only select rows where is_win is true.
 *    - Order by moves (ascending), then time_seconds (ascending).
 *    - Limit to top 10.
 *    - Return the array of records. Handle errors gracefully by returning an empty array if it fails.
 * 2. `export async function submitScore(nickname, moves, timeSeconds)`:
 *    - Uses Supabase client to insert a new row into 'leaderboard'.
 *    - is_win is true by default.
 *    - Return true if successful, false if error.
 * ========================================================================== */

import { supabase } from './supabase-client.js';

// Write and export your async database functions below