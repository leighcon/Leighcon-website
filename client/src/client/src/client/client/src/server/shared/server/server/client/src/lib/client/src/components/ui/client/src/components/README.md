# Leighcon Construction Website

A modern, professional construction company website built with React, TypeScript, Node.js, and PostgreSQL.

## About Leighcon

Melbourne's premier construction company specializing in:
- Residential developments
- Dual occupancy projects
- Rooming house construction
- Luxury home building

Built to inspire - Creating exceptional spaces that define modern living.

## Deployment on Render

### Step 1: Database Setup
1. Go to Render Dashboard
2. Click New + then PostgreSQL
3. Fill in database details:
   - Name: leighcon-db
   - Database: leighcon
   - User: leighcon
4. Click Create Database
5. Copy the External Database URL for later use

### Step 2: Web Service Deployment
1. Click New + then Web Service
2. Connect your GitHub repository: Leighcon-website
3. Configure deployment settings:
   - Name: leighcon-website
   - Environment: Node
   - Build Command: npm install && npm run build
   - Start Command: npm start
   - Instance Type: Free

### Step 3: Environment Variables
In the Environment section, add:
- Key: DATABASE_URL Value: Your PostgreSQL External URL from Step 1
- Key: NODE_ENV Value: production

### Step 4: Deploy
1. Click Create Web Service
2. Wait for the build and deployment to complete
3. Your website will be available at: https://leighcon-website.onrender.com

### Step 5: Database Migration
After deployment, run database migration:
1. Go to your web service dashboard
2. Open the Shell tab
3. Run: npm run db:push

## Tech Stack

Frontend: React 18, TypeScript, TailwindCSS, Vite
Backend: Node.js, Express, PostgreSQL, Drizzle ORM

## Features

- Responsive Design
- Project Portfolio
- Contact Forms
- Image Uploads
- SEO Optimized

Built by Leighcon Construction - Melbourne's trusted building partner since 2015.
