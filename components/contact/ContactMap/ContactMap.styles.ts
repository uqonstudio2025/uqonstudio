import { cn } from "@/lib/utils";

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const contactMapStyles = {
  wrapper: cn(
    "mt-10"
  ),

  card: cn(
    "overflow-hidden",
    "rounded-3xl",
    "border",
    "border-white/10",
    "shadow-sm"
  ),

  iframe: cn(
    "h-[420px]",
    "w-full",
    "border-0"
  ),
} as const;