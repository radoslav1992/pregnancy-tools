// Compact week → size-comparison map for client-side use (share cards,
// dashboard) without bundling the full week-by-week content.
// Mirrors the `fruit` field in src/data/weeks.ts — keep them in sync.

export const fruitByWeek: Record<number, string> = {
  1: 'a fresh start',
  2: 'an egg',
  3: 'a cluster of cells',
  4: 'a poppy seed',
  5: 'a sesame seed',
  6: 'a sweet pea',
  7: 'a blueberry',
  8: 'a raspberry',
  9: 'a cherry',
  10: 'a kumquat',
  11: 'a fig',
  12: 'a lime',
  13: 'a pea pod',
  14: 'a lemon',
  15: 'an apple',
  16: 'an avocado',
  17: 'a pomegranate',
  18: 'a bell pepper',
  19: 'a mango',
  20: 'a banana',
  21: 'a carrot',
  22: 'a spaghetti squash',
  23: 'a large mango',
  24: 'an ear of corn',
  25: 'a cauliflower',
  26: 'a head of lettuce',
  27: 'a head of cauliflower',
  28: 'an eggplant',
  29: 'a butternut squash',
  30: 'a large cabbage',
  31: 'a coconut',
  32: 'a jicama',
  33: 'a pineapple',
  34: 'a cantaloupe',
  35: 'a honeydew melon',
  36: 'a head of romaine lettuce',
  37: 'a bunch of Swiss chard',
  38: 'a leek',
  39: 'a mini watermelon',
  40: 'a small pumpkin',
};

export function fruitForWeek(week: number): string {
  const w = Math.max(1, Math.min(40, Math.round(week)));
  return fruitByWeek[w] ?? 'a little one';
}
