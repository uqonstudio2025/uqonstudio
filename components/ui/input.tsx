import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      data-slot="input"
      className={cn(
        "flex",
        "h-11",
        "w-full",
        "rounded-xl",
        "border",
        "border-[var(--color-input)]",
        "bg-transparent",
        "px-4",
        "py-2",
        "text-sm",
        "text-[var(--color-foreground)]",
        "shadow-sm",
        "transition-base",

        "placeholder:text-[var(--color-muted-foreground)]",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-ring)]",

        "disabled:pointer-events-none",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",

        "file:border-0",
        "file:bg-transparent",
        "file:text-sm",
        "file:font-medium",

        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };