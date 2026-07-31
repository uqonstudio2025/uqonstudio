import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<
  HTMLLabelElement,
  LabelProps
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      data-slot="label"
      className={cn(
        "inline-flex",
        "items-center",
        "gap-1",
        "text-sm",
        "font-medium",
        "leading-none",
        "text-[var(--color-foreground)]",
        "select-none",
        "peer-disabled:cursor-not-allowed",
        "peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };