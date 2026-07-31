"use client";

import {
  ArrowRight,
  FolderOpen,
} from "lucide-react";

import {
  Badge,
  Button,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  HeroContentProps,
} from "./HeroContent.types";

import {
  HeroContentWrapper,
  heroContentStyles,
} from "./HeroContent.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const HeroContent = ({
  content,
  className,
}: HeroContentProps) => {
  return (
    <HeroContentWrapper
      className={cn(
        heroContentStyles.wrapper,
        className
      )}
      initial={{
        opacity: 0,
        x: -32,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <Badge
        variant="glass"
        className={
          heroContentStyles.badge
        }
      >
        {content.badge}
      </Badge>

      <h1
        className={
          heroContentStyles.title
        }
      >
        {content.title}
      </h1>

      <p
        className={
          heroContentStyles.description
        }
      >
        {content.description}
      </p>

      <div
        className={
          heroContentStyles.actions
        }
      >
        <Button
          asChild
          size="lg"
          className={
            heroContentStyles.primaryButton
          }
        >
          <a
            href={
              content.primaryButton.href
            }
          >
            {content.primaryButton.label}

            <ArrowRight size={18} />
          </a>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className={
            heroContentStyles.secondaryButton
          }
        >
          <a
            href={
              content.secondaryButton.href
            }
          >
            <FolderOpen size={18} />

            {content.secondaryButton.label}
          </a>
        </Button>
      </div>
    </HeroContentWrapper>
  );
};

export { HeroContent };