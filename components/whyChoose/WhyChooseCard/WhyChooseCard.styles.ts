import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const WhyChooseCardWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const whyChooseCardStyles = {
  wrapper: `
    h-full
  `,

  card: `
    flex
    h-full
    flex-col

    gap-6

    p-8

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-lg
  `,

  icon: `
    flex
    h-14
    w-14

    items-center
    justify-center

    rounded-2xl

    bg-[var(--color-primary)]
    text-[var(--color-primary-foreground)]

    shadow-sm
  `,

  content: `
    flex
    flex-1
    flex-col

    gap-3
  `,

  title: `
    text-xl
    font-semibold

    tracking-tight

    text-[var(--color-foreground)]
  `,

  description: `
    leading-7

    text-[var(--color-muted-foreground)]
  `,
} as const;