/* ==========================================================================
   UQONSTUDIO
   Sitemap
   ========================================================================== */

import type {
  MetadataRoute,
} from "next";

import {
  SITE,
} from "@/lib/seo";

/* ==========================================================================
   Routes
   ========================================================================== */

const routes = [
  "",

  "/",

  "/#about",

  "/#services",

  "/#portfolio",

  "/#workflow",

  "/#why-choose",

  "/#faq",

  "/#contact",
] as const;

/* ==========================================================================
   Sitemap
   ========================================================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(
    (route) => ({
      url:
        route === ""
          ? SITE.url
          : `${SITE.url}${route}`,

      lastModified,

      changeFrequency: "monthly",

      priority:
        route === "/"
          ? 1
          : 0.8,
    })
  );
}