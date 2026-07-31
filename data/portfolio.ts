import type { PortfolioContent } from "@/components/portfolio/Portfolio.types";

/* ==========================================================================
   Content
   ========================================================================== */

export const portfolioContent: PortfolioContent = {
  badge: "Portfolio",

  title: "Beberapa Proyek Terbaik yang Telah Kami Kerjakan",

  description:
    "Setiap proyek dirancang secara detail untuk menghasilkan ruang yang nyaman, fungsional, dan memiliki nilai estetika tinggi sesuai kebutuhan klien.",

  categories: [
    {
      id: "all",
      label: "Semua",
    },
    {
      id: "interior",
      label: "Interior Rumah",
    },
    {
      id: "kitchen",
      label: "Kitchen Set",
    },
    {
      id: "commercial",
      label: "Komersial",
    },
    {
      id: "office",
      label: "Office",
    },
    {
      id: "furniture",
      label: "Custom Furniture",
    },
  ],

  items: [
    {
      id: "modern-kitchen",

      title: "Modern Kitchen Set",

      category: "kitchen",

      image: "/images/portfolio/kitchen-01.webp",

      location: "Bogor, Jawa Barat",

      description:
        "Kitchen set bergaya modern minimalis dengan kombinasi HPL motif kayu dan solid surface premium.",

      tags: [
        {
          id: "minimalist",
          label: "Minimalis",
        },
        {
          id: "hpl",
          label: "HPL",
        },
        {
          id: "custom",
          label: "Custom",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },

      featured: true,
    },

    {
      id: "living-room",

      title: "Luxury Living Room",

      category: "interior",

      image: "/images/portfolio/living-room.webp",

      location: "Jakarta Selatan",

      description:
        "Interior ruang keluarga bernuansa hangat dengan material kayu, marble, dan pencahayaan ambient.",

      tags: [
        {
          id: "luxury",
          label: "Luxury",
        },
        {
          id: "living-room",
          label: "Living Room",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },

    {
      id: "office-lobby",

      title: "Corporate Office Lobby",

      category: "office",

      image: "/images/portfolio/office-lobby.webp",

      location: "Jakarta Pusat",

      description:
        "Lobby kantor modern dengan reception desk custom dan wall panel elegan.",

      tags: [
        {
          id: "office",
          label: "Office",
        },
        {
          id: "reception",
          label: "Reception",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },

    {
      id: "cafe-interior",

      title: "Cafe Interior",

      category: "commercial",

      image: "/images/portfolio/cafe.webp",

      location: "Bandung",

      description:
        "Konsep cafe modern industrial dengan perpaduan kayu, besi, dan pencahayaan hangat.",

      tags: [
        {
          id: "cafe",
          label: "Cafe",
        },
        {
          id: "industrial",
          label: "Industrial",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },

    {
      id: "walkin-wardrobe",

      title: "Walk-in Wardrobe",

      category: "furniture",

      image: "/images/portfolio/wardrobe.webp",

      location: "Depok",

      description:
        "Lemari pakaian custom dengan storage maksimal dan finishing premium.",

      tags: [
        {
          id: "wardrobe",
          label: "Wardrobe",
        },
        {
          id: "storage",
          label: "Storage",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },

    {
      id: "master-bedroom",

      title: "Master Bedroom",

      category: "interior",

      image: "/images/portfolio/bedroom.webp",

      location: "Tangerang",

      description:
        "Kamar tidur utama bergaya modern dengan headboard custom dan pencahayaan tersembunyi.",

      tags: [
        {
          id: "bedroom",
          label: "Bedroom",
        },
        {
          id: "modern",
          label: "Modern",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },
  ],
};