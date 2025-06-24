# Deploy Leighcon Website to Render - Step by Step Guide

## What You'll Need
- A GitHub account (free)
- A Render account (free)
- Your project files (we'll help you prepare these)

## Step 1: Prepare Your Project Files

Your project is already set up correctly! The key files are ready:
- `package.json` - Contains all dependencies
- Database connection via `DATABASE_URL` environment variable
- Build scripts configured

## Step 2: Create a GitHub Repository

1. Go to https://github.com
2. Click the green "New" button (or "+" icon)
3. Name your repository: `leighcon-website`
4. Make it **Public** (required for free Render plan)
5. Click "Create repository"

## Step 3: Upload Your Code to GitHub

### Option A: Using GitHub Web Interface (Easiest)
1. In your new GitHub repository, click "uploading an existing file"
2. Drag and drop ALL your project files except:
   - `node_modules` folder (if it exists)
   - `.env` files
   - Any `.tar.gz` files
3. Write commit message: "Initial Leighcon website upload"
4. Click "Commit changes"

### Option B: Using Git Commands (if you prefer)
```bash
git init
git add .
git commit -m "Initial Leighcon website upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/leighcon-website.git
git push -u origin main
```

## Step 4: Set Up Database on Render

1. Go to https://render.com and sign up/login
2. Click "New +" button
3. Select "PostgreSQL"
4. Fill in:
   - **Name**: `leighcon-database`
   - **Database**: `leighcon`
   - **User**: `leighcon`
   - **Region**: Choose closest to you
5. Click "Create Database"
6. **IMPORTANT**: Copy the "External Database URL" - you'll need this!

## Step 5: Deploy Your Website

1. In Render dashboard, click "New +" button
2. Select "Web Service"
3. Click "Connect" next to your GitHub repository
4. Fill in the deployment settings:

### Basic Info
- **Name**: `leighcon-website`
- **Region**: Same as your database
- **Branch**: `main`
- **Root Directory**: Leave empty

### Build & Deploy Settings
- **Runtime**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### Environment Variables (CRITICAL!)
Click "Add Environment Variable" and add:
- **Key**: `DATABASE_URL`
- **Value**: Paste the External Database URL from Step 4
- **Key**: `NODE_ENV`
- **Value**: `production`

5. Click "Create Web Service"

## Step 6: Wait for Deployment

- Render will automatically build and deploy your site
- This takes 5-10 minutes for the first deployment
- You'll see logs showing the build progress
- When complete, you'll get a URL like: `https://leighcon-website.onrender.com`

## Step 7: Set Up Your Database Tables

1. Once deployed, go to your Render database dashboard
2. Click "Connect" and copy the connection details
3. You'll need to run the database migration to create tables

### Option A: Using Render Shell (Recommended)
1. In your web service dashboard, click "Shell"
2. Run: `npm run db:push`

### Option B: Manual SQL (if needed)
Connect to your database and run the SQL commands to create the tables.

## Step 8: Test Your Website

1. Visit your Render URL
2. Check that:
   - Homepage loads correctly
   - Navigation works
   - Contact form works
   - Projects display properly

## Troubleshooting Common Issues

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Make sure `DATABASE_URL` is set correctly

### Database Connection Error
- Verify `DATABASE_URL` is correct
- Check that database tables exist
- Run `npm run db:push` in Render shell

### Site Loads But Features Don't Work
- Check browser console for errors
- Verify environment variables are set
- Check server logs in Render dashboard

## Updating Your Website

To update your website:
1. Make changes to your code
2. Upload/push changes to GitHub
3. Render automatically redeploys (takes 2-3 minutes)

## Cost Information

- **Free Plan Includes**:
  - 750 hours/month web service (enough for most small businesses)
  - PostgreSQL database with 1GB storage
  - Custom domain support
  - SSL certificates

- **Paid Plans** (if you need more):
  - $7/month for always-on service
  - More database storage
  - Better performance

## Your Website URLs

After deployment, your website will be available at:
- **Render URL**: `https://leighcon-website.onrender.com`
- **Custom Domain**: You can add your own domain in Render settings

## Need Help?

If you run into issues:
1. Check Render's build and runtime logs
2. Verify all environment variables are set
3. Make sure your GitHub repository has all necessary files
4. Contact Render support if needed

---

**Congratulations!** Your Leighcon construction website will be live on the internet! 🎉