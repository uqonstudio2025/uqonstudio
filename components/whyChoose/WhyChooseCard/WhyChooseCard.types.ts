import type {
  WhyChooseItem,
} from "../WhyChoose.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface WhyChooseCardProps {
  /**
   * Why Choose item.
   */
  readonly item: WhyChooseItem;

  /**
   * Additional class names.
   */
  readonly className?: string;
}