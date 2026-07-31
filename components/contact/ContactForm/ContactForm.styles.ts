// import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/* ==========================================================================
 * Motion Components
 * ========================================================================== */

// export const ContactFormWrapper = motion.div;

// export const ContactFormCard = motion.div;

// export const ContactFormContent = motion.form;

// export const ContactFormGrid = motion.div;

// export const ContactFormField = motion.div;

// export const ContactFormFooter = motion.div;

/* ==========================================================================
 * Styles
 * ========================================================================== */

export const contactFormStyles = {
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

  content: cn(
    "mt-8"
  ),

  /**
   * Form
   */

  form: cn(
    "space-y-6"
  ),

  grid: cn(
    "grid",
    "grid-cols-2",
    "gap-6"
  ),

  field: cn(
    "space-y-2"
  ),

  fullWidth: cn(
    "col-span-2"
  ),

  /**
   * Footer
   */

  footer: cn(
    "pt-2"
  ),

  submitButton: cn(
    "w-full",
    "md:w-auto"
  ),
} as const;