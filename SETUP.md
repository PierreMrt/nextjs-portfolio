# Setup Guide

This guide will help you get the portfolio website up and running.

## 1. Initial Setup

### Install Dependencies
```bash
cd /home/merlito/Dev/portfolio
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- And other dependencies

### Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website in action.

## 2. Customization

### Update Personal Information

#### Experience
Edit `/data/experience.json`:
```json
[
  {
    "id": "1",
    "title": "Your Job Title",
    "company": "Your Company",
    "location": "Your Location",
    "startDate": "2021",
    "endDate": "Present",
    "description": "Your description",
    "responsibilities": ["Responsibility 1", "Responsibility 2"],
    "technologies": ["Tech 1", "Tech 2"]
  }
]
```

#### Education
Edit `/data/education.json`:
```json
[
  {
    "id": "1",
    "degree": "Your Degree",
    "institution": "Your University",
    "location": "Your Location",
    "startDate": "2018",
    "endDate": "2020",
    "description": "Your description"
  }
]
```

#### Skills
Edit `/data/skills.json`:
```json
{
  "technical": [
    {
      "category": "Category Name",
      "skills": ["Skill 1", "Skill 2"]
    }
  ],
  "soft": ["Communication", "Leadership"]
}
```

### Add New Projects

Create a new MDX file in `/content/projects/your-project.mdx`:

```mdx
---
title: "Your Project Title"
description: "Brief project description"
tags: ["Tag1", "Tag2"]
github: "https://github.com/yourname/project"
demo: "https://project-demo.com"
featured: true
---

## Project Overview

Your project description here...

## Features

- Feature 1
- Feature 2

## Technologies

- Tech 1
- Tech 2
```

### Update Contact Information

Edit `/app/contact/page.tsx` to update:
- Email address
- Phone number
- LinkedIn URL
- GitHub URL

Also update the metadata in `/app/layout.tsx` if needed.

## 3. Building for Production

```bash
npm run build
npm start
```

## 4. Deployment on Vercel

### Via Git (Recommended)

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab/Bitbucket

3. Go to [vercel.com](https://vercel.com)

4. Click "New Project"

5. Select your repository

6. Vercel will automatically detect Next.js and configure everything

7. Click "Deploy"

Your site will be live at a Vercel URL and you can configure a custom domain.

### Environment Variables (if needed)

If you add any API integrations, add environment variables in Vercel:
1. Go to your project settings
2. Click "Environment Variables"
3. Add your variables

## 5. Project Structure

```
portfolio/
├── app/                 # Next.js App Router
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── projects/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css
├── components/
│   ├── sections/       # Full page sections
│   └── ui/             # Reusable components
├── lib/                # Utilities and data fetching
├── data/               # JSON data files
├── content/            # MDX content
├── public/             # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 6. Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 7. Key Features

### ISR (Incremental Static Regeneration)
- Home page (`/`) revalidates every hour
- Projects page revalidates every hour
- Other pages are fully static

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Touch-friendly on all devices

### SEO Optimized
- Proper metadata on all pages
- Open Graph tags
- Structured data ready

### Dark Mode Ready
- CSS variables for easy theming
- Can be extended with dark mode toggle

## 8. Troubleshooting

### Port Already in Use
If port 3000 is in use:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Failures
Check TypeScript errors:
```bash
npx tsc --noEmit
```

## 9. Next Steps

1. Update all personal information in data files
2. Add your own projects as MDX files
3. Update images in `/public/images`
4. Add your CV to `/public/cv`
5. Test everything locally
6. Deploy to Vercel

## 10. Support

For issues or questions:
- Check the README.md file
- Review Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Review the code in the repository

Happy coding!
