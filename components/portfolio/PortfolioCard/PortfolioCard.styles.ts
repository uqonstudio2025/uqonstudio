import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const PortfolioCardWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const portfolioCardStyles = {
  wrapper: `
    h-full
  `,

  card: `
    group

    relative

    overflow-hidden

    rounded-2xl

    transition-all
    duration-300

    hover:-translate-y-2
    hover:shadow-xl
  `,

  imageWrapper: `
    relative

    aspect-[4/3]

    overflow-hidden
  `,

  image: `
    object-cover

    transition-transform
    duration-500

    group-hover:scale-105
  `,

  overlay: `
    absolute

    inset-0

    bg-gradient-to-t

    from-black/80
    via-black/20
    to-transparent
  `,

  content: `
    flex
    flex-1
    flex-col

    gap-4

    p-6
  `,

  category: `
    w-fit
  `,

  title: `
    text-xl

    font-semibold

    text-[var(--color-foreground)]
  `,

  location: `
    text-sm

    text-[var(--color-muted-foreground)]
  `,

  description: `
    leading-7

    text-[var(--color-muted-foreground)]
  `,

  tags: `
    flex

    flex-wrap

    gap-2
  `,

  footer: `
    mt-auto

    pt-2
  `,

  button: `
    w-full
  `,

  featured: `
    ring-2

    ring-[var(--color-primary)]
  `,
} as const;