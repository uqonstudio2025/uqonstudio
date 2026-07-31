"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { Loader2 } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Variants
   ========================================================================== */

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "gap-2",

    "rounded-xl",

    "text-sm",
    "font-semibold",

    "transition-base",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--color-ring)]",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-primary)]",
          "text-[var(--color-primary-foreground)]",
          "hover:opacity-90",
        ],

        secondary: [
          "bg-[var(--color-secondary)]",
          "text-[var(--color-secondary-foreground)]",
          "hover:opacity-90",
        ],

        outline: [
          "border",
          "border-[var(--color-border)]",
          "bg-transparent",
          "hover:bg-white/5",
        ],

        ghost: [
          "hover:bg-white/5",
        ],

        glass: [
          "glass",
          "hover:bg-white/10",
        ],

        destructive: [
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
        ],
      },

      size: {
        sm: "h-9 px-3",

        default: "h-11 px-5",

        lg: "h-12 px-6",

        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",

      size: "default",

      fullWidth: false,
    },
  }
);

/* ==========================================================================
   Props
   ========================================================================== */

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  loading?: boolean;
}

/* ==========================================================================
   Component
   ========================================================================== */

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,

      variant,

      size,

      fullWidth,

      asChild = false,

      loading = false,

      disabled,

      children,

      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={loading || disabled}
        {...props}
      >
        <div>
        {loading && (
          <Loader2 className="animate-spin" />
        )}

        {children}
        </div>
      </Comp>
    );
  }
);

Button.displayName = "Button";

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Button,
  buttonVariants,
};