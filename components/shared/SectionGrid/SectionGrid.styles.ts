/* ==========================================================================
   Styles
   ========================================================================== */

export const sectionGridStyles = {
  container: `
    grid
  `,

  columns: {
    1: `
      grid-cols-1
    `,

    2: `
      grid-cols-1

      lg:grid-cols-2
    `,

    3: `
      grid-cols-1

      md:grid-cols-2

      xl:grid-cols-3
    `,

    4: `
      grid-cols-1

      md:grid-cols-2

      xl:grid-cols-4
    `,
  },

  gap: {
    sm: `
      gap-4
    `,

    md: `
      gap-6
    `,

    lg: `
      gap-8
    `,

    xl: `
      gap-10
    `,
  },
} as const;