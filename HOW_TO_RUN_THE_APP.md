# How to Run Your Glowpedia App - Simple Explanation

## 🤔 What's Happening?

Think of your app like a restaurant:
- **The code** = The recipe
- **The dev server** = The kitchen that cooks the food
- **The browser** = Where you eat the food (see the website)

Right now, the kitchen needs to be restarted because we changed an ingredient (the Supabase URL).

---

## 📚 Terms Explained

### **Terminal**
- The black/white text window in VS Code (usually at the bottom)
- It's where you type commands to tell the computer what to do
- Like a text-based remote control for your computer

### **Dev Server**
- A program that runs your website locally on your computer
- It watches your code and automatically updates the website when you make changes
- It's like a preview mode before you publish to the real internet

### **`cd frontend`**
- `cd` = "Change Directory" (like opening a folder)
- `frontend` = The folder where your React app code lives
- Together: "Go into the frontend folder"

### **`npm run dev`**
- `npm` = Node Package Manager (a tool for running JavaScript projects)
- `run dev` = Run the development server
- Together: "Start the preview server so I can see my website"

### **Current Server**
- The dev server that's already running from before
- It started with the OLD Supabase URL (the broken one)
- That's why the page is blank - it's using old settings

---

## ✅ What You Need to Do (Step-by-Step)

### Step 1: Stop the Current Server

**In VS Code:**
1. Look at the bottom of your screen - you should see a panel with tabs like "TERMINAL", "OUTPUT", "DEBUG CONSOLE"
2. Click on the **TERMINAL** tab
3. You'll see text that says something like:
   ```
   VITE v8.0.14  ready in 350 ms
   ➜  Local:   http://localhost:5174/
   ```
4. **Click inside that terminal window** (so it's active)
5. **Press `Ctrl + C`** on your keyboard (or `Cmd + C` on Mac)
   - This stops the server
   - You'll see the blinking cursor come back

### Step 2: Start the Server Again (with the fixed settings)

**⚠️ IMPORTANT: Don't copy-paste! Type it yourself or it won't work.**

**Still in the terminal:**
1. **Click inside the terminal** so you see a blinking cursor
2. **Type these two commands** (type them, don't copy):
   
   First command:
   ```
   cd frontend
   ```
   Press **Enter**
   
   Then second command:
   ```
   npm run dev
   ```
   Press **Enter**

3. Wait 2-5 seconds
4. You'll see:
   ```
   VITE v8.0.14  ready in XXX ms
   ➜  Local:   http://localhost:5174/
   ```

**Why type instead of copy?** When you copy-paste from this document, it includes invisible formatting characters that confuse the terminal. Typing it yourself avoids this problem.

### Step 3: Open the Website

1. Look for the URL in the terminal: `http://localhost:5174/`
2. **Hold `Ctrl` (or `Cmd` on Mac) and click on that link**
   - OR copy it and paste it into your browser
3. The website should now load!

---

## 🎯 What You Should See

If it works, you'll see:
- **"Welcome to Glowpedia"** as a big heading
- **"Sign up"** and **"Log in"** buttons
- A card showing "✅ Authentication System Working!"
- A yellow card saying "🚧 Coming Next"

---

## 🆘 If It Still Doesn't Work

### Check 1: Is the terminal in the right folder?
The terminal should show something like:
```
/workspaces/build-2-0-claude-ubeshake-41/frontend $
```

If it doesn't, type:
```bash
cd /workspaces/build-2-0-claude-ubeshake-41/frontend
```

### Check 2: Are there error messages?
Look in the terminal for red text or error messages. If you see any, copy them and share them with me.

### Check 3: Is the browser showing errors?
1. In your browser, press **F12** (opens Developer Tools)
2. Click the **Console** tab
3. Look for red error messages
4. Share them with me if you see any

---

## 🔄 Quick Reference

**To stop the server:**
- Click in terminal → Press `Ctrl + C`

**To start the server:**
- Type: `cd frontend && npm run dev` → Press Enter

**To see the website:**
- Open: http://localhost:5174/

---

## 💡 Why Did This Happen?

The `.env` file contains settings that the app reads when it starts. When I fixed the Supabase URL, the server was already running with the old URL loaded into memory. Restarting the server makes it read the new, correct URL.

It's like if you changed a recipe while the chef was already cooking - they need to start over with the new recipe!

---

Let me know if you need help with any of these steps! 🚀
