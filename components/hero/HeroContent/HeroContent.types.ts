import type {
  HeroSectionContent,
} from "../Hero.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface HeroContentProps {
  /**
   * Hero content.
   */
  readonly content: HeroSectionContent;

  /**
   * Additional class names.
   */
  readonly className?: string;
}