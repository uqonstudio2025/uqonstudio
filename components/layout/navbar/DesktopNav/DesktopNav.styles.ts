/* ==========================================================================
   Styles
   ========================================================================== */

export const desktopNavStyles = {
  root: `
    hidden

    items-center
    justify-between

    lg:flex
  `,

  navigation: `
    flex

    items-center

    gap-8
  `,

  link: `
    text-sm

    font-medium

    text-[var(--color-muted-foreground)]

    transition-colors
    duration-300

    hover:text-[var(--color-foreground)]
  `,

  actions: `
    flex

    items-center

    gap-4
  `,

  button: `
    min-w-[180px]
  `,
} as const;