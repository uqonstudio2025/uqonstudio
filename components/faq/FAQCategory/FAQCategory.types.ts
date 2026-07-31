import type { FAQCategoryItem } from "../FAQ.types";

/* ==========================================================================
   FAQ Category Props
   ========================================================================== */

export interface FAQCategoryProps {
  /**
   * Available FAQ categories.
   */
  readonly categories: readonly FAQCategoryItem[];

  /**
   * Currently active category id.
   */
  readonly activeCategory: string;

  /**
   * Fired when the active category changes.
   */
  readonly onChange: (categoryId: string) => void;

  /**
   * Optional additional class names.
   */
  readonly className?: string;
}