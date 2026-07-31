import type { IconName } from "@/lib/icons";
 
/* ==========================================================================
   Service
   ========================================================================== */

export interface ServiceFeature {
  readonly id: string;
  readonly label: string;
}

export interface ServiceCTA {
  readonly label: string;
  readonly href: string;
}

export interface ServiceItem {
  readonly id: string;

  readonly icon: IconName;

  readonly title: string;

  readonly description: string;

  readonly features: readonly ServiceFeature[];

  readonly cta: ServiceCTA;

  readonly highlight?: boolean;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface ServicesContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly items: readonly ServiceItem[];
}