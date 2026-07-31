import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const footerBottomStyles = {
  /**
   * ==========================================
   * Root
   * ==========================================
   */

  root: cn(
    "mt-16",
    "flex",
    "flex-col",
    "items-center",
    "justify-between",
    "gap-6",
    "border-t",
    "pt-8",
    "md:flex-row"
  ),

  /**
   * ==========================================
   * Copyright
   * ==========================================
   */

  copyright: cn(
    "text-sm",
    "text-muted-foreground"
  ),

  /**
   * ==========================================
   * Social
   * ==========================================
   */

  social: cn(
    "flex",
    "items-center",
    "gap-3"
  ),

  socialItem: cn(
    "flex",
    "h-10",
    "w-10",
    "items-center",
    "justify-center",
    "rounded-full",
    "border",
    "transition-colors",
    "hover:border-primary",
    "hover:text-primary"
  ),
} as const;