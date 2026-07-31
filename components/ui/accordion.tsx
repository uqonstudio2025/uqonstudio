"use client";

import * as React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Root
   ========================================================================== */

const Accordion = AccordionPrimitive.Root;

/* ==========================================================================
   Item
   ========================================================================== */

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn(
      "overflow-hidden",
      "rounded-xl",
      "border",
      "border-[var(--color-border)]",
      "glass",
      "transition-base",
      className
    )}
    {...props}
  />
));

AccordionItem.displayName =
  AccordionPrimitive.Item.displayName;

/* ==========================================================================
   Trigger
   ========================================================================== */

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        "group",
        "flex",
        "flex-1",
        "items-center",
        "justify-between",
        "gap-4",

        "px-6",
        "py-5",

        "text-left",
        "text-base",
        "font-semibold",

        "transition-base",

        "hover:text-[var(--color-primary)]",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-ring)]",

        className
      )}
      {...props}
    >
      <div className="flex-1">
        {children}
      </div>
      
      <ChevronDown
        className={cn(
          "h-5",
          "w-5",
          "shrink-0", 
          "transition-transform",
          "duration-300",
          "group-data-[state=open]:rotate-180"
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName =
  AccordionPrimitive.Trigger.displayName;

/* ==========================================================================
   Content
   ========================================================================== */

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
        className
    )}
    {...props}
    >
    {children}
    </AccordionPrimitive.Content>
));

AccordionContent.displayName =
  AccordionPrimitive.Content.displayName;

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
};