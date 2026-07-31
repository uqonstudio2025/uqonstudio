/* ==========================================================================
   Button
   ========================================================================== */

export interface HeroButton {
  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Image
   ========================================================================== */

export interface HeroSectionImage {
  readonly src: string;

  readonly alt: string;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface HeroSectionContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly primaryButton: HeroButton;

  readonly secondaryButton: HeroButton;

  readonly image: HeroSectionImage;
}