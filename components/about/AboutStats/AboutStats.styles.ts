import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const AboutStatsWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const aboutStatsStyles = {
  wrapper: `
    mt-20
  `,

  grid: `
    grid

    gap-6

    sm:grid-cols-2

    lg:grid-cols-4
  `,

  card: `
    flex
    flex-col
    items-center
    justify-center

    gap-2

    p-8

    text-center

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-lg
  `,

  value: `
    text-4xl
    font-bold

    tracking-tight

    text-[var(--color-primary)]

    md:text-5xl
  `,

  label: `
    text-sm

    font-medium

    text-[var(--color-muted-foreground)]
  `,
} as const;