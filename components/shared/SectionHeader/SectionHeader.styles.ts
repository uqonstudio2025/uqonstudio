import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const SectionHeaderContainer = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const sectionHeaderStyles = {
  container: `
    flex
    flex-col
    gap-5
  `,

  alignments: {
    center: `
      items-center
      text-center
      mx-auto
    `,

    left: `
      items-start
      text-left
    `,
  },

  maxWidth: {
    md: `
      max-w-2xl
    `,

    lg: `
      max-w-3xl
    `,

    xl: `
      max-w-4xl
    `,
  },

  badge: `
    self-start
  `,

  badgeCenter: `
    self-center
  `,

  title: `
    text-balance

    text-4xl
    font-bold
    tracking-tight

    text-[var(--color-foreground)]

    md:text-5xl
  `,

  description: `
    text-base
    leading-relaxed

    text-[var(--color-muted-foreground)]

    md:text-lg
  `,
} as const;