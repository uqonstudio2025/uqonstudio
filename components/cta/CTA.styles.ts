import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const ctaStyles = {
  /**
   * Card
   */

  card: cn(
    "relative",
    "overflow-hidden",
    "rounded-[2rem]",
    "border",
    "border-white/10",
    "bg-gradient-to-br",
    "from-amber-500/10",
    "via-slate-900",
    "to-slate-950",
    "px-8",
    "py-16",
    "text-center",
    "shadow-xl",
    "lg:px-20"
  ),

  /**
   * Background Decoration
   */

  decoration: cn(
    "absolute",
    "left-1/2",
    "top-0",
    "-z-10",
    "h-[420px]",
    "w-[420px]",
    "-translate-x-1/2",
    "rounded-full",
    "bg-amber-500/15",
    "blur-[140px]"
  ),

  /**
   * Content
   */

  content: cn(
    "relative",
    "mx-auto",
    "flex",
    "max-w-3xl",
    "flex-col",
    "items-center",
    "gap-6"
  ),

  /**
   * Badge
   */

  badge: cn(
    "mb-2"
  ),

  /**
   * Title
   */

  title: cn(
    "max-w-2xl",
    "text-4xl",
    "font-bold",
    "leading-tight",
    "tracking-tight",
    "text-white",
    "md:text-5xl"
  ),

  /**
   * Description
   */

  description: cn(
    "max-w-2xl",
    "text-lg",
    "leading-8",
    "text-slate-300"
  ),

  /**
   * Button
   */

  button: cn(
    "mt-4",
    "gap-2",
    "px-8"
  ),
} as const;