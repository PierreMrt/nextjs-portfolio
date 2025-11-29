# Next.js Portfolio

https://preview.themeforest.net/item/ryan-vcard-resume-cv-template/full_screen_preview/21584603
A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Built with Next.js App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🖼️ Optimized images with Next.js Image component

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
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



## Project Structure

``` text
nextjs-portfolio/
├── app/            # Next.js app directory
│ ├── layout.tsx    # Root layout
│ ├── page.tsx      # Home page
│ └── globals.css   # Global styles
├── components/     # React components
│ ├── layout/       # Layout components
│ └── sections/     # Page sections
├── data/           # Data files (JSON)
└── public/         # Static assets
```

## Customization

1. **Update personal information:** Edit the JSON files in the `data/` directory
2. **Modify colors:** Update the Tailwind config in `tailwind.config.ts`
3. **Change layout:** Modify components in `components/layout/`
4. **Update sections:** Edit components in `components/sections/`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PierreMrt/nextjs-portfolio)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
