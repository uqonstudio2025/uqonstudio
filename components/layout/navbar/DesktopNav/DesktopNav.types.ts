import type {
  NavigationItem,
  NavbarCTA,
  NavbarLogo,
} from "../Navbar.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface DesktopNavProps {
  /**
   * Logo configuration.
   */
  readonly logo: NavbarLogo;

  /**
   * Navigation items.
   */
  readonly navigation: readonly NavigationItem[];

  /**
   * Call-to-action button.
   */
  readonly cta: NavbarCTA;

  /**
   * Additional class names.
   */
  readonly className?: string;
}