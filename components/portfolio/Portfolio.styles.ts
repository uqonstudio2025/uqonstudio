import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const portfolioStyles = {
  /**
   * Section
   */

  section: cn(
    "relative",
    "overflow-hidden"
  ),

  /**
   * Filter
   */

  filter: cn(
    "mb-12"
  ),

  /**
   * Grid
   */

  grid: cn(
    "items-stretch"
  ),
} as const;