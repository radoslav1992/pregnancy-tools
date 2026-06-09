// Generates PWA icons + social card from inline SVGs using sharp.
// Run with: npm run gen:icons
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'icons');

const BG = '#fbf6f1';
const MULBERRY = '#b07089';
const PEACH = '#e7b48c';

/** A blossom mark on a full-bleed background (for maskable icons). */
function blossom({ size, bg, padding, petal = MULBERRY, center = PEACH }) {
  const c = size / 2;
  const scale = (size * (1 - padding)) / 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${bg}"/>
  <g transform="translate(${c} ${c}) scale(${scale})">
    <g fill="${petal}">
      ${[0, 72, 144, 216, 288]
        .map((r) => `<ellipse cx="0" cy="-13" rx="6.5" ry="10" transform="rotate(${r})"/>`)
        .join('\n      ')}
    </g>
    <circle cx="0" cy="0" r="6.5" fill="${center}"/>
  </g>
</svg>`;
}

/** Rounded-corner icon (for non-maskable home-screen use). */
function roundedIcon(size) {
  const r = size * 0.22;
  const c = size / 2;
  const scale = (size * 0.62) / 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${BG}"/>
  <g transform="translate(${c} ${c}) scale(${scale})">
    <g fill="${MULBERRY}">
      ${[0, 72, 144, 216, 288]
        .map((rot) => `<ellipse cx="0" cy="-13" rx="6.5" ry="10" transform="rotate(${rot})"/>`)
        .join('\n      ')}
    </g>
    <circle cx="0" cy="0" r="6.5" fill="${PEACH}"/>
  </g>
</svg>`;
}

function ogCard() {
  const w = 1200, h = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fdf3ee"/>
      <stop offset="1" stop-color="#faeef0"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g transform="translate(150 250) scale(3.2)">
    <g fill="${MULBERRY}">
      ${[0, 72, 144, 216, 288]
        .map((rot) => `<ellipse cx="0" cy="-13" rx="6.5" ry="10" transform="rotate(${rot})"/>`)
        .join('\n      ')}
    </g>
    <circle cx="0" cy="0" r="6.5" fill="${PEACH}"/>
  </g>
  <text x="280" y="250" font-family="Georgia, serif" font-size="76" font-weight="600" fill="#3a2e3f">Mama Bloom</text>
  <text x="282" y="320" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#6a5a6e">Your calm pregnancy companion</text>
  <text x="282" y="378" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#8f566f">Due date · Week-by-week · Tools</text>
</svg>`;
}

async function svgToPng(svg, out, size) {
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(out);
  console.log('✓', out.replace(join(__dirname, '..'), ''));
}

async function main() {
  await mkdir(OUT, { recursive: true });

  await svgToPng(roundedIcon(192), join(OUT, 'icon-192.png'), 192);
  await svgToPng(roundedIcon(512), join(OUT, 'icon-512.png'), 512);
  const maskOpts = { bg: MULBERRY, padding: 0.34, petal: '#ffffff', center: PEACH };
  await svgToPng(blossom({ size: 192, ...maskOpts }), join(OUT, 'icon-maskable-192.png'), 192);
  await svgToPng(blossom({ size: 512, ...maskOpts }), join(OUT, 'icon-maskable-512.png'), 512);
  await svgToPng(roundedIcon(180), join(OUT, 'apple-touch-icon.png'), 180);

  await sharp(Buffer.from(ogCard())).png().toFile(join(OUT, 'og-default.png'));
  console.log('✓ /public/icons/og-default.png');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
