# 🌸 Mama Bloom — Pregnancy Tools

A calm, fast, **installable** pregnancy companion: a due-date calculator, a
40-week week-by-week tracker, and a small suite of friendly tools — built with
[Astro](https://astro.build), deployed on **Cloudflare Pages**, and shipped as a
**Progressive Web App** that works offline.

It started life as a single beautiful due-date calculator and grew into a full
content hub designed for organic search traffic.

## ✨ Features

- **Due Date Calculator** — three methods: last period, conception, IVF transfer,
  with a one-tap **shareable milestone card** (Web Share API + canvas).
- **Week-by-week tracker** — all 40 weeks, each its own SEO page with baby size,
  symptoms, development and a tip.
- **8 calculators** — due date, how-far-along, conception date, ovulation,
  hCG doubling, weight gain (IOM ranges), Chinese gender predictor (for fun),
  and a private contraction timer.
- **My Pregnancy dashboard** — enter your dates once and get a personal home base
  (current week, countdown, this-week size) plus optional **weekly reminders**.
- **Guides** — a Markdown-powered blog (content collection) ready to grow.
- **PWA** — installable, offline-first via Workbox, app shortcuts, maskable icons,
  and weekly milestone notifications.
- **SEO-ready** — sitemap, canonical URLs, Open Graph + Twitter cards, JSON-LD
  structured data (WebApplication, Article, FAQ, Breadcrumbs).
- **Privacy-first** — every calculation runs in the browser; personal data never
  leaves the device.

## 🧱 Tech stack

| | |
|---|---|
| Framework | Astro 5 (static output) |
| PWA | `@vite-pwa/astro` (Workbox `generateSW`) |
| SEO | `@astrojs/sitemap` + custom `<Seo>` component |
| Icons | generated from SVG with `sharp` |
| Hosting | Cloudflare Pages |

## 🚀 Getting started

```bash
npm install
npm run dev          # http://localhost:4321
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run gen:icons` | Regenerate PWA icons + the social card from SVG |

## ☁️ Deploying to Cloudflare Pages

**Option A — connect the repo (recommended):** in the Cloudflare dashboard,
create a Pages project from this repo with:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variable:** `SITE_URL=https://your-domain.com` (so canonical
  URLs, the sitemap and Open Graph tags use your real domain)

**Option B — direct upload with Wrangler:**

```bash
npm run build
npx wrangler pages deploy dist --project-name=pregnancy-tools
```

`wrangler.toml`, `public/_headers` (security + caching headers) and
`public/robots.txt` are already configured.

> After deploying, update `site.url` in `src/data/site.ts` (or set the `SITE_URL`
> env var) and the `Sitemap:` line in `public/robots.txt` to your production
> domain.

## 🗂️ Project structure

```
src/
├─ components/
│  ├─ calculators/        # DueDate, Ovulation, Hcg, WeightGain, ContractionTimer
│  ├─ Header / Footer / Seo / ToolCard / WeekCard / ToolShell
├─ content/blog/          # Markdown guides (content collection)
├─ data/
│  ├─ site.ts             # brand, nav, disclaimer
│  ├─ tools.ts            # tool metadata
│  └─ weeks.ts            # all 40 weeks of content
├─ layouts/BaseLayout.astro
├─ pages/
│  ├─ index.astro
│  ├─ tools/…             # tools hub + one page per tool
│  ├─ pregnancy/          # index + week-[week].astro (40 pages)
│  ├─ blog/               # index + [...slug].astro
│  └─ about / privacy / disclaimer / offline / 404
└─ styles/global.css      # design system (tokens ported from the original tool)
public/
├─ icons/                 # generated PWA icons + og-default.png
├─ favicon.svg, robots.txt, _headers
```

## 🌍 Adding content

- **A new week tip / fact** → edit `src/data/weeks.ts`.
- **A new guide** → drop a Markdown file in `src/content/blog/` with the
  frontmatter fields from `src/content.config.ts`.
- **A new tool** → add an entry to `src/data/tools.ts`, build a calculator
  component, and create `src/pages/tools/<slug>.astro` wrapping it in `ToolShell`.

## 🔔 Notifications

Weekly milestone reminders are opt-in from the **My Pregnancy** dashboard. They
use the **Notifications API** plus **Periodic Background Sync**, so when the PWA
is installed (Chromium browsers), the service worker (`public/push-sw.js`) wakes
roughly daily, checks the saved due date in IndexedDB, and notifies once per new
week. On browsers without Periodic Background Sync, reminders surface when the
app is next opened.

The service worker also ships a `push` handler as groundwork for true
server-sent **Web Push**. To enable that later, add a Cloudflare Worker with
VAPID keys + a cron trigger to store subscriptions and send pushes — no client
changes needed.

## 🌐 Internationalisation

The site is English-only today but structured for i18n: all UI strings and
content live in `src/data/*` and the content collection, so a locale layer can
wrap them without touching page logic.

## ⚕️ Disclaimer

Mama Bloom provides general educational information and estimates — **not medical
advice.** It never replaces a qualified healthcare provider. See `/disclaimer/`.
