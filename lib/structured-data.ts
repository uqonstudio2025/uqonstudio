/**
 * ============================================================
 * Structured Data (JSON-LD)
 *
 * Digunakan untuk:
 * - Organization
 * - Local Business
 * - Website
 * - Service
 * - Breadcrumb
 *
 * https://developers.google.com/search/docs/appearance/structured-data
 * ============================================================
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://uqonstudio.com";

const LOGO = `${SITE_URL}/logos/logo-mark.png`;

export const business = {
  name: "UqonStudio",

  description:
    "Interior Design & Furniture Custom",

  url: SITE_URL,

  email: "hello@uqonstudio.com",

  telephone: "+62-812-3456-7890",

  image: `${SITE_URL}/opengraph-image.png`,

  logo: LOGO,

  priceRange: "$$",

  areaServed: [
    "Bogor",
    "Jakarta",
    "Depok",
    "Tangerang",
    "Bekasi",
    "Indonesia",
  ],

  address: {
    "@type": "PostalAddress",

    addressLocality: "Bogor",

    addressRegion: "Jawa Barat",

    addressCountry: "ID",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "08:00",

      closes: "17:00",
    },
  ],

  sameAs: [
    "https://instagram.com/uqonstudio",
    "https://github.com/uqonstudio",
    "https://facebook.com/uqonstudio",
  ],
};

/* =====================================================
   ORGANIZATION
===================================================== */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: business.name,

    url: business.url,

    logo: business.logo,

    image: business.image,

    email: business.email,

    telephone: business.telephone,

    sameAs: business.sameAs,
  };
}

/* =====================================================
   LOCAL BUSINESS
===================================================== */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "InteriorDesigner",

    name: business.name,

    image: business.image,

    url: business.url,

    logo: business.logo,

    telephone: business.telephone,

    email: business.email,

    address: business.address,

    areaServed: business.areaServed,

    priceRange: business.priceRange,

    openingHoursSpecification:
      business.openingHoursSpecification,

    sameAs: business.sameAs,
  };
}

/* =====================================================
   WEBSITE
===================================================== */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "WebSite",

    url: business.url,

    name: business.name,

    potentialAction: {
      "@type": "SearchAction",

      target: `${SITE_URL}/search?q={search_term_string}`,

      "query-input":
        "required name=search_term_string",
    },
  };
}

/* =====================================================
   SERVICE
===================================================== */

export function serviceSchema(
  serviceName: string,
  description: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: serviceName,

    provider: {
      "@type": "Organization",

      name: business.name,
    },

    description,

    areaServed: business.areaServed,
  };
}

/* =====================================================
   BREADCRUMB
===================================================== */

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[]
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

/* =====================================================
   PROJECT
===================================================== */

export function projectSchema({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",

    "@type": "CreativeWork",

    headline: title,

    description,

    image,

    url,

    creator: {
      "@type": "Organization",

      name: business.name,
    },
  };
}