/* ==========================================================================
   Navigation Item
   ========================================================================== */

export interface NavigationItem {
  readonly id: string;

  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Logo
   ========================================================================== */

export interface NavbarLogo {
  readonly name: string;

  readonly highlight?: string;

  readonly href: string;
}

/* ==========================================================================
   CTA
   ========================================================================== */

export interface NavbarCTA {
  readonly label: string;

  readonly href: string;
}

/* ==========================================================================
   Content
   ========================================================================== */

export interface NavbarContent {
  readonly logo: NavbarLogo;

  readonly navigation: readonly NavigationItem[];

  readonly cta: NavbarCTA;
}