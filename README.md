# kamiljaworski.pl

Personal portfolio website for [Kamil Jaworski](https://kamiljaworski.pl) - a .NET Software Engineer.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Deployed to [GitHub Pages](https://pages.github.com) with a custom domain.

## Features

- Minimalistic dark design
- Polish (default) and English versions with browser language detection
- Fully static - zero client-side JS framework
- SEO optimised: meta tags, Open Graph, JSON-LD structured data, sitemap, hreflang
- Contact form (Web3Forms + Cloudflare Turnstile)
- Cursor spotlight effect
- Responsive (mobile + desktop split layout)

## Commands

| Command             | Action                                   |
| :------------------ | :--------------------------------------- |
| `npm install`       | Install dependencies                     |
| `npm run dev`       | Start dev server at `localhost:4321`     |
| `npm run build`     | Build for production into `./dist/`      |
| `npm run preview`   | Preview the production build locally     |
| `npm run gen:favicon` | Regenerate `favicon.ico` from SVG      |
| `npm run gen:og`    | Regenerate `og-image.png` from SVG       |
