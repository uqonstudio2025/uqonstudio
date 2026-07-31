import type {
  NavbarContent,
} from "@/components/layout/navbar/Navbar.types";

/* ==========================================================================
   Content
   ========================================================================== */

export const navigationContent: NavbarContent = {
  logo: {
    name: "UQon",

    highlight: "Studio",

    href:"#hero"
},

  navigation: [
    {
      id: "about",

      label: "Tentang",

      href: "#about",
    },

    {
      id: "services",

      label: "Layanan",

      href: "#services",
    },

    {
      id: "portfolio",

      label: "Portofolio",

      href: "#portfolio",
    },

    {
      id: "faq",

      label: "FAQ",

      href: "#faq",
    },

    {
      id: "contact",

      label: "Kontak",

      href: "#contact",
    },
  ],

  cta: {
    label: "Konsultasi Gratis",

    href: "#contact",
  },
};