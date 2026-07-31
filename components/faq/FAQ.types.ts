/* ==========================================================================
   FAQ Item
   ========================================================================== */

export interface FAQItem {
  readonly id: string;

  readonly category: string;

  readonly question: string;

  readonly answer: string;
}

/* ==========================================================================
   FAQ Content
   ========================================================================== */

export interface FAQContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly categories: readonly FAQCategoryItem[];

  readonly items: readonly FAQItem[];
}

/* ==========================================================================
   FAQ Category
   ========================================================================== */

export interface FAQCategoryItem {
  readonly id: string;
  readonly label: string;
}