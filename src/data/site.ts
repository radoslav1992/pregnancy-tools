// Central site configuration. Designed so a future i18n layer can wrap these.

export const site = {
  name: 'Mama Bloom',
  tagline: 'Your calm pregnancy companion',
  description:
    'Free pregnancy due-date calculator, week-by-week tracker, and a suite of friendly tools — calm, fast, private, and works offline.',
  /** Canonical production origin. Override with SITE_URL env at build time. */
  url: 'https://pregnancyandbaby.tools',
  locale: 'en',
  themeColor: '#b07089',
  twitter: '@mamabloom',
  author: 'Mama Bloom',
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
