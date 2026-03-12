import sharp from 'sharp';

// 1200x630 OG image — matches og-image.svg design, indigo theme
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0d1117"/>
  <radialGradient id="blob" cx="30%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#818cf8" stop-opacity="0.12"/>
    <stop offset="100%" stop-color="#0d1117" stop-opacity="0"/>
  </radialGradient>
  <rect width="1200" height="630" fill="url(#blob)"/>
  <rect x="80" y="80" width="80" height="80" rx="16" fill="#161b22"/>
  <text x="120" y="135" font-family="Arial, sans-serif" font-weight="700" font-size="40" fill="#818cf8" text-anchor="middle">KJ</text>
  <text x="80" y="280" font-family="Arial, sans-serif" font-weight="700" font-size="72" fill="#f0f6fc">Kamil Jaworski</text>
  <text x="80" y="350" font-family="Arial, sans-serif" font-weight="500" font-size="36" fill="#818cf8">.NET Software Engineer</text>
  <text x="80" y="410" font-family="Arial, sans-serif" font-weight="400" font-size="28" fill="#8b949e">C# / Azure / AWS / Microservices</text>
  <text x="80" y="560" font-family="Arial, sans-serif" font-weight="400" font-size="24" fill="#484f58">kamiljaworski.pl</text>
</svg>`;

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png({ quality: 90 })
  .toFile('public/og-image.png');

console.log('og-image.png generated successfully (1200x630)');
