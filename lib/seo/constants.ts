/* ==========================================================================
   UQONSTUDIO
   SEO Constants
   ========================================================================== */

export const SITE = {
  name: "UQONSTUDIO",

  shortName: "UQON",

  url: "https://uqonstudio.com",

  title: "UQONSTUDIO",

  description:
    "Studio Interior Design & Custom Furniture yang menghadirkan solusi desain, produksi, dan instalasi untuk hunian, kantor, restoran, cafe, serta ruang komersial.",

  applicationName: "UQONSTUDIO",

  locale: "id_ID",

  language: "id",

  country: "ID",

  type: "website",
} as const;

/* ==========================================================================
   Contact
   ========================================================================== */

export const CONTACT = {
  email: "hello@uqonstudio.com",

  phone: "+62xxxxxxxxxxx",

  whatsapp: "https://wa.me/62xxxxxxxxxxx",

  address: "Bogor, Jawa Barat, Indonesia",
} as const;

/* ==========================================================================
   Company
   ========================================================================== */

export const COMPANY = {
  founder: "UQONSTUDIO",

  publisher: "UQONSTUDIO",

  creator: "UQONSTUDIO",

  copyright:
    "© UQONSTUDIO. All rights reserved.",
} as const;

/* ==========================================================================
   Keywords
   ========================================================================== */

export const KEYWORDS = [
  "Interior Design",
  "Interior Designer Bogor",
  "Interior Designer Jakarta",
  "Custom Furniture",
  "Kitchen Set",
  "Kitchen Set Custom",
  "Lemari Custom",
  "Walk In Closet",
  "Interior Rumah",
  "Interior Apartemen",
  "Interior Kantor",
  "Office Interior",
  "Cafe Interior",
  "Restaurant Interior",
  "Retail Interior",
  "Furniture Custom",
  "Furniture Bogor",
  "Furniture Jakarta",
  "Desain Interior",
  "Jasa Interior",
  "UQONSTUDIO",
] as const;

/* ==========================================================================
   Open Graph
   ========================================================================== */

export const OPEN_GRAPH = {
  image: "/og-image.png",

  width: 1200,

  height: 630,

  alt: "UQONSTUDIO Interior Design & Custom Furniture",
} as const;

/* ==========================================================================
   Social Media
   ========================================================================== */

export const SOCIAL = {
  instagram:
    "https://instagram.com/uqonstudio",

  facebook:
    "https://facebook.com/uqonstudio",

  tiktok:
    "https://tiktok.com/@uqonstudio",

  youtube:
    "https://youtube.com/@uqonstudio",

  linkedin:
    "https://linkedin.com/company/uqonstudio",
} as const;

/* ==========================================================================
   Theme
   ========================================================================== */

export const THEME = {
  color: "#020617",

  background: "#020617",
} as const;

/* ==========================================================================
   Robots
   ========================================================================== */

export const ROBOTS = {
  index: true,

  follow: true,

  googleBot: {
    index: true,

    follow: true,

    "max-image-preview": "large",

    "max-video-preview": -1,

    "max-snippet": -1,
  },
} as const;

/* ==========================================================================
   Manifest
   ========================================================================== */

export const MANIFEST = {
  name: SITE.name,

  shortName: SITE.shortName,

  startUrl: "/",

  display: "standalone",

  orientation: "portrait",

  backgroundColor: THEME.background,

  themeColor: THEME.color,
} as const;