/* ==========================================================================
   Styles
   ========================================================================== */

export const navbarStyles = {
  root: `
    fixed

    inset-x-0

    top-0

    z-50

    transition-all
    duration-300
  `,

  scrolled: `
    border-b

    border-[var(--color-border)]

    bg-[color:rgb(from_var(--color-background)_r_g_b_/_0.80)]

    backdrop-blur-xl

    shadow-sm
  `,

  container: `
    mx-auto

    flex

    h-20

    max-w-7xl

    items-center

    justify-between

    px-6

    lg:px-8
  `,
} as const;