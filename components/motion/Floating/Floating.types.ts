import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";

export interface FloatingProps
  extends Omit<
    HTMLMotionProps<"div">,
    "children"
  > {
  children: ReactNode;

  /**
   * Floating distance (px)
   * @default 12
   */
  distance?: number;

  /**
   * Animation duration
   * @default 4
   */
  duration?: number;

  /**
   * Delay animation
   * @default 0
   */
  delay?: number;
}