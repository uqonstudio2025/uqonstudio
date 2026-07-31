/* ==========================================================================
   Types
   ========================================================================== */

export type SectionHeaderAlignment =
  | "left"
  | "center";

export type SectionHeaderMaxWidth =
  | "md"
  | "lg"
  | "xl";

/* ==========================================================================
   Props
   ========================================================================== */

export interface SectionHeaderProps {
  /**
   * Optional badge displayed above the title.
   */
  readonly badge?: string;

  /**
   * Section title.
   */
  readonly title: string;

  /**
   * Optional supporting description.
   */
  readonly description?: string;

  /**
   * Header alignment.
   *
   * @default "center"
   */
  readonly align?: SectionHeaderAlignment;

  /**
   * Maximum content width.
   *
   * @default "lg"
   */
  readonly maxWidth?: SectionHeaderMaxWidth;

  /**
   * Additional class names.
   */
  readonly className?: string;

  /**
   * Badge class override.
   */
  readonly badgeClassName?: string;

  /**
   * Title class override.
   */
  readonly titleClassName?: string;

  /**
   * Description class override.
   */
  readonly descriptionClassName?: string;
}