import type {
  ElementType,
  HTMLAttributes,
} from "react";

/* ==========================================================================
   Types
   ========================================================================== */

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "content"
  | "full";

export interface ContainerProps
  extends HTMLAttributes<HTMLElement> {
  readonly as?: ElementType;

  readonly size?: ContainerSize;

  readonly centered?: boolean;
}