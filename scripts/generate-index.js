// scripts/generate-index.js
import fs from 'fs';
import path from 'path';

import { SITE_DATA } from '../src/configs/data/site.js';
import en from '../src/configs/lang/en.js';

const PUBLIC_DIR = path.resolve('public');

const INDEX_PATH = "index.html"

const baseUrl = SITE_DATA.siteUrl || 'https://yasik-dev.vercel.app';
const description = en.site.description || 'Portafolio personal de un desarrollador con experiencia en React, Node.js y DevOps.';
const title = `${en.site.name} - ${en.site.title}`;
const siteName = en.site.name;
const imageUrl = SITE_DATA.icon.startsWith('http')
  ? SITE_DATA.icon
  : `${baseUrl}${SITE_DATA.icon}`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: en.site.name,
  jobTitle: en.site.title,
  url: baseUrl,
  description: description,
  image: imageUrl,
  email: `mailto:${SITE_DATA.email}`,
  sameAs: [
    SITE_DATA.social.github?.trim(),
    SITE_DATA.social.linkedin?.trim(),
    SITE_DATA.social.twitter?.trim(),
    SITE_DATA.social.discord?.trim()
  ].filter(Boolean)
};

const INDEX_HTML = `<!doctype html>
<html lang="en">
  <head>
    <!-- Metadatos básicos -->
    <meta charset="UTF-8" />
    <!-- Favicon y manifest -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

    <!-- Apple Touch Icon (iPhone) -->
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Android Chrome -->
    <link rel="android-chrome-192x192" href="/android-chrome-192x192.png">
    <link rel="android-chrome-512x512" href="/android-chrome-512x512.png">

    <!-- Web App Manifest -->
    <link rel="manifest" href="/site.webmanifest">

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Título y descripción -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:url" content="${baseUrl}">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="twitter:site" content="@tuusuario">

    <!-- Preload imagen principal -->
    <link rel="preload" as="image" href="${SITE_DATA.avatar}">

    <!-- JSON-LD / Schema.org -->
    <script type="application/ld+json">
      ${JSON.stringify(jsonLd, null, 2)}
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

console.log('🔧 Generando index.html con SEO optimizado...');
fs.writeFileSync(INDEX_PATH, INDEX_HTML, 'utf-8');
console.log('✅ index.html generado con éxito en:', INDEX_PATH);
