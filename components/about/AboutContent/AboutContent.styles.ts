import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const AboutContentWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const aboutContentStyles = {
  wrapper: `
    flex
    h-full
    flex-col
    justify-center
  `,

  badge: `
    mb-4
    w-fit
  `,

  title: `
    mb-6

    text-3xl
    font-bold
    tracking-tight

    text-[var(--color-foreground)]

    md:text-4xl
  `,

  description: `
    mb-8

    leading-8

    text-[var(--color-muted-foreground)]
  `,

  features: `
    mb-10

    flex
    flex-col

    gap-6
  `,

  feature: `
    flex

    items-start

    gap-4
  `,

  featureIcon: `
    mt-1

    flex
    h-10
    w-10

    shrink-0

    items-center
    justify-center

    rounded-full

    bg-[var(--color-primary)]
    text-[var(--color-primary-foreground)]
  `,

  featureContent: `
    flex
    flex-col
    gap-2
  `,

  featureTitle: `
    text-lg
    font-semibold

    text-[var(--color-foreground)]
  `,

  featureDescription: `
    leading-7

    text-[var(--color-muted-foreground)]
  `,

  footer: `
    mt-auto
  `,

  button: `
    w-fit
  `,
} as const;