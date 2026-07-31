/* ==========================================================================
   Category
   ========================================================================== */

export interface PortfolioCategory {
  readonly id: string;

  readonly label: string;
}

/* ==========================================================================
   Tag
   ========================================================================== */

export interface PortfolioTag {
  readonly id: string;

  readonly label: string;
}

/* ==========================================================================
   CTA
   ========================================================================== */

export interface PortfolioCTA {
  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Item
   ========================================================================== */

export interface PortfolioItem {
  readonly id: string;

  readonly title: string;

  readonly category: string;

  readonly image: string;

  readonly location: string;

  readonly description: string;

  readonly tags: readonly PortfolioTag[];

  readonly cta: PortfolioCTA;

  readonly featured?: boolean;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface PortfolioContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly categories: readonly PortfolioCategory[];

  readonly items: readonly PortfolioItem[];
}