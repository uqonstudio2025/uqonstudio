import type { ReactNode } from "react";

/* ==========================================================================
   Types
   ========================================================================== */

export type SectionContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/* ==========================================================================
   Props
   ========================================================================== */

export interface SectionContainerProps {
  /**
   * Container content.
   */
  readonly children: ReactNode;

  /**
   * Maximum container width.
   *
   * @default "xl"
   */
  readonly size?: SectionContainerSize;

  /**
   * Additional class names.
   */
  readonly className?: string;
}