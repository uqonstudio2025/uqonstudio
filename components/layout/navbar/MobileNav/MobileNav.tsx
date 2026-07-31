"use client";

import Link from "next/link";

import {
  Menu,
} from "lucide-react";

import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import {
  Logo,
} from "../Logo";

import type {
  MobileNavProps,
} from "./MobileNav.types";

import {
  mobileNavStyles,
} from "./MobileNav.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const MobileNav = ({
  logo,
  navigation,
  cta,
  open,
  onOpenChange,
  className,
}: MobileNavProps) => {
  return (
    <nav
      className={cn(
        mobileNavStyles.root,
        className
      )}
      aria-label="Mobile Navigation"
    >
      <Logo
        name={logo.name}
        highlight={logo.highlight}
        href={logo.href}
      />

      <Sheet
        open={open}
        onOpenChange={onOpenChange}
      >
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={
              mobileNavStyles.trigger
            }
          >
            <Menu size={22} />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <div
            className={
              mobileNavStyles.content
            }
          >
            <div
              className={
                mobileNavStyles.navigation
              }
            >
              {navigation.map(
                (item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={
                      mobileNavStyles.link
                    }
                    onClick={() =>
                      onOpenChange(false)
                    }
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <div
              className={
                mobileNavStyles.footer
              }
            >
              <Button
                asChild
                className={
                  mobileNavStyles.button
                }
              >
                <Link
                  href={cta.href}
                  onClick={() =>
                    onOpenChange(false)
                  }
                >
                  {cta.label}
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { MobileNav };