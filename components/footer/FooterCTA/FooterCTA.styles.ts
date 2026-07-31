import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const footerCTAStyles = {
  /**
   * ==========================================
   * Root
   * ==========================================
   */

  card: cn(
    "relative",
    "overflow-hidden",
    "rounded-3xl",
    "border",
    "mb-20"
  ),

  decoration: cn(
    "absolute",
    "inset-0",
    "bg-gradient-to-br",
    "from-primary/10",
    "via-transparent",
    "to-primary/5",
    "pointer-events-none"
  ),

  content: cn(
    "relative",
    "flex",
    "flex-col",
    "gap-8",
    "items-center",
    "justify-between",
    "px-8",
    "py-12",
    "text-center",
    "lg:flex-row",
    "lg:px-14",
    "lg:py-16",
    "lg:text-left"
  ),

  /**
   * ==========================================
   * Text
   * ==========================================
   */

  text: cn(
    "max-w-2xl"
  ),

  badge: cn(
    "mb-5"
  ),

  title: cn(
    "text-3xl",
    "font-bold",
    "tracking-tight",
    "text-foreground",
    "sm:text-4xl"
  ),

  description: cn(
    "mt-5",
    "text-base",
    "leading-8",
    "text-muted-foreground"
  ),

  /**
   * ==========================================
   * Action
   * ==========================================
   */

  action: cn(
    "shrink-0"
  ),

  button: cn(
    "gap-2"
  ),
} as const;