"use client";

import { cn } from "@/lib/utils";

import LogoMark from "./LogoMark";
import LogoWordmark from "./LogoWordmark";

export interface LogoProps {
  /**
   * Preset size.
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Color variant.
   */
  variant?: "light" | "dark" | "amber";

  /**
   * Show only icon.
   */
  iconOnly?: boolean;

  /**
   * Show only wordmark.
   */
  wordmarkOnly?: boolean;

  /**
   * Vertical layout.
   */
  stacked?: boolean;

  /**
   * Enable animation.
   */
  animated?: boolean;

  /**
   * Show blueprint grid.
   */
  showGrid?: boolean;

  className?: string;
}

const iconSizes = {
  sm: 34,
  md: 42,
  lg: 56,
  xl: 72,
};

export default function Logo({
  size = "md",
  variant = "light",
  iconOnly = false,
  wordmarkOnly = false,
  stacked = false,
  animated = false,
  showGrid = false,
  className,
}: LogoProps) {
  if (iconOnly) {
    return (
      <LogoMark
        size={iconSizes[size]}
        variant={variant}
        animated={animated}
        showGrid={showGrid}
        className={className}
      />
    );
  }

  if (wordmarkOnly) {
    return (
      <LogoWordmark
        size={size}
        variant={variant}
        stacked={stacked}
        animated={animated}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        stacked
          ? "inline-flex flex-col items-center gap-5"
          : "inline-flex items-center gap-4",
        className
      )}
    >
      <LogoMark
        size={iconSizes[size]}
        variant={variant}
        animated={animated}
        showGrid={showGrid}
      />

      <LogoWordmark
        size={size}
        variant={variant}
        stacked={stacked}
        animated={animated}
      />
    </div>
  );
}