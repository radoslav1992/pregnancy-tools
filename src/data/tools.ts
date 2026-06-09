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
    slug: 'how-far-along',
    title: 'How Far Along Am I?',
    short: 'Find your week instantly.',
    description:
      'Know your due date but not your week? Enter it to see how far along you are, your trimester, and how many days are left.',
    icon: '📏',
    accent: 'sage',
    keywords: [
      'how far along am I',
      'how many weeks pregnant',
      'pregnancy week calculator',
      'gestational age calculator',
    ],
  },
  {
    slug: 'conception-date-calculator',
    title: 'Conception Date Calculator',
    short: 'Estimate when you conceived.',
    description:
      'Work backwards from your due date or last period to estimate when conception likely happened, with a likely date range.',
    icon: '💞',
    accent: 'peach',
    keywords: [
      'conception date calculator',
      'when did I conceive',
      'date of conception',
      'conception calculator from due date',
    ],
  },
  {
    slug: 'chinese-gender-predictor',
    title: 'Chinese Gender Predictor',
    short: 'A playful old tradition.',
    description:
      'The traditional Chinese gender chart uses your age and the month of conception to guess boy or girl. Just for fun — not science!',
    icon: '🎎',
    accent: 'mulberry',
    keywords: [
      'chinese gender predictor',
      'chinese gender chart',
      'baby gender predictor',
      'boy or girl',
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
