# Dentora Dental Clinic

Single-page marketing site for a dental clinic, built with React 19, TypeScript, Vite, Tailwind CSS v4 and Motion.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
npm run lint     # run oxlint
```

## Structure

- `src/App.tsx` — page layout; composes the section components
- `src/components/` — one component per page section
- `src/index.css` — Tailwind import, theme tokens (`@theme`) and shared component classes
- `public/` — static assets (favicon, hero photo)

Appointment booking opens a Calendly popup (the widget script is loaded in `index.html`).
