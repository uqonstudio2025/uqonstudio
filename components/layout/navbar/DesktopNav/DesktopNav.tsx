"use client";

import Link from "next/link";

import {
  Button,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import {
  Logo,
} from "../Logo";

import type {
  DesktopNavProps,
} from "./DesktopNav.types";

import {
  desktopNavStyles,
} from "./DesktopNav.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const DesktopNav = ({
  logo,
  navigation,
  cta,
  className,
}: DesktopNavProps) => {
  return (
    <nav
      className={cn(
        desktopNavStyles.root,
        className
      )}
      aria-label="Primary Navigation"
    >
      <Logo
    name={logo.name}
    highlight={logo.highlight}
    href={logo.href}
/>

      <div
        className={
          desktopNavStyles.navigation
        }
      >
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={
              desktopNavStyles.link
            }
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div
        className={
          desktopNavStyles.actions
        }
      >
        <Button
          asChild
          className={
            desktopNavStyles.button
          }
        >
          <Link href={cta.href}>
            {cta.label}
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export { DesktopNav };