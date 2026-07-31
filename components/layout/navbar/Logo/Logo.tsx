"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import type {
  LogoProps,
} from "./Logo.types";

import {
  logoStyles,
} from "./Logo.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Logo = ({
  name,
  highlight,
  href,
  className,
}: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn(
        logoStyles.root,
        className
      )}
      aria-label={
        highlight
          ? `${name}${highlight}`
          : name
      }
    >
      <span
        className={
          logoStyles.text
        }
      >
        {name}

        {highlight && (
          <span
            className={
              logoStyles.accent
            }
          >
            {highlight}
          </span>
        )}
      </span>
    </Link>
  );
};

export { Logo };