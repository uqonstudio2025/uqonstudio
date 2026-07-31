/* ==========================================================================
   Feature
   ========================================================================== */

export interface AboutFeature {
  readonly id: string;

  readonly title: string;

  readonly description: string;
}

/* ==========================================================================
   Statistic
   ========================================================================== */

export interface AboutStat {
  readonly id: string;

  readonly value: string;

  readonly label: string;
}

/* ==========================================================================
   CTA
   ========================================================================== */

export interface AboutCTA {
  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Image
   ========================================================================== */

export interface AboutImage {
  readonly src: string;

  readonly alt: string;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface AboutContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly features: readonly AboutFeature[];

  readonly stats: readonly AboutStat[];

  readonly image: AboutImage;

  readonly cta: AboutCTA;
}