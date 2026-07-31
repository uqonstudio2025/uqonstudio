import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const ServiceCardWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const serviceCardStyles = {
  wrapper: `
    h-full
  `,

  card: `
    group

    flex
    h-full
    flex-col

    rounded-2xl

    transition-all
    duration-300

    hover:-translate-y-2
    hover:shadow-xl
  `,

  content: `
    flex
    flex-1
    flex-col

    p-8
  `,

  iconWrapper: `
    mb-6

    inline-flex
    h-16
    w-16

    items-center
    justify-center

    rounded-2xl

    bg-[var(--color-primary)]
    text-[var(--color-primary-foreground)]

    transition-transform
    duration-300

    group-hover:scale-110
  `,

  title: `
    mb-3

    text-xl
    font-semibold

    text-[var(--color-foreground)]
  `,

  description: `
    mb-6

    leading-7

    text-[var(--color-muted-foreground)]
  `,

  features: `
    mb-8

    flex
    flex-col

    gap-3
  `,

  feature: `
    flex
    items-center

    gap-3
  `,

  featureIcon: `
    h-2
    w-2

    rounded-full

    bg-[var(--color-primary)]
  `,

  featureLabel: `
    text-sm

    text-[var(--color-muted-foreground)]
  `,

  footer: `
    mt-auto
  `,

  button: `
    w-full
  `,

  highlight: `
    ring-2
    ring-[var(--color-primary)]
  `,
  badge: `
  mb-4
  w-fit
`,
} as const;