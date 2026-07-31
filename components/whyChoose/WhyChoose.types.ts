import type { IconName } from "@/lib/icons";
 
/* ==========================================================================
   Item
   ========================================================================== */

export interface WhyChooseItem {
  readonly id: string;

  readonly title: string;

  readonly description: string;

  readonly icon: IconName;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface WhyChooseContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly items: readonly WhyChooseItem[];
}