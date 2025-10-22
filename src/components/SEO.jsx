// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

import { SITE_DATA } from '../configs/data/site';
import { useTranslation } from '../contexts/translationContext';

const SEO = () => {
  const { t, lang } = useTranslation();

  // URL base de tu sitio
  const baseUrl = SITE_DATA.siteUrl || 'https://yasik-dev.vercel.app';
  const description = t.site.description || 'Portafolio personal de un desarrollador con experiencia en React, Node.js y DevOps.';
  const title = `${t.site.name} - ${t.site.title}`;
  const siteName = t.site.name;
  const imageUrl = SITE_DATA.icon.startsWith('http')
    ? SITE_DATA.icon
    : `${baseUrl}${SITE_DATA.icon}`;

  return (
    <Helmet>
      {/* Título y descripción */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {/*<meta name="twitter:site" content="@tuusuario" />*/}

      {/* hrefLang para i18n */}
      <link rel="alternate" hrefLang="es" href={baseUrl} />
      <link rel="alternate" hrefLang="en" href={baseUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* Idioma del HTML */}
      <html lang={lang} />

      {/* Favicon */}
      <link rel="icon" type="image/webp" href={SITE_DATA.icon} />

      {/* JSON-LD / Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': t.site.name,
          'url': baseUrl,
          'jobTitle': t.site.title,
          'description': t.site.description,
          'image': imageUrl,
          'email': `mailto:${SITE_DATA.email}`,
          'sameAs': [
            SITE_DATA.social.github,
            SITE_DATA.social.linkedin,
            SITE_DATA.social.twitter,
            SITE_DATA.social.discord
          ].filter(Boolean)
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
