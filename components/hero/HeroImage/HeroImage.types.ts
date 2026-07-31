import type {
  HeroSectionImage,
} from "../Hero.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface HeroImageProps {
  /**
   * Hero image.
   */
  readonly image: HeroSectionImage;

  /**
   * Additional class names.
   */
  readonly className?: string;
}