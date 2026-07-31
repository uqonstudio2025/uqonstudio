import type {
  AboutStat,
} from "../About.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface AboutStatsProps {
  /**
   * Statistics.
   */
  readonly stats: readonly AboutStat[];

  /**
   * Additional class names.
   */
  readonly className?: string;
}