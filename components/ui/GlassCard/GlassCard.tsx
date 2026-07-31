import { cn } from "@/lib/utils";

import {
  glassCardStyles,
} from "./GlassCard.styles";

import type {
  GlassCardProps,
} from "./GlassCard.types";

function GlassCard({
  children,

  hover = true,

  border = true,

  blur = true,

  gradient = false,

  className,

  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        glassCardStyles({
          hover,
          border,
          blur,
          gradient,
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
}

GlassCard.displayName =
  "GlassCard";

export default GlassCard;