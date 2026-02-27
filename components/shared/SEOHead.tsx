import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
}

const BASE_URL = 'https://www.insaanglobal.com';

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  ogImage = `${BASE_URL}/assets/hero-world-map.webp`,
  keywords = 'workforce solutions, staffing, recruitment, Insaan Global',
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const canonical = `${BASE_URL}${path}`;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Insaan Global');

    // Twitter
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }, [title, description, path, ogImage, keywords]);

  return null;
};
