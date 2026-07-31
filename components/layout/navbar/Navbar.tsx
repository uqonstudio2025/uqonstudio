"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import {
  navigationContent,
} from "@/data/navigation";

import {
  DesktopNav,
} from "./DesktopNav";

import {
  MobileNav,
} from "./MobileNav";

import {
  navbarStyles,
} from "./Navbar.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Navbar = () => {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 24
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={cn(
        navbarStyles.root,
        scrolled &&
          navbarStyles.scrolled
      )}
    >
      <div
        className={
          navbarStyles.container
        }
      >
        <DesktopNav
          logo={navigationContent.logo}
          navigation={
            navigationContent.navigation
          }
          cta={navigationContent.cta}
        />

        <MobileNav
          logo={navigationContent.logo}
          navigation={
            navigationContent.navigation
          }
          cta={navigationContent.cta}
          open={mobileOpen}
          onOpenChange={
            setMobileOpen
          }
        />
      </div>
    </header>
  );
};

export { Navbar };