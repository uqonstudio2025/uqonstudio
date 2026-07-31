import type { ReactNode } from "react";

import type { DivProps } from "@/types";

export interface GlassCardProps
  extends Omit<
    DivProps,
    "children"
  > {
  children?: ReactNode;

  hover?: boolean;

  border?: boolean;

  blur?: boolean;

  gradient?: boolean;
}