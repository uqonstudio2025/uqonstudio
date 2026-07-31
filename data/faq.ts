import type { FAQContent } from "@/components/faq/FAQ.types";

/* ==========================================================================
   FAQ Content
   ========================================================================== */

export const faqContent: FAQContent = {
  badge: "FAQ",

  title: "Frequently Asked Questions",

  description:
    "Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai layanan interior design, custom furniture, renovasi, hingga proses pengerjaan proyek di UQONSTUDIO.",

  categories: [
    {
      id: "all",
      label: "Semua",
    },

    {
      id: "design",
      label: "Interior Design",
    },

    {
      id: "furniture",
      label: "Custom Furniture",
    },

    {
      id: "renovation",
      label: "Renovasi",
    },

    {
      id: "payment",
      label: "Pembayaran",
    },
  ],

  items: [
    {
      id: "consultation",

      category: "design",

      question: "Apakah konsultasi desain dikenakan biaya?",

      answer:
        "Konsultasi awal tidak dikenakan biaya. Tim kami akan membantu memahami kebutuhan Anda sebelum memberikan penawaran dan konsep desain yang sesuai.",
    },

    {
      id: "working-area",

      category: "design",

      question: "Apakah UQONSTUDIO melayani proyek di luar kota?",

      answer:
        "Ya. Kami melayani proyek di Jabodetabek maupun berbagai kota lain di Indonesia dengan penyesuaian biaya survei, pengiriman, dan instalasi sesuai lokasi proyek.",
    },

    {
      id: "custom-furniture",

      category: "furniture",

      question: "Apakah semua furniture dibuat secara custom?",

      answer:
        "Ya. Seluruh furniture dirancang sesuai ukuran ruangan, kebutuhan fungsi, dan gaya desain yang Anda inginkan sehingga hasilnya lebih presisi dan maksimal.",
    },

    {
      id: "material",

      category: "furniture",

      question: "Material apa saja yang digunakan?",

      answer:
        "Kami menggunakan berbagai material berkualitas seperti multipleks, HPL, veneer, duco, solid wood, aluminium, kaca, hingga batu alam sesuai kebutuhan desain dan anggaran.",
    },

    {
      id: "project-duration",

      category: "renovation",

      question: "Berapa lama proses pengerjaan proyek?",

      answer:
        "Durasi pengerjaan bergantung pada skala proyek. Custom furniture umumnya memerlukan waktu 2–6 minggu, sedangkan proyek interior lengkap dapat berlangsung 1–3 bulan.",
    },

    {
      id: "warranty",

      category: "renovation",

      question: "Apakah ada garansi setelah proyek selesai?",

      answer:
        "Ya. Kami memberikan garansi terhadap kualitas pengerjaan sesuai syarat dan ketentuan yang tercantum dalam kontrak kerja.",
    },

    {
      id: "payment-system",

      category: "payment",

      question: "Bagaimana sistem pembayarannya?",

      answer:
        "Pembayaran dilakukan secara bertahap sesuai progres pekerjaan, mulai dari uang muka, termin produksi, hingga pelunasan setelah pekerjaan selesai sesuai kesepakatan.",
    },

    {
      id: "quotation",

      category: "payment",

      question: "Bagaimana cara mendapatkan penawaran harga?",

      answer:
        "Anda dapat menghubungi kami melalui WhatsApp atau mengisi formulir konsultasi di website. Tim kami akan menghubungi Anda untuk mendiskusikan kebutuhan proyek sebelum menyusun penawaran resmi.",
    },
  ],
};