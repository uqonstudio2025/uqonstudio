import type { IconName } from "@/lib/icons";

/* ==========================================================================
 * Brand
 * ========================================================================== */

export interface FooterBrand {
  readonly name: string;

  readonly tagline: string;

  readonly description: string;
}

/* ==========================================================================
 * CTA
 * ========================================================================== */

export interface FooterCTAContent {

  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly buttonLabel: string;

  readonly buttonHref: string;
}

/* ==========================================================================
 * Section Titles
 * ========================================================================== */

export interface FooterSectionTitles {
  readonly navigation: string;

  readonly services: string;

  readonly contact: string;

  readonly social: string;
}

/* ==========================================================================
 * Link Item
 * ========================================================================== */

export interface FooterLinkItem {
  readonly id: string;

  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
 * Link Group
 * ========================================================================== */

export interface FooterLinkGroup {
  readonly title: string;

  readonly items: readonly FooterLinkItem[];
}

/* ==========================================================================
 * Contact
 * ========================================================================== */

export interface FooterContactItem {
  readonly id: string;

  readonly label: string;

  readonly value: string;

  readonly href?: string;

  readonly icon: IconName;
}

/* ==========================================================================
 * Social
 * ========================================================================== */

export interface FooterSocialItem {
  readonly id: string;

  readonly label: string;

  readonly href: string;

  readonly icon: IconName;
}

/* ==========================================================================
 * Footer Content
 * ========================================================================== */

export interface FooterContent {
  readonly brand: FooterBrand;

  readonly cta: FooterCTAContent;

  readonly sections: FooterSectionTitles;

  readonly navigation: FooterLinkGroup;

  readonly services: FooterLinkGroup;

  readonly contact: readonly FooterContactItem[];

  readonly social: readonly FooterSocialItem[];

  readonly copyright: string;
}

/* ==========================================================================
 * Footer Component
 * ========================================================================== */

export interface FooterProps {
  readonly className?: string;

  readonly content?: FooterContent;
}

/* ==========================================================================
 * Footer CTA Component
 * ========================================================================== */

export interface FooterCTAProps {
  readonly cta: FooterCTAContent;

  readonly className?: string;
}

/* ==========================================================================
 * Footer Content Component
 * ========================================================================== */

export interface FooterContentProps {
  readonly brand: FooterBrand;

  readonly sections: FooterSectionTitles;

  readonly navigation: FooterLinkGroup;

  readonly services: FooterLinkGroup;

  readonly contact: readonly FooterContactItem[];

  readonly className?: string;
}

/* ==========================================================================
 * Footer Bottom Component
 * ========================================================================== */

export interface FooterBottomProps {
  readonly social: readonly FooterSocialItem[];

  readonly copyright: string;

  readonly className?: string;
}