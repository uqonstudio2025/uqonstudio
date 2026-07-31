import type {
  PortfolioItem,
} from "../Portfolio.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface PortfolioCardProps {
  /**
   * Portfolio item.
   */
  readonly project: PortfolioItem;

  /**
   * Additional class names.
   */
  readonly className?: string;
}