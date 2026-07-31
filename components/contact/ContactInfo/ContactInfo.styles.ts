import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const contactInfoStyles = {
  /**
   * Wrapper
   */

  wrapper: cn(
    "h-full"
  ),

  /**
   * Card
   */

  card: cn(
    "h-full",
    "rounded-3xl",
    "p-8",
    "shadow-sm"
  ),

  /**
   * Card Content
   */

  cardContent: cn(
    "mt-8"
  ),

  /**
   * List
   */

  list: cn(
    "flex",
    "flex-col",
    "gap-5"
  ),

  /**
   * Item
   */

  item: cn(
    "flex",
    "items-start",
    "gap-4",
    "rounded-2xl",
    "border",
    "border-white/10",
    "bg-white/5",
    "p-4",
    "transition-all",
    "duration-300",
    "hover:border-amber-400/30",
    "hover:bg-white/10"
  ),

  /**
   * Icon
   */

  icon: cn(
    "flex",
    "size-12",
    "shrink-0",
    "items-center",
    "justify-center",
    "rounded-xl",
    "bg-amber-500/10",
    "text-amber-400"
  ),

  /**
   * Content
   */

  infoContent: cn(
    "flex",
    "min-w-0",
    "flex-1",
    "flex-col",
    "gap-1"
  ),

  /**
   * Typography
   */

  title: cn(
    "text-sm",
    "font-semibold",
    "text-slate-100"
  ),

  value: cn(
    "text-sm",
    "leading-relaxed",
    "text-slate-400"
  ),
} as const;