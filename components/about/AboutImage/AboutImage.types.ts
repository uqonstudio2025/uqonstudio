import type {
  AboutImage,
} from "../About.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface AboutImageProps {
  /**
   * About image.
   */
  readonly image: AboutImage;

  /**
   * Additional class names.
   */
  readonly className?: string;
}