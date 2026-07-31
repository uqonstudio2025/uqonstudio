import type { ReactNode } from "react";

/* ==========================================================================
   Types
   ========================================================================== */

export type SectionGridColumns =
  | 1
  | 2
  | 3
  | 4;

export type SectionGridGap =
  | "sm"
  | "md"
  | "lg"
  | "xl";

/* ==========================================================================
   Props
   ========================================================================== */

export interface SectionGridProps {
  /**
   * Grid content.
   */
  readonly children: ReactNode;

  /**
   * Number of responsive columns.
   *
   * @default 1
   */
  readonly columns?: SectionGridColumns;

  /**
   * Gap between grid items.
   *
   * @default "lg"
   */
  readonly gap?: SectionGridGap;

  /**
   * Additional class names.
   */
  readonly className?: string;
}