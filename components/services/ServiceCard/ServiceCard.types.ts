import type {
  ServiceItem,
} from "../Services.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface ServiceCardProps {
  /**
   * Service item.
   */
  readonly service: ServiceItem;

  /**
   * Additional class names.
   */
  readonly className?: string;
}