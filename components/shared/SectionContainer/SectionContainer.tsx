"use client";

import { cn } from "@/lib/utils";

import type { SectionContainerProps } from "./SectionContainer.types";

import { sectionContainerStyles } from "./SectionContainer.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const SectionContainer = ({
  children,
  size = "xl",
  className,
}: SectionContainerProps) => {
  return (
    <div
      className={cn(
        sectionContainerStyles.container,
        sectionContainerStyles.size[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export { SectionContainer };