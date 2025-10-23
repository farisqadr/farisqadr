# hemat.ai Landing Page Clone

A pixel-accurate reproduction of the [hemat.ai](https://hemat.ai/) marketing site, implemented with Next.js 14 (App Router) and Tailwind CSS. The page includes fully responsive layouts, locally hosted assets, interactive sections, and scroll-triggered animations.

## Tech Stack

- [Next.js 14](https://nextjs.org) with the App Router and TypeScript
- [React 18](https://react.dev)
- [Tailwind CSS 3](https://tailwindcss.com) with PostCSS & Autoprefixer
- [Framer Motion](https://www.framer.com/motion/) for interaction and entrance animations
- ESLint (Next.js core web vitals) & Prettier (+ Tailwind plugin) for linting/formatting

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page. The project uses hot module reloading, so any edits inside `src/` are reflected instantly.

## Available Scripts

| Command              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `npm run dev`        | Start the development server at `localhost:3000`.       |
| `npm run build`      | Create an optimized production build.                   |
| `npm run start`      | Serve the production build locally.                     |
| `npm run lint`       | Run ESLint with Next.js' core web vitals configuration. |
| `npm run format`     | Format the entire codebase with Prettier.               |
| `npm run type-check` | Run the TypeScript compiler in no-emission mode.        |

## Environment Variables

Create `.env.local` (or use the provided `.env.example`) to override the default site URL used for sitemap generation.

```bash
cp .env.example .env.local
```

| Variable               | Description                                                      | Default            |
| ---------------------- | ---------------------------------------------------------------- | ------------------ |
| `NEXT_PUBLIC_SITE_URL` | Absolute URL of the deployed site used by the sitemap generator. | `https://hemat.ai` |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout & metadata
│   ├── page.tsx          # Homepage composition
│   ├── robots.ts         # robots.txt metadata route
│   └── sitemap.ts        # sitemap metadata route
├── components/           # UI and section components
│   └── ...
└── data/content.ts       # Centralised content/data definitions
public/
├── hemat/                # Locally hosted images & SVG assets
└── og.png                # OpenGraph/Twitter preview image
```

## Assets & Accessibility

- All imagery and icons are stored in `public/` (no hotlinking).
- Typography uses Inter & Plus Jakarta Sans via `next/font` with `display: swap` and preloaded weights.
- Semantic HTML, focus states, and color contrast are implemented to meet WCAG AA guidelines.

## Deployment

The project is ready for one-click deployment on [Vercel](https://vercel.com/). Running `npm run build` produces an optimized bundle. Include any environment overrides via the Vercel dashboard if required (e.g. `NEXT_PUBLIC_SITE_URL`).
