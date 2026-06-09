import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug logging
console.log('🔍 Supabase URL:', supabaseUrl);
console.log('🔍 Supabase Key exists:', !!supabaseAnonKey);

// Create Supabase client (or dummy if credentials missing)
let supabaseClient: any;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials missing - using dummy client for UI testing');
  // Create a dummy client that won't crash the app
  supabaseClient = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: (callback: Function) => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signUp: async () => ({ error: { message: 'Supabase not configured' } }),
      signInWithPassword: async () => ({ error: { message: 'Supabase not configured' } }),
      signOut: async () => {},
    },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null, error: null }) }) }),
    }),
  };
} else {
  // Initialize Supabase client with proper configuration
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      // Enable auto-refresh of the access token
      autoRefreshToken: true,
      // Persist the session in localStorage
      persistSession: true,
      // Detect whether the user is online or offline
      detectSessionInUrl: true,
    },
    global: {
      // Add default headers for all requests
      headers: {
        'X-Client-Info': 'Glowpedia-App/1.0'
      }
    }
  });
  
  // Add error handling for auth state changes
  supabaseClient.auth.onAuthStateChange((event: string, session: any) => {
    console.log('Supabase auth state changed:', event, session?.user?.email);
  });
  
  console.log('✅ Supabase client created successfully');
}

export const supabase = supabaseClient;

// Database Types
export interface User {
  id: string;
  email: string;
  role: 'free' | 'pro';
  skin_type?: 'oily' | 'dry' | 'combination' | 'sensitive';
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'skincare' | 'cosmetics';
  subcategory: string;
  slug: string;
  image_url?: string;
  short_description: string;
  full_description: string;
  ingredients: string[];
  good_for: string[];
  avoid_if: string[];
  how_to_use: string;
  subtypes?: string[];
  top_picks: {
    brand: string;
    name: string;
    price_range: string;
    best_for: string;
    buy_url: string;
  }[];
  created_at: string;
}

export interface Comparison {
  id: string;
  product_a: string;
  product_b: string;
  description_a: string;
  description_b: string;
  comparison_table: {
    attribute: string;
    product_a_value: string;
    product_b_value: string;
  }[];
  verdict: string;
  created_at: string;
}

export interface Quiz {
  id: string;
  title: string;
  type: 'free' | 'pro';
  questions: {
    question: string;
    options: string[];
  }[];
  result_logic: any; // JSON field for result calculation
  created_at: string;
}

export interface Routine {
  id: string;
  user_id: string;
  name: string;
  steps: {
    label: string;
    order: number;
  }[];
  created_at: string;
  updated_at: string;
}

export interface RoutineCompletion {
  id: string;
  routine_id: string;
  user_id: string;
  date: string;
  steps_completed: number[];
  fully_completed: boolean;
  created_at: string;
}

export interface SavedProduct {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
}
