import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const footerContentStyles = {
  /**
   * ==========================================
   * Grid
   * ==========================================
   */

  grid: cn(
    "grid",
    "gap-12",
    "py-16",
    "md:grid-cols-2",
    "xl:grid-cols-4"
  ),

  /**
   * ==========================================
   * Column
   * ==========================================
   */

  column: cn(
    "flex",
    "flex-col",
    "gap-5"
  ),

  /**
   * ==========================================
   * Brand
   * ==========================================
   */

  brand: cn(
    "flex",
    "flex-col",
    "gap-5"
  ),

  brandName: cn(
    "text-2xl",
    "font-bold",
    "tracking-tight"
  ),

  description: cn(
    "text-sm",
    "leading-7",
    "text-muted-foreground"
  ),

  /**
   * ==========================================
   * Navigation
   * ==========================================
   */

  columnTitle: cn(
    "text-sm",
    "font-semibold",
    "tracking-wide",
    "uppercase"
  ),

  list: cn(
    "flex",
    "flex-col",
    "gap-3"
  ),

  link: cn(
    "text-sm",
    "text-muted-foreground",
    "transition-colors",
    "hover:text-primary"
  ),

  /**
   * ==========================================
   * Contact
   * ==========================================
   */

  contact: cn(
    "flex",
    "gap-3"
  ),

  contactIcon: cn(
    "mt-0.5",
    "text-primary"
  ),

  contactContent: cn(
    "flex",
    "flex-col"
  ),

  contactLabel: cn(
    "text-xs",
    "text-muted-foreground"
  ),

  contactValue: cn(
    "text-sm",
    "font-medium"
  ),
} as const;