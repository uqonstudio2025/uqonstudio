import { cn } from "@/lib/utils";

import type {
  SectionSpacing,
} from "./SectionBlock.types";

/* ==========================================================================
   Spacing Map
   ========================================================================== */

const spacingMap: Record<
  SectionSpacing,
  string
> = {
  none: "",

  sm: `
    py-12
    lg:py-16
  `,

  md: `
    py-16
    lg:py-20
  `,

  lg: `
    py-20
    lg:py-24
  `,

  xl: `
    py-24
    lg:py-32
  `,

  "2xl": `
    py-32
    lg:py-40
  `,
};

/* ==========================================================================
   Styles
   ========================================================================== */

export const getSectionClass = (
  spacing: SectionSpacing
) =>
  cn(
    "relative w-full",
    spacingMap[spacing]
  );