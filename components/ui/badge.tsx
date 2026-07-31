import * as React from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Variants
   ========================================================================== */

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "shrink-0",

    "rounded-full",

    "border",
    "border-transparent",

    "px-3",
    "py-1",

    "text-xs",
    "font-semibold",

    "whitespace-nowrap",

    "select-none",

    "transition-base",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-primary)]",
          "text-[var(--color-primary-foreground)]",
        ],

        secondary: [
          "bg-[var(--color-secondary)]",
          "text-[var(--color-secondary-foreground)]",
        ],

        outline: [
          "border-[var(--color-border)]",
          "bg-transparent",
          "text-[var(--color-foreground)]",
        ],

        glass: [
          "glass",
          "border-[var(--color-border)]",
          "text-[var(--color-foreground)]",
        ],

        success: [
          "bg-emerald-500",
          "text-white",
        ],

        warning: [
          "bg-amber-500",
          "text-slate-950",
        ],

        destructive: [
          "bg-red-500",
          "text-white",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

/* ==========================================================================
   Props
   ========================================================================== */

type BadgeProps =
  React.ComponentPropsWithoutRef<"span"> &
    VariantProps<typeof badgeVariants>;

/* ==========================================================================
   Component
   ========================================================================== */

const Badge = React.forwardRef<
  HTMLSpanElement,
  BadgeProps
>(
  (
    {
      className,
      variant,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
        }),
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Badge,
  badgeVariants,
};

export type {
  BadgeProps,
};