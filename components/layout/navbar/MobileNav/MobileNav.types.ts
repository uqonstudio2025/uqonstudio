import type {
  NavigationItem,
  NavbarCTA,
  NavbarLogo,
} from "../Navbar.types";

/* ==========================================================================
   Props
   ========================================================================== */

export interface MobileNavProps {
  readonly logo: NavbarLogo;

  readonly navigation: readonly NavigationItem[];

  readonly cta: NavbarCTA;

  readonly open: boolean;

  readonly onOpenChange: (
    open: boolean
  ) => void;

  readonly className?: string;
}