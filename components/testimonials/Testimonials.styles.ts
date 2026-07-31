/* ==========================================================================
 * Styles
 * ========================================================================== */

export const testimonialsStyles = {
  /**
   * ==========================================
   * Summary
   * ==========================================
   */

  summary: `
    mt-10

    flex
    flex-col
    items-center
    justify-center

    text-center
  `,

  summaryRating: `
    text-5xl
    font-bold
    tracking-tight

    text-foreground
  `,

  summaryLabel: `
    mt-2

    text-lg
    font-medium

    text-primary
  `,

  summaryDescription: `
    mt-3

    max-w-xl

    text-sm
    leading-7

    text-muted-foreground
  `,

  summaryStars: `
    mt-4

    flex
    items-center
    justify-center

    gap-1
  `,

  summaryStar: `
    h-5
    w-5

    fill-yellow-400
    text-yellow-400
  `,

  /**
   * ==========================================
   * Grid
   * ==========================================
   */

  grid: `
    mt-16
  `,

  /**
   * ==========================================
   * Footer
   * ==========================================
   */

  footer: `
    mt-16

    flex
    justify-center
  `,
} as const;