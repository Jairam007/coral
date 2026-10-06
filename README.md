# Coral Interiors

A responsive interior-design studio website built with React, TypeScript, Vite, React Router, Tailwind CSS, Framer Motion, Lucide, React Hook Form and Zod.

## Getting started

```sh
npm install
npm run dev
```

The development server prints its local URL. To create and preview a production build:

```sh
npm run build
npm run preview
```

Run `npm run lint` for the ESLint checks.

## GitHub Pages

The site is deployed by the `Deploy to GitHub Pages` workflow. In the repository's
**Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**
so Pages serves the built `dist` artifact instead of the unbuilt source files.

## Structure

- `src/App.tsx` defines the routes and shared application shell.
- `src/components.tsx` contains the navigation, footer, SEO helper and reusable portfolio sections.
- `src/pages.tsx` contains the home page and route-level page experiences.
- `src/data.ts` centralizes project, service, journal, testimonial, FAQ, material and image data.
- `src/index.css` defines the design tokens and base styles; `src/App.css` and `src/social.css` contain the responsive component styles.
- `public/favicon.svg` is the Coral monogram.

Portfolio and editorial entries are sample content. Replace the centralized data and Unsplash image references with approved Coral Interiors photography and project information before launch. The consultation, contact and newsletter forms currently provide client-side validation and success states; connect them to the studio's chosen form or CRM service before accepting live enquiries.
