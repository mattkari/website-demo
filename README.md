# mattkari.github.io

Personal portfolio website for Matt Karimov, QA Automation Specialist & Senior
Automation Tester, built with Next.js 15, React 18, and Tailwind CSS.

**Live site:** https://mattkari.github.io

## Features

- Modern, responsive design
- Client-side navigation with smooth scrolling
- Professional profile, core technical skills, work experience, and education
- Contact form
- Mobile-friendly layout

## Tech Stack

- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Class Variance Authority** - Component variants

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Contact form

The contact form posts directly to [Web3Forms](https://web3forms.com) from the
browser, since the site is a static export with no backend. It needs an access
key, supplied as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`:

- **Locally:** add it to `.env.local` (gitignored).
- **In CI:** stored as the `WEB3FORMS_ACCESS_KEY` repository secret and injected
  at build time by `.github/workflows/nextjs.yml`.

Without the key the form renders in a disabled state pointing at the email
address, rather than silently discarding messages.

## Deployment

Pushes to `main` trigger `.github/workflows/nextjs.yml`, which builds a static
export (`output: 'export'` in `next.config.js`) and publishes it to GitHub Pages.

## Project Structure

- `src/app/` - Next.js app directory
- `src/components/` - React components
- `src/lib/` - Utility functions
- `public/` - Static assets

## Components

- Reusable UI components (Button, Card, Input, etc.)
- Responsive navigation
- Contact form
- Hero, about, skills, experience, education, and contact sections

## License

This project is for demonstration purposes.
