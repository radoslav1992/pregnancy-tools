// Central site configuration. Designed so a future i18n layer can wrap these.

export const site = {
  name: 'Mama Bloom',
  tagline: 'Your calm pregnancy companion',
  description:
    'Free pregnancy due-date calculator, week-by-week tracker, and a suite of friendly tools — calm, fast, private, and works offline.',
  /** Canonical production origin. Override with SITE_URL env at build time
   *  (matches astro.config.mjs so canonical URLs, JSON-LD and the sitemap agree). */
  url: (process.env.SITE_URL || 'https://pregnancyandbaby.tools').replace(/\/$/, ''),
  locale: 'en',
  /** BCP-47 language tag used for og:locale and JSON-LD `inLanguage`. */
  lang: 'en-US',
  ogLocale: 'en_US',
  themeColor: '#b07089',
  twitter: '@mamabloom',
  author: 'Mama Bloom',
  /** Brand logo used in Organization structured data (square, on-brand). */
  logo: '/icons/icon-512.png',
  /** Default social-share card (1200×630). */
  ogImage: '/icons/og-default.png',
  ogImageAlt: 'Mama Bloom — a calm, free pregnancy companion with a due-date calculator and week-by-week tracker.',
  /** Profiles/links that reinforce the brand entity for search & AI engines. */
  sameAs: ['https://twitter.com/mamabloom'],
  /** Publication / last-review dates for evergreen editorial content (ISO). */
  contentPublished: '2025-03-01',
  contentReviewed: '2025-06-01',
  /** Google Analytics 4 measurement ID. Empty string disables the tag. */
  gaId: 'G-R3Z45FT46B',
} as const;

/**
 * Sitewide Organization node. Emitted (once) on every page with a stable
 * `@id` so search engines and AI answer engines can resolve the brand entity
 * and so per-page `publisher` references stay light. Strengthens E-E-A-T and
 * Generative Engine Optimization (GEO).
 */
export const organizationSchema = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: `${site.url}/`,
  logo: {
    '@type': 'ImageObject',
    url: new URL(site.logo, site.url).href,
    width: 512,
    height: 512,
  },
  description: site.description,
  sameAs: site.sameAs,
} as const;

/** Sitewide WebSite node with a search action and language. */
export const webSiteSchema = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: `${site.url}/`,
  description: site.description,
  inLanguage: site.lang,
  publisher: { '@id': `${site.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${site.url}/pregnancy/?week={week}`,
    },
    'query-input': 'required name=week',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const primaryNav: NavItem[] = [
  { label: 'My pregnancy', href: '/my-pregnancy/' },
  { label: 'Week by week', href: '/pregnancy/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'Guides', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: 'Tools',
    items: [
      { label: 'Due date calculator', href: '/tools/due-date-calculator/' },
      { label: 'Ovulation calculator', href: '/tools/ovulation-calculator/' },
      { label: 'hCG calculator', href: '/tools/hcg-calculator/' },
      { label: 'Weight gain calculator', href: '/tools/weight-gain-calculator/' },
      { label: 'Contraction timer', href: '/tools/contraction-timer/' },
    ],
  },
  {
    heading: 'Pregnancy',
    items: [
      { label: 'Week-by-week tracker', href: '/pregnancy/' },
      { label: 'First trimester', href: '/pregnancy/#trimester-1' },
      { label: 'Second trimester', href: '/pregnancy/#trimester-2' },
      { label: 'Third trimester', href: '/pregnancy/#trimester-3' },
    ],
  },
  {
    heading: 'Mama Bloom',
    items: [
      { label: 'Guides & articles', href: '/blog/' },
      { label: 'About us', href: '/about/' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Medical disclaimer', href: '/disclaimer/' },
    ],
  },
];

export const MEDICAL_DISCLAIMER =
  'This is an estimate, not medical advice. Dates and figures are general guidance — every pregnancy is different. Your healthcare provider’s assessment, especially from an early ultrasound, always takes priority. Always speak with your provider about your pregnancy.';
