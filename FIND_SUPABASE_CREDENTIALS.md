# How to Find Your Supabase Credentials

## Quick Visual Guide

Here's exactly where to find your Project URL and Anon Key in the Supabase dashboard:

---

## Step-by-Step Instructions

### 1. Go to Your Supabase Dashboard
- Open https://supabase.com
- Log in to your account
- You should see your project listed (e.g., "glowpedia")
- **Click on your project** to open it

### 2. Navigate to Settings
Once you're in your project:
- Look at the **left sidebar**
- Scroll down to the bottom
- Click on the **⚙️ Settings** icon (it looks like a gear/cog)

### 3. Click on "API" in Settings
- In the Settings menu, you'll see several options
- Click on **"API"** (should be near the top of the settings list)

### 4. Find Your Credentials

You'll now see a page with your API credentials. Look for these two sections:

#### **Project URL** (at the top)
```
Configuration > URL
```
It will look like:
```
https://abcdefghijklmnop.supabase.co
```
**Copy the entire URL** (including `https://`)

#### **API Keys** (below the URL)
You'll see a section called "Project API keys" with two keys:

1. **anon public** ← This is the one you need!
2. service_role (ignore this one)

The **anon public** key is a long string that looks like:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjE2MTYxNiwiZXhwIjoxOTMxNzM3NjE2fQ.abcdefghijklmnopqrstuvwxyz1234567890
```

**Click the copy icon** next to it (or select all and copy)

---

## Visual Reference

```
Supabase Dashboard
├── Your Project (click to open)
│   ├── Table Editor
│   ├── SQL Editor
│   ├── Database
│   ├── Authentication
│   ├── Storage
│   ├── Functions
│   └── ⚙️ Settings  ← CLICK HERE
│       ├── General
│       ├── API  ← THEN CLICK HERE
│       │   ├── Configuration
│       │   │   └── URL: https://xxx.supabase.co  ← COPY THIS
│       │   └── Project API keys
│       │       ├── anon public: eyJhbG...  ← COPY THIS
│       │       └── service_role: eyJhbG...  (don't use this)
│       ├── Database
│       ├── Auth
│       └── Storage
```

---

## What to Do Next

Once you have both values:

1. **Create a `.env` file** in the `frontend` folder:
   ```
   /workspaces/build-2-0-claude-ubeshake-41/frontend/.env
   ```

2. **Add your credentials** to the file:
   ```env
   VITE_SUPABASE_URL=https://your-actual-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here
   ```

3. **Replace** `your-actual-project-id` and `your-actual-key-here` with the values you copied

4. **Save the file**

5. **Let me know** and I'll continue building!

---

## Still Can't Find It?

If you're still having trouble:

1. **Make sure your project is fully created**
   - After creating a project, Supabase takes 1-2 minutes to provision it
   - You should see a green "Active" status on your project

2. **Try refreshing the page**
   - Sometimes the dashboard needs a refresh

3. **Check you're in the right project**
   - If you have multiple projects, make sure you clicked into the correct one

4. **Screenshot and share**
   - If you're still stuck, take a screenshot of what you see and I can help guide you

---

## Security Note

✅ The **anon public** key is safe to use in your frontend code
❌ Never use the **service_role** key in frontend code (it has admin access)

The `.env` file is already in `.gitignore`, so your credentials won't be committed to GitHub.
