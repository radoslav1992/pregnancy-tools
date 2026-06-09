// Metadata for the tools hub. Each tool has its own page under /tools/<slug>/.

export interface Tool {
  slug: string;
  title: string;
  short: string;
  description: string;
  /** A single emoji used as a lightweight, dependency-free icon. */
  icon: string;
  accent: 'peach' | 'sage' | 'mulberry';
  keywords: string[];
}

export const tools: Tool[] = [
  {
    slug: 'due-date-calculator',
    title: 'Due Date Calculator',
    short: 'When will you meet your baby?',
    description:
      'Estimate your due date from your last period, conception date, or IVF transfer — and see exactly where you are in the 40-week journey.',
    icon: '🗓️',
    accent: 'mulberry',
    keywords: [
      'due date calculator',
      'pregnancy calculator',
      'estimated due date',
      'EDD',
      'Naegele rule',
      'IVF due date',
    ],
  },
  {
    slug: 'ovulation-calculator',
    title: 'Ovulation Calculator',
    short: 'Find your most fertile days.',
    description:
      'Pinpoint your fertile window and likely ovulation day based on your cycle, so you can time things with confidence.',
    icon: '🌱',
    accent: 'sage',
    keywords: [
      'ovulation calculator',
      'fertile window',
      'fertility calculator',
      'trying to conceive',
      'ovulation day',
    ],
  },
  {
    slug: 'hcg-calculator',
    title: 'hCG Doubling Calculator',
    short: 'Track your hCG rise.',
    description:
      'Enter two beta hCG results to see the doubling time and daily rise in early pregnancy, with typical reference ranges.',
    icon: '🧪',
    accent: 'peach',
    keywords: [
      'hCG calculator',
      'hCG doubling time',
      'beta hCG',
      'early pregnancy hormone',
      'hCG levels',
    ],
  },
  {
    slug: 'weight-gain-calculator',
    title: 'Weight Gain Calculator',
    short: 'A healthy range for you.',
    description:
      'See your recommended pregnancy weight-gain range based on your pre-pregnancy BMI and how far along you are.',
    icon: '⚖️',
    accent: 'sage',
    keywords: [
      'pregnancy weight gain calculator',
      'BMI pregnancy',
      'healthy weight gain',
      'IOM guidelines',
    ],
  },
  {
    slug: 'contraction-timer',
    title: 'Contraction Timer',
    short: 'Time labour, tap by tap.',
    description:
      'A simple, private contraction timer. Tap when a contraction starts and stops to track frequency and duration as labour builds.',
    icon: '⏱️',
    accent: 'mulberry',
    keywords: [
      'contraction timer',
      'labour timer',
      'time contractions',
      '5-1-1 rule',
      'when to go to hospital',
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
