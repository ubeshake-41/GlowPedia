# Supabase Setup Guide for Glowpedia

Follow these steps to set up Supabase for Glowpedia's backend.

---

## Step 1: Create a Supabase Account

1. Go to **https://supabase.com**
2. Click **"Start your project"** or **"Sign Up"**
3. Sign up with GitHub, Google, or email
4. Verify your email if required

---

## Step 2: Create a New Project

1. Once logged in, click **"New Project"**
2. Fill in the project details:
   - **Name**: `glowpedia` (or any name you prefer)
   - **Database Password**: Create a strong password (save this somewhere safe!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Select **Free** (perfect for development)
3. Click **"Create new project"**
4. Wait 1-2 minutes for the project to be provisioned

---

## Step 3: Get Your API Credentials

Once your project is ready:

1. In the Supabase dashboard, click on **"Settings"** (gear icon in the left sidebar)
2. Click **"API"** in the settings menu
3. You'll see two important values:

### Project URL
```
https://your-project-id.supabase.co
```
Copy this entire URL.

### Anon/Public Key
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```
Copy this long string (it's safe to use on the frontend).

---

## Step 4: Add Credentials to Your Project

1. In VS Code, navigate to `/workspaces/build-2-0-claude-ubeshake-41/frontend/`
2. Create a new file called `.env` (note the dot at the start)
3. Add your credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Replace the values with your actual credentials from Step 3.

**Important:** The `.env` file is already in `.gitignore`, so your credentials won't be committed to GitHub.

---

## Step 5: Set Up Database Tables

Now we need to create the database tables for Glowpedia.

1. In Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL script:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'free' CHECK (role IN ('free', 'pro')),
  skin_type TEXT CHECK (skin_type IN ('oily', 'dry', 'combination', 'sensitive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('skincare', 'cosmetics')),
  subcategory TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  ingredients TEXT[] NOT NULL,
  good_for TEXT[] NOT NULL,
  avoid_if TEXT[] NOT NULL,
  how_to_use TEXT NOT NULL,
  subtypes TEXT[],
  top_picks JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Comparisons table
CREATE TABLE public.comparisons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_a TEXT NOT NULL,
  product_b TEXT NOT NULL,
  description_a TEXT NOT NULL,
  description_b TEXT NOT NULL,
  comparison_table JSONB NOT NULL,
  verdict TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quizzes table
CREATE TABLE public.quizzes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('free', 'pro')),
  questions JSONB NOT NULL,
  result_logic JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Routines table
CREATE TABLE public.routines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  steps JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Routine completions table
CREATE TABLE public.routine_completions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  routine_id UUID REFERENCES public.routines(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  steps_completed INTEGER[] NOT NULL,
  fully_completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(routine_id, user_id, date)
);

-- Saved products table
CREATE TABLE public.saved_products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.routine_completions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_products ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users: Users can read their own data
CREATE POLICY "Users can read own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Products: Public read access
CREATE POLICY "Products are publicly readable" ON public.products
  FOR SELECT USING (true);

-- Comparisons: Public read access
CREATE POLICY "Comparisons are publicly readable" ON public.comparisons
  FOR SELECT USING (true);

-- Quizzes: Public read access
CREATE POLICY "Quizzes are publicly readable" ON public.quizzes
  FOR SELECT USING (true);

-- Routines: Users can CRUD their own routines
CREATE POLICY "Users can read own routines" ON public.routines
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own routines" ON public.routines
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own routines" ON public.routines
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own routines" ON public.routines
  FOR DELETE USING (auth.uid() = user_id);

-- Routine completions: Users can CRUD their own completions
CREATE POLICY "Users can read own completions" ON public.routine_completions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own completions" ON public.routine_completions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own completions" ON public.routine_completions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own completions" ON public.routine_completions
  FOR DELETE USING (auth.uid() = user_id);

-- Saved products: Users can CRUD their own saved products
CREATE POLICY "Users can read own saved products" ON public.saved_products
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own saved products" ON public.saved_products
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved products" ON public.saved_products
  FOR DELETE USING (auth.uid() = user_id);

-- Function to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, role)
  VALUES (NEW.id, NEW.email, 'free');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to automatically create user profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

4. Click **"Run"** (or press Ctrl/Cmd + Enter)
5. You should see "Success. No rows returned" - this is correct!

---

## Step 6: Configure Email Authentication

1. In Supabase dashboard, go to **"Authentication"** → **"Providers"**
2. Make sure **"Email"** is enabled (it should be by default)
3. Scroll down to **"Email Templates"**
4. You can customize the email verification template later if you want

---

## Step 7: Test the Connection

Once you've added your `.env` file with credentials, I'll build the authentication system and we can test it!

---

## ✅ Checklist

- [ ] Created Supabase account
- [ ] Created new project
- [ ] Copied Project URL
- [ ] Copied Anon Key
- [ ] Created `.env` file in `/frontend/` folder
- [ ] Added credentials to `.env`
- [ ] Ran SQL script to create tables
- [ ] Confirmed email auth is enabled

---

## 🆘 Troubleshooting

**"Can't find my API credentials"**
- Go to Settings → API in your Supabase dashboard

**"SQL script failed"**
- Make sure you copied the entire script
- Try running it in smaller chunks if needed

**"Project is taking too long to provision"**
- This is normal, can take 1-2 minutes
- Refresh the page if it's been more than 5 minutes

---

Once you've completed these steps, let me know and I'll continue building the authentication system!
