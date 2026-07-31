import type {
  HTMLMotionProps,
} from "framer-motion";

export interface CounterProps
  extends Omit<
    HTMLMotionProps<"span">,
    "children"
  > {
  /**
   * Target value.
   */
  value: number;

  /**
   * Start value.
   * @default 0
   */
  from?: number;

  /**
   * Animation duration (seconds).
   * @default 2
   */
  duration?: number;

  /**
   * Text before number.
   */
  prefix?: string;

  /**
   * Text after number.
   */
  suffix?: string;

  /**
   * Decimal precision.
   * @default 0
   */
  decimals?: number;

  /**
   * Use thousand separator.
   * @default false
   */
  separator?: boolean;
}