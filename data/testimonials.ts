import type { TestimonialsContent } from "@/components/testimonials/Testimonials.types";

export const testimonials: TestimonialsContent = {
  badge: "TESTIMONIALS",

  title: "Kepercayaan Klien Adalah Prioritas Kami",

  description:
    "Kepuasan pelanggan menjadi motivasi kami untuk terus menghadirkan desain interior dan custom furniture berkualitas tinggi dengan pelayanan yang profesional.",

  summary: {
    value: 4.9,

    max: 5,

    totalReviews: 150,

    label: "Berdasarkan 150+ proyek yang telah kami selesaikan.",
  },

  items: [
    {
      id: "purkonuddin",

      name: "Purkonuddin",

      role: "Home Owner",

      location: "Bogor",

      project: "Luxury Kitchen Set",

      avatar: "/images/testimonials/avatar-01.webp",

      rating: 5,

      review:
        "Hasil kitchen set benar-benar sesuai ekspektasi. Detail pengerjaan sangat rapi, material premium, dan proses instalasi berjalan cepat. Sangat puas dengan pelayanan UQONSTUDIO.",
    },

    {
      id: "indriani-safitri",

      name: "Indriani Safitri",

      role: "Cafe Owner",

      location: "Bogor",

      project: "Cafe Interior",

      avatar: "/images/testimonials/avatar-02.webp",

      rating: 5,

      review:
        "Mulai dari konsultasi hingga finishing semuanya sangat profesional. Desainnya sesuai konsep yang kami inginkan dan membuat cafe terlihat jauh lebih menarik.",
    },

    {
      id: "rizky-pratama",

      name: "Rizky Pratama",

      role: "Business Owner",

      location: "Jakarta",

      project: "Office Workspace",

      avatar: "/images/testimonials/avatar-03.webp",

      rating: 5,

      review:
        "Tim sangat komunikatif dan selalu memberikan solusi terbaik selama proses pengerjaan. Hasil akhirnya melebihi ekspektasi kami.",
    },

    {
      id: "nadia-putri",

      name: "Nadia Putri",

      role: "Restaurant Owner",

      location: "Bandung",

      project: "Restaurant Interior",

      avatar: "/images/testimonials/avatar-04.webp",

      rating: 5,

      review:
        "Pengerjaan tepat waktu, kualitas material sangat baik, dan setiap detail benar-benar diperhatikan. Sangat direkomendasikan untuk proyek interior premium.",
    },

    {
      id: "aditya-nugraha",

      name: "Aditya Nugraha",

      role: "Property Investor",

      location: "Tangerang",

      project: "Modern Living Room",

      avatar: "/images/testimonials/avatar-05.webp",

      rating: 5,

      review:
        "Desain modern, elegan, dan sangat fungsional. Tim UQONSTUDIO mampu menerjemahkan kebutuhan kami menjadi ruang yang nyaman dan bernilai tinggi.",
    },

    {
      id: "dewi-lestari",

      name: "Dewi Lestari",

      role: "Padel Club Owner",

      location: "Bogor",

      project: "Padel Club & Cafe",

      avatar: "/images/testimonials/avatar-06.webp",

      rating: 5,

      review:
        "Kami sangat puas dengan hasil desain dan pengerjaannya. Proses komunikasi sangat mudah, timeline jelas, dan hasil akhirnya benar-benar premium.",
    },
  ],

  cta: {
    label: "Mulai Proyek Anda",

    href: "/contact",
  },
};