/* eslint-disable react-hooks/exhaustive-deps */
// src/components/SEOManual.jsx
import { useEffect } from 'react';

import { SITE_DATA } from '../configs/data/site';
import { useTranslation } from '../contexts/translationContext';

const SEOManual = () => {
  const { t, lang } = useTranslation();

  const title = `${t.site.name} - ${t.site.title}`;
  const description = t.site.description || 'Portafolio personal de un desarrollador con experiencia en React, Node.js y DevOps.';
  const url = SITE_DATA.siteUrl || 'https://yasik-dev.vercel.app'; // Cambia por tu URL
  const imageUrl = SITE_DATA.icon;
  const siteName = t.site.name;

  useEffect(() => {
    // Actualiza el <title>
    document.title = title;

    // Maneja los metadatos
    const metaTags = [
      // Metadatos básicos
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },

      // Open Graph / Facebook
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: lang === 'es' ? 'es_ES' : 'en_US' },
      { property: 'og:site_name', content: siteName },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      //      { name: 'twitter:site', content: '@tuusuario' }, // Opcional: tu Twitter

      // Alternates para i18n
      { rel: 'alternate', hrefLang: 'es', href: url },
      { rel: 'alternate', hrefLang: 'en', href: url },
      { rel: 'alternate', hrefLang: 'x-default', href: url }
    ];

    // Limpiar metadatos previos
    const existingTags = document.querySelectorAll('meta[name], meta[property], link[rel="alternate"]');
    existingTags.forEach(tag => {
      if (
        [ 'name', 'property' ].some(attr => tag.hasAttribute(attr)) ||
        (tag.hasAttribute('rel') && tag.getAttribute('rel').includes('alternate'))
      ) {
        tag.remove();
      }
    });

    // Agregar nuevos metadatos
    metaTags.forEach(meta => {
      if (meta.rel) {
        const link = document.createElement('link');
        link.setAttribute('rel', meta.rel);
        link.setAttribute('hreflang', meta.hrefLang);
        link.setAttribute('href', meta.href);
        document.head.appendChild(link);
      } else {
        const tag = document.createElement('meta');
        Object.keys(meta).forEach(key => tag.setAttribute(key, meta[key]));
        document.head.appendChild(tag);
      }
    });

    // Schema.org JSON-LD (estructurado)
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: t.site.name,
      url: url,
      jobTitle: t.site.title,
      description: description,
      image: imageUrl,
      email: `mailto:${SITE_DATA.email}`,
      sameAs: [
        SITE_DATA.social.github,
        SITE_DATA.social.linkedin,
        SITE_DATA.social.twitter,
        SITE_DATA.social.discord
      ].filter(Boolean)
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // Limpieza al desmontar
    return () => {
      document.head.querySelectorAll('meta[name], meta[property], link[rel="alternate"], script[type="application/ld+json"]').forEach(el => el.remove());
    };
  }, [ t, lang, url, imageUrl, siteName ]);

  return null;
};

export default SEOManual;
