import type { FooterContent } from "@/components/footer/Footer.types";

/* ==========================================================================
   Footer Content
   ========================================================================== */

export const footerContent: FooterContent = {
  brand: {
    name: "UQONSTUDIO",

    tagline: "Luxury Interior & Custom Furniture",

    description:
      "Menghadirkan desain interior premium, custom furniture, serta solusi ruang yang elegan untuk hunian, kantor, cafe, dan bisnis Anda.",
  },

  cta: {

    title: "Siap Mewujudkan Interior Impian Anda?",
  badge:"Let's Build Together",
    description:
      "Diskusikan kebutuhan proyek Anda bersama tim UQONSTUDIO. Kami siap membantu mulai dari konsultasi, desain, produksi hingga instalasi.",

    buttonLabel: "Konsultasi Gratis",

    buttonHref: "#contact",
  },

  sections: {
    navigation: "Navigasi",

    services: "Layanan",

    contact: "Kontak",

    social: "Ikuti Kami",
  },

  navigation: {
    title: "Navigasi",

    items: [
      {
        id: "home",
        label: "Home",
        href: "#hero",
      },
      {
        id: "about",
        label: "About",
        href: "#about",
      },
      {
        id: "services",
        label: "Services",
        href: "#services",
      },
      {
        id: "portfolio",
        label: "Portfolio",
        href: "#portfolio",
      },
      {
        id: "why-choose",
        label: "Why Choose",
        href: "#why-choose",
      },
      {
        id: "contact",
        label: "Contact",
        href: "#contact",
      },
    ],
  },

  services: {
    title: "Layanan",

    items: [
      {
        id: "interior",
        label: "Interior Design",
        href: "#services",
      },
      {
        id: "custom-furniture",
        label: "Custom Furniture",
        href: "#services",
      },
      {
        id: "kitchen-set",
        label: "Kitchen Set",
        href: "#services",
      },
      {
        id: "renovation",
        label: "Renovasi Interior",
        href: "#services",
      },
    ],
  },

  contact: [
    {
      id: "phone",

      label: "Telepon",

      value: "+62 812-3456-7890",

      href: "tel:+6281234567890",

      icon: "phone",
    },

    {
      id: "email",

      label: "Email",

      value: "hello@uqonstudio.com",

      href: "mailto:hello@uqonstudio.com",

      icon: "mail",
    },

    {
      id: "address",

      label: "Alamat",

      value: "Bogor, Jawa Barat, Indonesia",

      href: "https://maps.google.com",

      icon: "mapPin",
    },
  ],

  social: [
    {
      id: "instagram",

      label: "Instagram",

      href: "https://instagram.com/uqonstudio",

      icon: "instagram",
    },

    {
      id: "facebook",

      label: "Facebook",

      href: "https://facebook.com/uqonstudio",

      icon: "facebook",
    },

    {
      id: "linkedin",

      label: "LinkedIn",

      href: "https://linkedin.com/company/uqonstudio",

      icon: "factory",
    },

    {
      id: "website",

      label: "Website",

      href: "https://uqonstudio.com",

      icon: "globe",
    },
  ],

  copyright: `© ${new Date().getFullYear()} UQONSTUDIO. All Rights Reserved.`,
};