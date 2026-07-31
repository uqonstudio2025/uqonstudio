"use client";

import { cn } from "@/lib/utils";

import type { GlowProps } from "./Glow.types";

const sizes = {
  sm: "h-48 w-48",

  md: "h-72 w-72",

  lg: "h-[34rem] w-[34rem]",
} as const;

const positions = {
  center:
    "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",

  "top-left":
    "-left-24 -top-24",

  "top-right":
    "-right-24 -top-24",

  "bottom-left":
    "-left-24 -bottom-24",

  "bottom-right":
    "-right-24 -bottom-24",
} as const;

export default function Glow({
  size = "md",
  position = "center",
  className,
  ...props
}: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full bg-amber-400/20 blur-[140px]",
        sizes[size],
        positions[position],
        className
      )}
      {...props}
    />
  );
}