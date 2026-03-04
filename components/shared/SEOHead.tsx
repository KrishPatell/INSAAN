import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  includeSchema?: boolean;
}

const BASE_URL = 'https://www.insaanglobal.com';

// FAQ Schema for homepage
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Insaan Global do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insaan Global is a parent company overseeing specialized workforce solution brands including BetterMint Healthcare Staffing and CORETech Industrial Staffing. We provide comprehensive staffing and recruiting services across healthcare, industrial, and skilled trades sectors nationwide."
      }
    },
    {
      "@type": "Question",
      "name": "Is Insaan Global a good company to work for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insaan Global companies prioritize worker satisfaction with transparent pay rates, weekly paychecks, benefits from day one, dedicated career support, and long-term placement success. Our companies maintain high worker satisfaction rates across all placements."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Insaan Global owned by?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insaan Global is a privately held workforce solutions company specializing in healthcare and industrial staffing through our portfolio of brands."
      }
    },
    {
      "@type": "Question",
      "name": "How often does Insaan Global pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Workers placed through Insaan Global companies receive weekly pay with direct deposit options available. All placements include transparent pay rates with no hidden fees."
      }
    }
  ]
};

// Organization Schema
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Insaan Global",
  "alternateName": "Insaan Global Workforce Solutions",
  "url": "https://www.insaanglobal.com",
  "logo": "https://www.insaanglobal.com/logo.png",
  "description": "Parent company overseeing specialized workforce solution brands including BetterMint Healthcare Staffing and CORETech Industrial Staffing",
  "sameAs": [
    "https://www.linkedin.com/company/insaan-global",
    "https://www.facebook.com/insaanglobal",
    "https://twitter.com/insaanglobal"
  ],
  "subOrganization": [
    {
      "@type": "Organization",
      "name": "BetterMint Healthcare Staffing",
      "url": "https://www.bettermint.com"
    },
    {
      "@type": "Organization",
      "name": "CORETech Industrial Staffing",
      "url": "https://coretech-stagging.webflow.io"
    }
  ]
};

// Breadcrumb Schema
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.insaanglobal.com"
    }
  ]
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  ogImage = `${BASE_URL}/assets/hero-world-map.webp`,
  keywords = 'workforce solutions, staffing, recruitment, Insaan Global',
  ogType = 'website',
  includeSchema = false,
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
    
    // Google Site Verification
    setMeta('name', 'google-site-verification', '6bk6mej9UlAYu7J4p51fn4kxKX3cAty4gJVguHClljw');

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', ogType);
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

    // Schema.org JSON-LD (only on homepage by default)
    if (includeSchema || path === '/') {
      // Remove existing schema scripts
      document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
      
      // Add FAQ Schema
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.textContent = JSON.stringify(FAQ_SCHEMA);
      document.head.appendChild(faqScript);
      
      // Add Organization Schema
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.textContent = JSON.stringify(ORGANIZATION_SCHEMA);
      document.head.appendChild(orgScript);
      
      // Add Breadcrumb Schema
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(BREADCRUMB_SCHEMA);
      document.head.appendChild(breadcrumbScript);
    }
  }, [title, description, path, ogImage, keywords, ogType, includeSchema]);

  return null;
};
