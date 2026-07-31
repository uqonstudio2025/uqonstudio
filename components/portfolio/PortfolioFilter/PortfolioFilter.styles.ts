import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const PortfolioFilterWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const portfolioFilterStyles = {
  wrapper: `
    flex
    justify-center
  `,

  container: `
    mb-12

    flex
    flex-wrap

    justify-center

    gap-3
  `,

  button: `
    transition-all
    duration-300
  `,
} as const;