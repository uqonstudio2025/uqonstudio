import { motion } from "framer-motion";

/* ==========================================================================
   Motion Components
   ========================================================================== */

export const HeroImageWrapper = motion.div;

/* ==========================================================================
   Styles
   ========================================================================== */

export const heroImageStyles = {
  wrapper: `
    relative

    flex

    items-center
    justify-center
  `,

  decoration: `
    absolute

    inset-0

    -z-10

    rounded-full

    bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]

    opacity-10

    blur-3xl
  `,

  card: `
    relative

    overflow-hidden

    rounded-3xl

    border
    border-[var(--color-border)]

    bg-[var(--color-card)]

    shadow-card
  `,

  image: `
    h-auto

    w-full

    object-cover

    select-none
  `,
} as const;