import type {
  HTMLAttributes,
} from "react";

/* ==========================================================================
   Types
   ========================================================================== */

export type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;

export type GridGap =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export type GridAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  readonly columns?: GridColumns;

  readonly gap?: GridGap;

  readonly align?: GridAlign;
}