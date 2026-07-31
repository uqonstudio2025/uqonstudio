import type { AboutContent } from "@/components/about/About.types";

/* ==========================================================================
   Content
   ========================================================================== */

export const aboutContent: AboutContent = {
  badge: "Tentang Kami",

  title: "Mewujudkan Ruang yang Fungsional, Estetik, dan Bernilai",

  description:
    "UQonStudio adalah studio desain interior dan custom furniture yang menghadirkan solusi ruang secara menyeluruh. Mulai dari perencanaan desain, visualisasi 3D, produksi furniture custom, hingga proses instalasi dengan standar kualitas tinggi.",

  features: [
    {
      id: "design",

      title: "Desain Berorientasi Kebutuhan",

      description:
        "Setiap proyek dirancang berdasarkan kebutuhan, gaya hidup, dan karakter ruang agar menghasilkan desain yang fungsional sekaligus estetis.",
    },

    {
      id: "craftsmanship",

      title: "Pengerjaan Berkualitas",

      description:
        "Didukung tenaga profesional dan material pilihan untuk menghasilkan furniture custom yang presisi, tahan lama, dan bernilai tinggi.",
    },

    {
      id: "commitment",

      title: "Komitmen terhadap Kepuasan Klien",

      description:
        "Kami percaya bahwa komunikasi yang baik, transparansi proses, dan perhatian terhadap detail adalah kunci keberhasilan setiap proyek.",
    },
  ],

  stats: [
    {
      id: "projects",

      value: "150+",

      label: "Proyek Selesai",
    },

    {
      id: "clients",

      value: "100+",

      label: "Klien Puas",
    },

    {
      id: "experience",

      value: "8+",

      label: "Tahun Pengalaman",
    },

    {
      id: "cities",

      value: "20+",

      label: "Kota Terlayani",
    },
  ],

  image: {
    src: "/images/about/about.webp",

    alt: "Tim UQonStudio sedang mengerjakan proyek interior custom.",
  },

  cta: {
    label: "Konsultasi Gratis",

    href: "#contact",
  },
};