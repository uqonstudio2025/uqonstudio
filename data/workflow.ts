 import type {
  WorkflowContent,
} from "@/components/workflow/Workflow.types";

/* ==========================================================================
 * Steps
 * ========================================================================== */

const workflowSteps = [
  {
    id: "consultation",

    number: "01",

    title: "Konsultasi",

    description:
      "Diskusikan kebutuhan, gaya desain, anggaran, dan timeline proyek bersama tim kami.",

    icon: "message",
  },

  {
    id: "design",
    number: "02",

    title: "Desain",

    description:
      "Kami membuat konsep desain lengkap beserta visualisasi 3D sebagai acuan sebelum proses produksi.",

    icon: "compass",
  },

  {
    id: "production",
    number: "03",
    title: "Produksi",

    description:
      "Furniture custom diproduksi menggunakan material pilihan dengan standar kualitas tinggi.",

    icon: "building",
  },

  {
    id: "installation",
    number: "04",
    title: "Instalasi",

    description:
      "Tim kami melakukan instalasi secara rapi, presisi, dan memastikan hasil akhir sesuai ekspektasi.",

    icon: "check",
  },
] as const;

/* ==========================================================================
 * Content
 * ========================================================================== */

export const workflowContent = {
  badge: "ALUR KERJA",

  title: "Proses Kerja yang Transparan & Terstruktur",

  description:
    "Kami menerapkan alur kerja yang jelas agar setiap proyek berjalan tepat waktu, sesuai desain, dan menghasilkan kualitas terbaik.",

  steps: workflowSteps,
} satisfies WorkflowContent;