/* ==========================================================================
   Button
   ========================================================================== */

export interface CTAButton {
  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface CTAContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly button: CTAButton;
}