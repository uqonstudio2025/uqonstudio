import { brand } from "./brand";

export const site = {
  url: "https://uqonstudio.com",

  locale: "id-ID",

  language: "id",

  title: brand.name,

  description: brand.description,

  keywords: [
    "Interior Design",
    "Custom Furniture",
    "Kitchen Set",
    "Interior Bogor",
    "Interior Jakarta",
    "Renovasi Rumah",
    "Cafe Design",
    "Office Interior",
  ],

  author: "UQONSTUDIO",

  robots: {
    index: true,
    follow: true,
  },
} as const;