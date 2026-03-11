# kamiljaworski.pl

Personal portfolio website for [Kamil Jaworski](https://kamiljaworski.pl) — a .NET Software Engineer.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deployed to [GitHub Pages](https://pages.github.com) with a custom domain.

## Features

- Minimalistic dark design inspired by [brittanychiang.com](https://brittanychiang.com)
- English and Polish versions (`/en/`, `/pl/`) — auto-detected from browser language, no cookies
- Fully static — zero client-side JS framework
- SEO-optimised: meta tags, Open Graph, JSON-LD structured data, sitemap, hreflang
- Cursor spotlight effect
- Responsive (mobile + desktop split layout)

## Commands

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Install dependencies                         |
| `npm run dev`   | Start dev server at `localhost:4321`         |
| `npm run build` | Build for production into `./dist/`          |
| `npm run preview` | Preview the production build locally       |

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on every push to `main`/`master`.

See `.github/workflows/deploy.yml` for the workflow.

### OVH DNS setup

To point `kamiljaworski.pl` at GitHub Pages, add these DNS records in your OVH control panel:

| Type  | Name | Value                   | TTL  |
| :---- | :--- | :---------------------- | :--- |
| A     | @    | 185.199.108.153         | 3600 |
| A     | @    | 185.199.109.153         | 3600 |
| A     | @    | 185.199.110.153         | 3600 |
| A     | @    | 185.199.111.153         | 3600 |
| CNAME | www  | kamiljaworski.github.io | 3600 |

Then in your GitHub repository: **Settings → Pages → Custom domain** → enter `kamiljaworski.pl` and enable **Enforce HTTPS**.
