import type {
  AboutContent,
} from "../About.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface AboutContentProps {
  /**
   * About section content.
   */
  readonly content: AboutContent;

  /**
   * Additional class names.
   */
  readonly className?: string;
}