/* ==========================================================================
 * Styles
 * ========================================================================== */

export const testimonialCardStyles = {
  card: `
    group

    flex
    h-full
    flex-col

    rounded-3xl

    border
    border-border

    bg-background

    p-6

    shadow-sm

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-lg
  `,

  header: `
    flex
    items-center
    gap-4
  `,

  avatar: `
    h-14
    w-14

    rounded-full

    object-cover

    ring-2
    ring-border
  `,

  meta: `
    flex
    min-w-0
    flex-1
    flex-col
  `,

  name: `
    truncate

    text-base
    font-semibold
    text-foreground
  `,

  role: `
    text-sm
    text-muted-foreground
  `,

  location: `
    text-xs
    text-muted-foreground
  `,

  rating: `
    mt-6

    flex
    items-center
    gap-1

    text-yellow-500
  `,

  review: `
    mt-5

    flex-1

    text-sm
    leading-7
    text-muted-foreground
  `,

  footer: `
    mt-6

    border-t
    border-border

    pt-4

    text-sm
    font-medium
    text-foreground
  `,
} as const;