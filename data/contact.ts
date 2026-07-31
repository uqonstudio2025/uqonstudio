 import type {
  ContactContent,
} from "@/components/contact/Contact.types";

/* ==========================================================================
 * Contact Content
 * ========================================================================== */

export const contactContent: ContactContent = {
  badge: "Contact",

  title: "Let's Discuss Your Dream Space",

  description:
    "Punya ide untuk interior rumah, kantor, café, atau custom furniture? Hubungi tim UQONSTUDIO dan konsultasikan kebutuhan proyek Anda secara gratis.",

  info: [
    {
      id: "phone",

      title: "Phone",

      value: "+62 812-3456-7890",

      href: "https://wa.me/6281234567890",

      icon: "phone",
    },

    {
      id: "email",

      title: "Email",

      value: "hello@uqonstudio.com",

      href: "mailto:hello@uqonstudio.com",

      icon: "mail",
    },

    {
      id: "address",

      title: "Studio",

      value:
        "Bogor, Jawa Barat, Indonesia",

      href: "https://maps.google.com",

      icon: "mapPin",
    },
  ],

  form: {
    services: [
      {
        label: "Interior Design",

        value: "interior-design",
      },

      {
        label: "Custom Furniture",

        value: "custom-furniture",
      },

      {
        label: "Renovation",

        value: "renovation",
      },

      {
        label: "3D Visualization",

        value: "3d-visualization",
      },

      {
        label: "Design Consultation",

        value: "consultation",
      },
    ],

    submitLabel: "Kirim Pesan",

    placeholders: {
      name: "Nama lengkap",

      email: "nama@email.com",

      service: "Pilih layanan",

      message:
        "Ceritakan kebutuhan proyek Anda...",
    },
  },

  map: {
    title: "UQONSTUDIO Location",

    embedUrl:
      "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL",
  },
};