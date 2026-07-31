"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface LogoWordmarkProps {
  variant?: "light" | "dark" | "amber";
  stacked?: boolean;
  animated?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const palette = {
  light: {
    text: "#F8FAFC",
    accent: "#F59E0B",
  },

  dark: {
    text: "#020617",
    accent: "#F59E0B",
  },

  amber: {
    text: "#F59E0B",
    accent: "#FFFFFF",
  },
};

const sizes = {
  sm: {
    title: "text-lg",
    subtitle: "text-[10px]",
    tracking: "tracking-[0.35em]",
  },

  md: {
    title: "text-2xl",
    subtitle: "text-xs",
    tracking: "tracking-[0.42em]",
  },

  lg: {
    title: "text-4xl",
    subtitle: "text-sm",
    tracking: "tracking-[0.48em]",
  },

  xl: {
    title: "text-6xl",
    subtitle: "text-base",
    tracking: "tracking-[0.55em]",
  },
};

export default function LogoWordmark({
  variant = "light",
  stacked = false,
  animated = false,
  size = "md",
  className,
}: LogoWordmarkProps) {
  const color = palette[variant];
  const font = sizes[size];

  const MotionDiv = animated ? motion.div : "div";

  return (
    <MotionDiv
      initial={
        animated
          ? {
              opacity: 0,
              y: 12,
            }
          : undefined
      }
      animate={
        animated
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{
        duration: 0.55,
      }}
      className={cn(
        stacked
          ? "flex flex-col items-start"
          : "flex items-center gap-3",
        className
      )}
    >
      {stacked ? (
        <>
          <span
            className={cn(
              "font-black leading-none tracking-tight",
              font.title
            )}
            style={{
              color: color.text,
            }}
          >
            UQON
          </span>

          <span
            className={cn(
              "mt-1 font-semibold uppercase leading-none",
              font.subtitle,
              font.tracking
            )}
            style={{
              color: color.accent,
            }}
          >
            STUDIO
          </span>
        </>
      ) : (
        <>
          <span
            className={cn(
              "font-black leading-none tracking-tight",
              font.title
            )}
            style={{
              color: color.text,
            }}
          >
            UQON
          </span>

          <span
            className={cn(
              "font-medium uppercase",
              font.subtitle,
              font.tracking
            )}
            style={{
              color: color.accent,
            }}
          >
            STUDIO
          </span>
        </>
      )}
    </MotionDiv>
  );
}