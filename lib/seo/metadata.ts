/* ==========================================================================
   UQONSTUDIO
   SEO Metadata
   ========================================================================== */

import type {
  Metadata,
  Viewport,
} from "next";

import {
  COMPANY,
  CONTACT,
  KEYWORDS,
  OPEN_GRAPH,
  ROBOTS,
  SITE,
  SOCIAL,
  THEME,
} from "./constants";

/* ==========================================================================
   Default Metadata
   ========================================================================== */

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE.url),

  applicationName: SITE.applicationName,

  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [...KEYWORDS],

  authors: [
    {
      name: COMPANY.creator,
    },
  ],

  creator: COMPANY.creator,

  publisher: COMPANY.publisher,

  category: "Interior Design",

  alternates: {
    canonical: SITE.url,
  },

  robots: ROBOTS,

  openGraph: {
    type: "website",

    locale: SITE.locale,

    url: SITE.url,

    siteName: SITE.name,

    title: SITE.title,

    description: SITE.description,

    images: [
      {
        url: OPEN_GRAPH.image,

        width: OPEN_GRAPH.width,

        height: OPEN_GRAPH.height,

        alt: OPEN_GRAPH.alt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE.title,

    description: SITE.description,

    creator: COMPANY.creator,

    images: [OPEN_GRAPH.image],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",

  verification: {},

  other: {
    "contact:email": CONTACT.email,
    "contact:phone_number": CONTACT.phone,
    "business:contact_data:street_address":
      CONTACT.address,
    "social:instagram": SOCIAL.instagram,
    "social:facebook": SOCIAL.facebook,
    "social:tiktok": SOCIAL.tiktok,
  },
};

/* ==========================================================================
   Viewport
   ========================================================================== */

export const defaultViewport: Viewport = {
  themeColor: THEME.color,

  colorScheme: "dark",

  width: "device-width",

  initialScale: 1,
};

/* ==========================================================================
   Metadata Generator
   ========================================================================== */

interface CreateMetadataOptions {

  title?: string;

  description?: string;

  image?: string;

  noIndex?: boolean;

}

export function createMetadata({
  title,
  description,
  image,
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {

  const pageTitle =
    title ?? SITE.title;

  const pageDescription =
    description ?? SITE.description;

  const pageImage =
    image ?? OPEN_GRAPH.image;

  return {

    ...defaultMetadata,

    title: pageTitle,

    description: pageDescription,

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : ROBOTS,

    openGraph: {

      ...defaultMetadata.openGraph,

      title: pageTitle,

      description: pageDescription,

      images: [

        {

          url: pageImage,

          width: OPEN_GRAPH.width,

          height: OPEN_GRAPH.height,

          alt: OPEN_GRAPH.alt,

        },

      ],

    },

    twitter: {

      ...defaultMetadata.twitter,

      title: pageTitle,

      description: pageDescription,

      images: [pageImage],

    },

  };

}