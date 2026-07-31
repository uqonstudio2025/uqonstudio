import type {
  HTMLAttributes,
} from "react";

export interface GlowProps
  extends HTMLAttributes<HTMLDivElement> {
  size?:
    | "sm"
    | "md"
    | "lg";

  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
}