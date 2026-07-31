import type {
  LucideIcon,
} from "lucide-react";

import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  CookingPot,
  Facebook,
  Factory,
  Globe,
  Hammer,
  HardHat,
  Home,
  Instagram,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PencilRuler,
  Search,
  Sofa,
  Sparkles,
  Star,
  Truck,
  Users,
  Wallet,
  Wrench,
  X,
} from "lucide-react";

/* ==========================================================================
 * Icon Registry
 * ========================================================================== */

export const icons = {
  arrowRight: ArrowRight,

  badgeCheck: BadgeCheck,

  bedDouble: BedDouble,

  building: Building2,

  calendar: CalendarDays,

  check: Check,

  chevronRight: ChevronRight,

  clock: Clock3,

  compass: Compass,

  cookingPot: CookingPot,

  facebook: Facebook,

  factory: Factory,

  globe: Globe,

  hammer: Hammer,

  hardHat: HardHat,

  home: Home,

  instagram: Instagram,

  layout: LayoutDashboard,

  mail: Mail,

  mapPin: MapPin,

  menu: Menu,

  message: MessageCircle,

  phone: Phone,

  pencil: PencilRuler,

  search: Search,

  sofa: Sofa,

  sparkles: Sparkles,

  star: Star,

  truck: Truck,

  users: Users,

  wallet: Wallet,

  wrench: Wrench,

  close: X,
} satisfies Record<
  string,
  LucideIcon
>;

/* ==========================================================================
 * Types
 * ========================================================================== */

export type IconName =
  keyof typeof icons;

/* ==========================================================================
 * Helper
 * ========================================================================== */

export function getIcon(
  name: IconName
): LucideIcon {
  return icons[name];
}