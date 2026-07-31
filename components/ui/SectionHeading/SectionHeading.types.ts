import type {
  HTMLAttributes,
  ReactNode,
} from "react";

export type SectionHeadingAlign =
  | "left"
  | "center";

export interface SectionHeadingProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "title"
  > {
  badge?: ReactNode;

  title: ReactNode;

  description?: ReactNode;

  align?: SectionHeadingAlign;

  maxWidth?: "sm" | "md" | "lg";
}