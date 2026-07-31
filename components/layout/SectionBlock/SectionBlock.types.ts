import type {
  ElementType,
  HTMLAttributes,
} from "react";

import type {
  ContainerSize,
} from "../Container";

export type SectionSpacing =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export interface SectionBlockProps
  extends HTMLAttributes<HTMLElement> {
  readonly as?: ElementType;

  readonly spacing?: SectionSpacing;

  readonly container?: boolean;

  readonly containerSize?: ContainerSize;
}