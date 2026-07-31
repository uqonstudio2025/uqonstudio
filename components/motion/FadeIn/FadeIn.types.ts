import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

export interface FadeInProps
  extends Omit<
    HTMLMotionProps<"div">,
    "children"
  > {
  children: ReactNode;

  /**
   * Delay animation (seconds)
   * @default 0
   */
  delay?: number;

  /**
   * Duration animation (seconds)
   * @default 0.6
   */
  duration?: number;

  /**
   * Initial translate Y
   * @default 24
   */
  y?: number;

  /**
   * Play animation only once.
   * @default true
   */
  once?: boolean;
}