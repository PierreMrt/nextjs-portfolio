# Next.js Data Scientist Portfolio

A modern, multilingual portfolio website built with Next.js 16, featuring dark mode support and internationalization (i18n) for English, French, and Italian.

## 🌟 Features

### Multilingual Support (i18n)
- **3 Languages**: English, French, and Italian
- **Dynamic Language Switching**: Click on language flags to instantly switch between languages
- **Locale-Based Routing**: Each language has its own URL path (`/en`, `/fr`, `/it`)
- **Fully Translated Content**: All UI labels, professional experience, projects, education, and skills are translated

### Dark/Light Mode
- **Theme Toggle**: Switch between light and dark themes with a single click
- **Persistent Preference**: Your theme choice is saved in localStorage
- **Smooth Transitions**: Seamless color transitions between themes

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Collapsible Mobile Menu**: Profile section collapses on mobile for better UX
- **Adaptive Sidebar**: Horizontal navigation on mobile, vertical on desktop

### Interactive Sections
- **About**: Personal introduction with technical and soft skills
- **Experience**: Professional work history with detailed responsibilities
- **Education**: Academic background with course details
- **Projects**: Featured data science projects with live demos and GitHub links
- **Contact**: Multiple contact methods with interactive cards


## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

``` text
nextjs-portfolio/
├── app/
│ ├── [locale]/ # Locale-based routing
│ │ ├── layout.tsx # Main layout with providers
│ │ └── page.tsx # Homepage
│ ├── globals.css # Global styles
│ └── layout.tsx # Root layout
├── components/
│ ├── layout/
│ │ ├── ProfileCard.tsx # Profile with language switcher
│ │ ├── Sidebar.tsx # Navigation sidebar
│ │ └── ContentPanel.tsx # Main content area
│ ├── sections/
│ │ ├── AboutSection.tsx
│ │ ├── ExperienceSection.tsx
│ │ ├── EducationSection.tsx
│ │ ├── ProjectsSection.tsx
│ │ └── ContactSection.tsx
│ ├── ThemeProvider.tsx # Dark/light mode context
│ ├── Providers.tsx # Combined providers wrapper
│ └── AnimatedBackground.tsx
├── contexts/
│ └── LanguageContext.tsx # i18n context and logic
├── hooks/
│ └── useTranslation.ts # Translation hook
├── data/
│ ├── en/ # English data files
│ │ ├── experience.json
│ │ ├── projects.json
│ │ ├── education.json
│ │ └── skills.json
│ ├── fr/ # French data files
│ │ ├── experience.json
│ │ ├── projects.json
│ │ ├── education.json
│ │ └── skills.json
│ └── it/ # Italian data files
│ ├── experience.json
│ ├── projects.json
│ ├── education.json
│ └── skills.json
├── locales/
│ ├── en.json # English UI translations
│ ├── fr.json # French UI translations
│ └── it.json # Italian UI translations
├── middleware.ts # Locale detection and routing
└── public/
└── images/
└── profile.jpg
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:

``` bash 
git clone https://github.com/PierreMrt/nextjs-portfolio.git
cd nextjs-portfolio
```

2. Install dependencies:

``` bash 
npm install
``` 

3. Run the development server:

``` bash 
npm run dev
``` 

4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🎨 Customization

### Changing Colors

Edit the color scheme in `tailwind.config.ts` and update the lime accent color:

``` code
colors: {
    lime: {
        // Your custom color palette
    }
}
```

### Adding New Sections

1. Create component in `components/sections/`
2. Add translation keys to `locales/*.json`
3. Create data files in `data/{locale}/` if needed
4. Import and use in `components/layout/ContentPanel.tsx`

### Modifying Theme

The theme is managed by `ThemeProvider.tsx`:
- Light/dark mode toggle in Sidebar
- Persisted in localStorage
- CSS classes: `dark:` prefix for dark mode styles

## 📝 Content Management

All content is stored in JSON files for easy updates:

### Profile Information
- Edit `components/layout/ProfileCard.tsx`
- Update `locales/{locale}.json` for name/title translations

### Professional Experience
- Edit `data/{locale}/experience.json`
- Each entry includes: title, company, dates, description, responsibilities, technologies

### Projects
- Edit `data/{locale}/projects.json`
- Each project includes: title, description, technologies, GitHub link, highlights

### Education
- Edit `data/{locale}/education.json`
- Each entry includes: degree, institution, dates, description

### Skills
- Edit `data/{locale}/skills.json`
- Organized by technical categories and soft skills


## 🚀 Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspired from [RyanCV](https://ryancv.bslthemes.com/)
