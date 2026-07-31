/* ==========================================================================
   Styles
   ========================================================================== */

export const sectionContainerStyles = {
  container: `
    mx-auto
    w-full

    px-4

    sm:px-6

    lg:px-8
  `,

  size: {
    sm: `
      max-w-4xl
    `,

    md: `
      max-w-5xl
    `,

    lg: `
      max-w-6xl
    `,

    xl: `
      max-w-7xl
    `,

    full: `
      max-w-none
    `,
  },
} as const;