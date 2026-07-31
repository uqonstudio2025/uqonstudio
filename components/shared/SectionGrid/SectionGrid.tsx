"use client";

import { cn } from "@/lib/utils";

import type { SectionGridProps } from "./SectionGrid.types";

import { sectionGridStyles } from "./SectionGrid.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const SectionGrid = ({
  children,
  columns = 1,
  gap = "lg",
  className,
}: SectionGridProps) => {
  return (
    <div
      className={cn(
        sectionGridStyles.container,
        sectionGridStyles.columns[columns],
        sectionGridStyles.gap[gap],
        className
      )}
    >
      {children}
    </div>
  );
};

export { SectionGrid };