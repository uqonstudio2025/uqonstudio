import type { WhyChooseContent } from "@/components/whyChoose/WhyChoose.types";

export const whyChoose = {
  badge: "WHY CHOOSE US",

  title: "Mengapa Klien Memilih UQONSTUDIO?",

  description:
    "Kami menggabungkan desain yang estetis, pengerjaan yang presisi, serta pelayanan profesional untuk menghadirkan ruang yang nyaman, fungsional, dan bernilai investasi jangka panjang.",

  items: [
    {
      id: "quality",

      title: "Garansi Kualitas",

      description:
        "Setiap proyek dikerjakan dengan standar kualitas tinggi dan melalui proses quality control sebelum diserahterimakan.",

      icon: "ShieldCheck",

      featured: true,
    },

    {
      id: "premium-material",

      title: "Material Premium",

      description:
        "Kami menggunakan material pilihan yang tahan lama, mudah dirawat, dan sesuai dengan karakter desain yang diinginkan.",

      icon: "BadgeCheck",

      featured: true,
    },

    {
      id: "on-time",

      title: "Tepat Waktu",

      description:
        "Perencanaan proyek yang matang membantu kami menyelesaikan pekerjaan sesuai jadwal tanpa mengurangi kualitas hasil.",

      icon: "Clock3",

      featured: true,
    },

    {
      id: "exclusive-design",

      title: "Desain Eksklusif",

      description:
        "Setiap desain dibuat secara personal sesuai kebutuhan, gaya hidup, dan karakter ruang milik setiap klien.",

      icon: "Sparkles",

      featured: true,
    },
  ],

  cta: {
    label: "Konsultasi Gratis",

    href: "/contact",
  },
} satisfies WhyChooseContent;