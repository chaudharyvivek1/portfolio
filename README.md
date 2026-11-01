# portfolio

Personal portfolio site for **Vivek Chaudhary** - Next.js / frontend developer, Ahmedabad.

Built with Next.js 14 (App Router), React 18 and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.jsx        metadata, theme bootstrap script
  page.jsx          section composition
  globals.css       Tailwind layers and custom utilities
  icon.svg          favicon
components/
  Nav.jsx           sticky header with theme toggle
  Hero.jsx          headline, status badge, current-role card
  About.jsx         summary and quick facts
  Skills.jsx        grouped skill chips
  Experience.jsx    work timeline
  Work.jsx          project cards
  Education.jsx     degree and certification
  Contact.jsx       contact links
  Footer.jsx
  SectionHeading.jsx
  ThemeToggle.jsx   light/dark switch (localStorage)
data/
  content.js        all site copy in one place
```

## Editing content

Everything the page renders lives in `data/content.js` - profile, skills, experience,
projects, education and certification. Change it there, no component edits needed.

## Design notes

- Light and dark themes, toggled manually and remembered in `localStorage`;
  first visit follows the OS preference.
- Colours are defined in `tailwind.config.js` (`ink`, `paper`, `accent`).
- Motion is limited to a short entrance animation, disabled under
  `prefers-reduced-motion`.

## Deploy

The site builds as a standard Next.js app. Vercel is the simplest target:
import the repo, keep the default build settings, deploy.

## To do

- [ ] Add `public/resume.pdf` and link it from the hero
- [ ] Add screenshots to the project cards
- [ ] Add a custom domain
