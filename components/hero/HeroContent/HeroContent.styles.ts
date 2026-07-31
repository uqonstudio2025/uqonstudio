import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const HeroContentWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const heroContentStyles = {
  wrapper: `
    flex
    flex-col

    items-start

    gap-8
  `,

  badge: `
    w-fit
  `,

  title: `
    max-w-3xl

    text-4xl
    font-bold

    leading-tight
    tracking-tight

    text-[var(--color-foreground)]

    md:text-5xl

    xl:text-6xl
  `,

  description: `
    max-w-2xl

    text-lg

    leading-8

    text-[var(--color-muted-foreground)]
  `,

  actions: `
    flex

    flex-col

    gap-4

    sm:flex-row
  `,

  primaryButton: `
    min-w-[200px]
  `,

  secondaryButton: `
    min-w-[200px]
  `,

  stats: `
    flex

    flex-wrap

    items-center

    gap-8

    pt-4
  `,

  stat: `
    flex

    flex-col

    gap-1
  `,

  statValue: `
    text-2xl
    font-bold

    text-[var(--color-foreground)]
  `,

  statLabel: `
    text-sm

    text-[var(--color-muted-foreground)]
  `,
} as const;