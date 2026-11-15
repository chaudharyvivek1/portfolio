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
  layout.jsx        metadata, viewport, theme bootstrap script, skip link
  page.jsx          section composition
  globals.css       Tailwind layers and custom utilities
  icon.svg          favicon
components/
  Nav.jsx           sticky header with theme toggle and mobile menu trigger
  MobileNav.jsx     hamburger menu for small screens (client component)
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

Everything the page renders lives in `data/content.js`:

- `profile` - name, role, contact details, hero headline (`headline` + `headlineAccent`),
  status badge and current role card.
- `navLinks` - header and mobile menu links.
- `sections` - the eyebrow, title and description of every section.
- `about` - the two About paragraphs and the quick-fact grid.
- `skills`, `experience`, `projects`, `education`, `certification` - the rest of the page.

Change it there, no component edits needed.

## Design notes

- Light and dark themes, toggled manually and remembered in `localStorage`;
  first visit follows the OS preference. No flash of the wrong theme, because the
  class is applied by a small inline script before paint.
- Colours are defined in `tailwind.config.js` (`ink`, `paper`, `accent`).
- Motion is limited to a short entrance animation, disabled under
  `prefers-reduced-motion`.
- Accessibility: skip link, visible focus rings, labelled nav landmarks and a
  keyboard-dismissable mobile menu (Escape).

## Environment

`NEXT_PUBLIC_SITE_URL` is optional. Set it (for example `https://vivekchaudhary.dev`)
on the host to emit absolute canonical and Open Graph URLs. Without it the build
and the page work exactly the same.

## Deploy

The site builds as a standard Next.js app. Vercel is the simplest target:
import the repo, keep the default build settings, deploy.

## To do

- [ ] Add `public/resume.pdf` and link it from the hero
- [ ] Add screenshots to the project cards
- [ ] Add a custom domain, then set `NEXT_PUBLIC_SITE_URL`
