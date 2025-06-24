# Leighcon Construction Website

## Overview

This is a full-stack construction company website built for Leighcon, a Melbourne-based construction company specializing in residential developments, dual occupancy projects, and rooming houses. The application combines a modern React frontend with a robust Node.js backend, using PostgreSQL for data persistence.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom design system and shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **File Uploads**: Multer middleware for handling image uploads
- **Session Management**: Express sessions with PostgreSQL store

### Database Design
- **Primary Database**: PostgreSQL (using Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**:
  - `projects`: Construction project portfolio data
  - `contact_submissions`: Contact form submissions
  - `users`: User authentication (basic structure)

## Key Components

### Project Management System
- **Portfolio Display**: Dynamic project galleries with category filtering
- **Image Upload**: Multi-file upload with preview and validation
- **Project Editor**: In-line editing capabilities for project details
- **Featured Projects**: Special highlighting system for showcase projects

### Contact System
- **Contact Form**: Validated form with multiple project type options
- **Submission Storage**: Database persistence of all contact inquiries
- **Email Integration**: Ready for SMTP integration (currently stores to database)

### Content Management
- **Testimonials**: Static testimonial data with rotating carousel
- **Company Customization**: Logo upload, color schemes, and branding options
- **Service Pages**: Static content with professional service descriptions

### File Management
- **Upload Directory**: Local file storage in `/uploads` directory
- **Image Processing**: File type validation and size limits
- **Static Serving**: Express middleware for serving uploaded files

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Processing**: Express routes handle requests with proper validation
3. **Database Operations**: Drizzle ORM executes type-safe database queries
4. **Response Handling**: JSON responses with proper error handling
5. **State Updates**: React Query manages cache invalidation and updates

## External Dependencies

### Database Provider
- **Neon Serverless PostgreSQL**: Cloud-hosted PostgreSQL with connection pooling
- **Connection**: Via `@neondatabase/serverless` driver

### UI Framework
- **Radix UI**: Accessible component primitives
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Replit Integration**: Configured for Replit development environment
- **Vite Plugins**: Runtime error overlay and development cartographer

## Deployment Strategy

### Environment Configuration
- **Development**: Local development with hot reloading via Vite
- **Production**: Built static files served by Express
- **Database**: Environment variable for DATABASE_URL configuration

### Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public`
2. **Backend Build**: ESBuild bundles server code to `/dist/index.js`
3. **Static Assets**: Uploaded files and built assets served by Express

### Hosting Options
- **Vercel**: Recommended for full-stack deployment
- **Render/Railway**: Node.js hosting with PostgreSQL add-ons
- **Traditional VPS**: Self-hosted with PM2 process management

### Required Environment Variables
```
DATABASE_URL=postgresql://connection_string
NODE_ENV=production
PORT=5000
```

## Recent Changes

- June 24, 2025: Implemented colorful Quality Assurance section design
- Added vibrant border colors: blue, purple, green, orange for each quality box
- Removed large grey container background for cleaner floating design
- Updated color scheme from bright blue to navy blue for professional appeal
- Icons and borders now use matching colors for visual consistency
- Quality Assurance section now displays individual white boxes with colored borders on navy background

## User Preferences

Preferred communication style: Simple, everyday language.