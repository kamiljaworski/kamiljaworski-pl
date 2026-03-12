import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'fs';

// SVG source — dark bg + indigo KJ
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0d1117"/>
  <text x="32" y="46" font-family="Arial, sans-serif" font-weight="700" font-size="34" fill="#818cf8" text-anchor="middle">KJ</text>
</svg>`;

const svgBuffer = Buffer.from(svg);

// Generate PNGs at each size ICO supports
const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(
  sizes.map((size) =>
    sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer()
  )
);

const icoBuffer = await pngToIco(pngBuffers);
writeFileSync('public/favicon.ico', icoBuffer);

console.log('favicon.ico generated successfully');
