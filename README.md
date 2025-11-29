# Pierre Merlet - Data Analyst Portfolio

A modern, responsive portfolio website built with Next.js 14, React 18, and Tailwind CSS. This website showcases Pierre Merlet's experience, projects, education, and skills as a data analyst.

## Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Fast Performance**: ISR (Incremental Static Regeneration) for optimal speed
- **MDX Projects**: Project details written in MDX for rich content
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Dark Mode Ready**: Extensible color scheme
- **Contact Form**: Integrated contact form for inquiries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for project descriptions
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
/app
  /about - About page
  /contact - Contact page
  /education - Education page
  /experience - Experience page
  /projects
    /[slug] - Dynamic project pages
  layout.tsx - Root layout
  page.tsx - Home page
  globals.css - Global styles

/components
  /ui - Reusable UI components
    ExperienceCard.tsx
    EducationCard.tsx
    ProjectCard.tsx
    ContactForm.tsx
  /sections - Page sections
    Navbar.tsx
    Hero.tsx
    Footer.tsx
    About.tsx
    Skills.tsx
    ExperiencePreview.tsx
    ProjectsPreview.tsx
    ContactCTA.tsx

/lib
  content.ts - Content fetching utilities
  utils.ts - Utility functions

/data
  experience.json - Experience data
  education.json - Education data
  skills.json - Skills data

/content/projects
  *.mdx - Project content files

/public
  /cv - PDF files
  /images - Image assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development

- Edit pages in `/app` directory
- Modify components in `/components` directory
- Update data in `/data` JSON files
- Add new projects as MDX files in `/content/projects`

## Building for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

The easiest way to deploy is on [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository into Vercel
3. Vercel automatically detects Next.js and configures the build settings
4. Your site will be live automatically

### Environment Variables

No environment variables are required for basic functionality. However, you may add:

- Email service variables (if integrating email functionality)
- Analytics tracking IDs
- API endpoints

## Customization

### Colors
Edit the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066CC',
  secondary: '#333333',
}
```

### Content
Update the following files with your information:
- `/data/experience.json` - Your work experience
- `/data/education.json` - Your education
- `/data/skills.json` - Your technical and soft skills
- `/content/projects/*.mdx` - Your projects

### Contact Form
The contact form currently logs to console. To enable email:
1. Integrate with email service (SendGrid, Mailgun, Resend, etc.)
2. Add environment variables
3. Update the `handleSubmit` function in `ContactForm.tsx`

## Pages

- **Home** (`/`) - Landing page with hero, about preview, experience, and featured projects
- **About** (`/about`) - Detailed about page with full skills breakdown
- **Experience** (`/experience`) - Complete professional experience timeline
- **Education** (`/education`) - Education history
- **Projects** (`/projects`) - All projects gallery
- **Project Details** (`/projects/[slug]`) - Individual project pages
- **Contact** (`/contact`) - Contact information and form

## Performance Optimizations

- **ISR**: Home page and projects page revalidate every hour
- **Static Generation**: About, experience, education, and contact pages are fully static
- **Image Optimization**: Configured for external images
- **Font Optimization**: Using Next.js Google Fonts integration

## SEO

All pages include proper:
- Meta descriptions
- Open Graph tags
- Title tags
- Keywords

## License

This project is part of Pierre Merlet's portfolio.

## Contact

- Email: merlet.pierre@outlook.com
- Phone: +33 6 61 26 36 90
- LinkedIn: [pierre-merlet](https://www.linkedin.com/in/pierre-merlet)
- GitHub: [PierreMrt](https://github.com/PierreMrt)
