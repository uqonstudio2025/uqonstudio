"use client";

import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import {
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ==========================================================================
   Root
   ========================================================================== */

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

/* ==========================================================================
   Trigger
   ========================================================================== */

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot="select-trigger"
    className={cn(
      "flex",
      "h-11",
      "w-full",
      "items-center",
      "justify-between",
      "gap-2",

      "rounded-xl",

      "border",
      "border-[var(--color-input)]",

      "bg-transparent",

      "px-4",
      "py-2",

      "text-sm",
      "text-[var(--color-foreground)]",

      "shadow-sm",

      "transition-base",

      "focus-visible:outline-none",
      "focus-visible:ring-2",
      "focus-visible:ring-[var(--color-ring)]",

      "disabled:pointer-events-none",
      "disabled:cursor-not-allowed",
      "disabled:opacity-50",

      "[&>span]:truncate",

      className
    )}
    {...props}
  >
    {children}

    <SelectPrimitive.Icon
      asChild
    >
      <ChevronDown
        className="h-4 w-4 opacity-60"
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName =
  SelectPrimitive.Trigger.displayName;

/* ==========================================================================
   Scroll Buttons
   ========================================================================== */

const SelectScrollUpButton =
  React.forwardRef<
    React.ElementRef<
      typeof SelectPrimitive.ScrollUpButton
    >,
    React.ComponentPropsWithoutRef<
      typeof SelectPrimitive.ScrollUpButton
    >
  >(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollUpButton
      ref={ref}
      data-slot="select-scroll-up"
      className={cn(
        "flex",
        "cursor-default",
        "items-center",
        "justify-center",
        "py-2",
        className
      )}
      {...props}
    >
      <ChevronUp
        className="h-4 w-4"
      />
    </SelectPrimitive.ScrollUpButton>
  ));

SelectScrollUpButton.displayName =
  SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton =
  React.forwardRef<
    React.ElementRef<
      typeof SelectPrimitive.ScrollDownButton
    >,
    React.ComponentPropsWithoutRef<
      typeof SelectPrimitive.ScrollDownButton
    >
  >(({ className, ...props }, ref) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      data-slot="select-scroll-down"
      className={cn(
        "flex",
        "cursor-default",
        "items-center",
        "justify-center",
        "py-2",
        className
      )}
      {...props}
    >
      <ChevronDown
        className="h-4 w-4"
      />
    </SelectPrimitive.ScrollDownButton>
  ));

SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

/* ==========================================================================
   Content
   ========================================================================== */

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(
  (
    {
      className,
      children,
      position = "popper",
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        data-slot="select-content"
        position={position}
        className={cn(
          "relative",
          "z-50",
          "max-h-96",
          "min-w-[8rem]",
          "overflow-hidden",

          "rounded-xl",

          "border",
          "border-[var(--color-border)]",

          "bg-[var(--color-popover)]",
          "text-[var(--color-popover-foreground)]",

          "shadow-lg",

          "animate-in",
          "fade-in-0",
          "zoom-in-95",

          position === "popper" && [
            "data-[side=bottom]:translate-y-1",
            "data-[side=top]:-translate-y-1",
            "data-[side=left]:-translate-x-1",
            "data-[side=right]:translate-x-1",
          ],

          className
        )}
        {...props}
      >
        <SelectScrollUpButton />

        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" && [
              "h-[var(--radix-select-trigger-height)]",
              "min-w-[var(--radix-select-trigger-width)]",
            ]
          )}
        >
          {children}
        </SelectPrimitive.Viewport>

        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);

SelectContent.displayName =
  SelectPrimitive.Content.displayName;

/* ==========================================================================
   Label
   ========================================================================== */

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot="select-label"
    className={cn(
      "px-2",
      "py-1.5",
      "text-sm",
      "font-semibold",
      className
    )}
    {...props}
  />
));

SelectLabel.displayName =
  SelectPrimitive.Label.displayName;

/* ==========================================================================
   Item
   ========================================================================== */

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot="select-item"
    className={cn(
      "relative",
      "flex",
      "w-full",
      "cursor-default",
      "select-none",
      "items-center",

      "rounded-lg",

      "py-2",
      "pl-8",
      "pr-2",

      "text-sm",

      "outline-none",

      "transition-base",

      "focus:bg-[var(--color-accent)]",
      "focus:text-[var(--color-accent-foreground)]",

      "data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",

      className
    )}
    {...props}
  >
    <span
      className={cn(
        "absolute",
        "left-2",
        "flex",
        "h-4",
        "w-4",
        "items-center",
        "justify-center"
      )}
    >
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>
      {children}
    </SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName =
  SelectPrimitive.Item.displayName;

/* ==========================================================================
   Separator
   ========================================================================== */

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-slot="select-separator"
    className={cn(
      "-mx-1",
      "my-1",
      "h-px",
      "bg-[var(--color-border)]",
      className
    )}
    {...props}
  />
));

SelectSeparator.displayName =
  SelectPrimitive.Separator.displayName;

/* ==========================================================================
   Exports
   ========================================================================== */

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};