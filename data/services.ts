import type {
  ServicesContent,
} from "@/components/services/Services.types";

/* ==========================================================================
 * Content
 * ========================================================================== */

export const servicesContent: ServicesContent = {
  badge: "Layanan Kami",

  title:
    "Solusi Interior & Furniture Custom untuk Rumah dan Bisnis",

  description:
    "Kami menghadirkan layanan desain interior, produksi furniture custom, hingga renovasi ruang dengan kualitas premium, pengerjaan profesional, dan hasil yang sesuai kebutuhan Anda.",

  items: [
    {
      id: "interior-design",

      icon: "compass",

      title: "Interior Design",

      description:
        "Perencanaan desain interior yang fungsional, estetik, dan sesuai karakter ruang Anda.",

      features: [
        {
          id: "layout",
          label: "Layout Planning",
        },
        {
          id: "3d",
          label: "3D Visualization",
        },
        {
          id: "material",
          label: "Material Recommendation",
        },
      ],

      cta: {
        label: "Konsultasi Sekarang",
        href: "#contact",
      },

      highlight: true,
    },

    {
      id: "custom-furniture",

      icon: "sofa",

      title: "Custom Furniture",

      description:
        "Furniture dibuat sesuai ukuran, kebutuhan, dan gaya interior agar ruang lebih maksimal.",

      features: [
        {
          id: "kitchen",
          label: "Kitchen Set",
        },
        {
          id: "wardrobe",
          label: "Wardrobe",
        },
        {
          id: "tv",
          label: "TV Cabinet",
        },
      ],

      cta: {
        label: "Lihat Detail",
        href: "#contact",
      },
    },

    {
      id: "renovation",

      icon: "hammer",

      title: "Renovasi Interior",

      description:
        "Merenovasi ruang lama menjadi lebih modern, nyaman, dan memiliki nilai estetika tinggi.",

      features: [
        {
          id: "demolition",
          label: "Pembongkaran",
        },
        {
          id: "finishing",
          label: "Finishing Interior",
        },
        {
          id: "installation",
          label: "Instalasi Furniture",
        },
      ],

      cta: {
        label: "Mulai Renovasi",
        href: "#contact",
      },
    },

    {
      id: "space-planning",

      icon: "pencil",

      title: "Space Planning",

      description:
        "Mengoptimalkan setiap meter persegi agar ruang terasa lebih luas, nyaman, dan efisien.",

      features: [
        {
          id: "workflow",
          label: "Workflow Layout",
        },
        {
          id: "storage",
          label: "Storage Optimization",
        },
        {
          id: "circulation",
          label: "Circulation Planning",
        },
      ],

      cta: {
        label: "Pelajari Lebih Lanjut",
        href: "#contact",
      },
    },

    {
      id: "commercial",

      icon: "building",

      title: "Commercial Interior",

      description:
        "Desain interior untuk kantor, restoran, kafe, retail, showroom, dan ruang komersial lainnya.",

      features: [
        {
          id: "office",
          label: "Office",
        },
        {
          id: "cafe",
          label: "Cafe & Restaurant",
        },
        {
          id: "retail",
          label: "Retail Store",
        },
      ],

      cta: {
        label: "Diskusikan Proyek",
        href: "#contact",
      },
    },

    {
      id: "maintenance",

      icon: "wrench",

      title: "Maintenance",

      description:
        "Perawatan dan perbaikan furniture maupun interior agar tetap awet dan terlihat seperti baru.",

      features: [
        {
          id: "repair",
          label: "Furniture Repair",
        },
        {
          id: "replacement",
          label: "Hardware Replacement",
        },
        {
          id: "touchup",
          label: "Finishing Touch Up",
        },
      ],

      cta: {
        label: "Hubungi Kami",
        href: "#contact",
      },
    },
  ],
};