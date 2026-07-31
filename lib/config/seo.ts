import { siteConfig } from "./site";

export const seoConfig = {
  title: siteConfig.name,

  titleTemplate: `%s | ${siteConfig.name}`,

  description: siteConfig.description,

  openGraph: {
    title: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    locale: "id_ID",

    type: "website",
  },
};