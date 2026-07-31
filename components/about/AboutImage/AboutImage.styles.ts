import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const AboutImageWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const aboutImageStyles = {
  wrapper: `
    relative

    flex
    items-center
    justify-center
  `,

  frame: `
    relative

    overflow-hidden

    rounded-3xl

    border
    border-[var(--color-border)]

    bg-[var(--color-card)]

    shadow-card
  `,

  imageWrapper: `
    relative

    aspect-[4/5]

    w-full

    overflow-hidden
  `,

  image: `
    object-cover

    transition-transform
    duration-500

    hover:scale-105
  `,

  decoration: `
    absolute

    -right-6
    -top-6

    -z-10

    h-40
    w-40

    rounded-full

    bg-[var(--color-primary)]

    opacity-10

    blur-3xl
  `,
} as const;