/* ==========================================================================
   Styles
   ========================================================================== */

export const logoStyles = {
  root: `
    inline-flex

    items-center

    gap-3

    transition-colors
    duration-300
  `,

  text: `
    text-xl

    font-bold

    tracking-tight

    text-[var(--color-foreground)]

    transition-colors
    duration-300
  `,

  accent: `
    text-[var(--color-primary)]
  `,
} as const;