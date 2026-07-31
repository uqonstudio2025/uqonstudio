/* ==========================================================================
   Styles
   ========================================================================== */

export const mobileNavStyles = {
  root: `
    flex

    items-center
    justify-between

    lg:hidden
  `,

  trigger: `
    inline-flex

    h-10
    w-10

    items-center
    justify-center

    rounded-xl

    border
    border-[var(--color-border)]

    bg-[var(--color-background)]

    transition-all
    duration-300

    hover:bg-[var(--color-muted)]
  `,

  content: `
    flex

    flex-col

    gap-8

    pt-8
  `,

  navigation: `
    flex

    flex-col

    gap-4
  `,

  link: `
    text-base

    font-medium

    text-[var(--color-foreground)]

    transition-colors
    duration-300

    hover:text-[var(--color-primary)]
  `,

  footer: `
    flex

    flex-col

    gap-4

    pt-4
  `,

  button: `
    w-full
  `,
} as const;