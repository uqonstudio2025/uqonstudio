/* ==========================================================================
   Styles
   ========================================================================== */

export const workflowStepStyles = {
  card: `
    group

    flex

    h-full

    flex-col

    rounded-3xl

    border

    border-border/60

    bg-background

    p-8

    transition-all

    duration-300

    hover:-translate-y-2

    hover:border-primary/30

    hover:shadow-xl
  `,

  number: `
    text-sm

    font-semibold

    tracking-[0.2em]

    text-primary
  `,

  iconWrapper: `
    mt-6

    flex

    h-14

    w-14

    items-center

    justify-center

    rounded-2xl

    bg-primary/10

    text-primary
  `,

  icon: `
    h-7

    w-7
  `,

  title: `
    mt-6

    text-xl

    font-semibold
  `,

  description: `
    mt-4

    text-muted-foreground

    leading-7
  `,
} as const;