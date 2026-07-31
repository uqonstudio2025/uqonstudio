/* ==========================================================================
   UQONSTUDIO
   Structured Data (JSON-LD)
   ========================================================================== */

import {
  COMPANY,
  CONTACT,
  SITE,
  SOCIAL,
} from "./constants";

/* ==========================================================================
   Organization
   ========================================================================== */

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: SITE.name,

    url: SITE.url,

    logo: `${SITE.url}/logo.png`,

    description: SITE.description,

    email: CONTACT.email,

    telephone: CONTACT.phone,

    address: {
      "@type": "PostalAddress",

      addressLocality: "Bogor",

      addressRegion: "Jawa Barat",

      addressCountry: "ID",
    },

    sameAs: [
      SOCIAL.instagram,
      SOCIAL.facebook,
      SOCIAL.tiktok,
      SOCIAL.youtube,
      SOCIAL.linkedin,
    ],
  };
}

/* ==========================================================================
   Local Business
   ========================================================================== */

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    name: SITE.name,

    image: `${SITE.url}/og-image.png`,

    url: SITE.url,

    telephone: CONTACT.phone,

    email: CONTACT.email,

    address: {
      "@type": "PostalAddress",

      streetAddress: CONTACT.address,

      addressLocality: "Bogor",

      addressRegion: "Jawa Barat",

      addressCountry: "ID",
    },

    areaServed: [
      "Bogor",
      "Jakarta",
      "Depok",
      "Tangerang",
      "Bekasi",
      "Indonesia",
    ],

    priceRange: "$$",

    description: SITE.description,
  };
}

/* ==========================================================================
   Website
   ========================================================================== */

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: SITE.name,

    url: SITE.url,

    description: SITE.description,

    publisher: {
      "@type": "Organization",

      name: COMPANY.publisher,
    },

    inLanguage: "id-ID",
  };
}

/* ==========================================================================
   Breadcrumb
   ========================================================================== */

export interface BreadcrumbItem {
  readonly name: string;

  readonly url: string;
}

export function createBreadcrumbSchema(
  items: readonly BreadcrumbItem[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",

        position: index + 1,

        name: item.name,

        item: item.url,
      })
    ),
  };
}

/* ==========================================================================
   FAQ
   ========================================================================== */

export interface FAQSchemaItem {
  readonly question: string;

  readonly answer: string;
}

export function createFAQSchema(
  items: readonly FAQSchemaItem[]
) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: items.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
      },
    })),
  };
}

/* ==========================================================================
   Service
   ========================================================================== */

export interface ServiceSchema {
  readonly name: string;

  readonly description: string;
}

export function createServiceSchema(
  service: ServiceSchema
) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    provider: {
      "@type": "Organization",

      name: SITE.name,
    },

    name: service.name,

    description: service.description,

    areaServed: "Indonesia",
  };
}

/* ==========================================================================
   Project
   ========================================================================== */

export interface ProjectSchema {
  readonly name: string;

  readonly description: string;

  readonly image: string;
}

export function createProjectSchema(
  project: ProjectSchema
) {
  return {
    "@context": "https://schema.org",

    "@type": "CreativeWork",

    name: project.name,

    description: project.description,

    image: project.image,

    creator: {
      "@type": "Organization",

      name: SITE.name,
    },
  };
}