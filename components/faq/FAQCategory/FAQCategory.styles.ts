import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

// export const FAQCategoryContainer = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const faqCategoryStyles = {
  container: `
    flex
    flex-wrap
    items-center
    justify-center
    gap-3
  `,

  button: `
    min-w-[120px]
  `,
} as const;