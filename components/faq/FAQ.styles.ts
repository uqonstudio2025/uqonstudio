/* ==========================================================================
 * Styles
 * ========================================================================== */

export const faqStyles = {
  /**
   * ==========================================
   * Search
   * ==========================================
   */

  search: `
    mx-auto
    mb-8
    max-w-2xl
  `,

  /**
   * ==========================================
   * Category
   * ==========================================
   */

  category: `
    mt-10
  `,

  /**
   * ==========================================
   * Body
   * ==========================================
   */

  body: `
    mt-10
  `,

  /**
   * ==========================================
   * Accordion
   * ==========================================
   */

  accordion: `
    rounded-3xl

    border
    border-border

    bg-background

    shadow-sm
  `,

  item: `
    border-b
    border-border

    last:border-b-0
  `,

  trigger: `
    px-6
    py-5

    text-left

    hover:no-underline
  `,

  triggerContent: `
    flex
    flex-1
    items-center
    justify-between

    gap-4
  `,

  question: `
    text-base
    font-semibold

    leading-7

    text-foreground
  `,

  content: `
    px-6
    pb-6
  `,

  answer: `
    text-sm
    leading-7

    text-muted-foreground
  `,
} as const;