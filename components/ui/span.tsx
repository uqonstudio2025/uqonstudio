import * as React from "react";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Variants
   ========================================================================== */

const spanVariants = cva(
  [
    "inline",
    "transition-base",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-[var(--color-foreground)]",
        ],

        muted: [
          "text-[var(--color-muted-foreground)]",
        ],

        primary: [
          "text-[var(--color-primary)]",
        ],

        gradient: [
          "text-gradient",
        ],

        success: [
          "text-emerald-500",
        ],

        warning: [
          "text-amber-400",
        ],

        destructive: [
          "text-red-500",
        ],
      },

      weight: {
        normal: "font-normal",

        medium: "font-medium",

        semibold: "font-semibold",

        bold: "font-bold",
      },
    },

    defaultVariants: {
      variant: "default",

      weight: "normal",
    },
  }
);

/* ==========================================================================
   Props
   ========================================================================== */

type SpanProps =
  React.ComponentPropsWithoutRef<"span"> &
    VariantProps<typeof spanVariants>;

/* ==========================================================================
   Component
   ========================================================================== */

const Span = React.forwardRef<
  HTMLSpanElement,
  SpanProps
>(
  (
    {
      className,
      variant,
      weight,
      ...props
    },
    ref
  ) => (
    <span
      ref={ref}
      data-slot="span"
      className={cn(
        spanVariants({
          variant,
          weight,
        }),
        className
      )}
      {...props}
    />
  )
);

Span.displayName = "Span";

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Span,
  spanVariants,
};

export type {
  SpanProps,
};