import * as React from "react";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Card
   ========================================================================== */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card"
    className={cn(
      "rounded-2xl",
      "border",
      "border-[var(--color-border)]",
      "bg-[var(--color-card)]",
      "text-[var(--color-card-foreground)]",
      "shadow-card",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

/* ==========================================================================
   Header
   ========================================================================== */

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      "flex",
      "flex-col",
      "space-y-2",
      "p-6",
      className
    )}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

/* ==========================================================================
   Title
   ========================================================================== */

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn(
      "text-xl",
      "font-semibold",
      "leading-none",
      "tracking-tight",
      className
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

/* ==========================================================================
   Description
   ========================================================================== */

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn(
      "text-sm",
      "leading-6",
      "text-[var(--color-muted-foreground)]",
      className
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

/* ==========================================================================
   Content
   ========================================================================== */

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn(
      "p-6",
      "pt-0",
      className
    )}
    {...props}
  />
));

CardContent.displayName = "CardContent";

/* ==========================================================================
   Footer
   ========================================================================== */

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn(
      "flex",
      "items-center",
      "p-6",
      "pt-0",
      className
    )}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};