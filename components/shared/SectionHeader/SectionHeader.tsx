"use client";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui";

import type { SectionHeaderProps } from "./SectionHeader.types";

import {
  SectionHeaderContainer,
  sectionHeaderStyles,
} from "./SectionHeader.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const SectionHeader = ({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "lg",
  className,
  badgeClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer
      className={cn(
        sectionHeaderStyles.container,
        sectionHeaderStyles.alignments[
          align
        ],
        sectionHeaderStyles.maxWidth[
          maxWidth
        ],
        className
      )}
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {badge && (
        <Badge
          variant="glass"
          className={cn(
            sectionHeaderStyles.badge,
            align === "center" &&
              sectionHeaderStyles
                .badgeCenter,
            badgeClassName
          )}
        >
          {badge}
        </Badge>
      )}

      <h2
        className={cn(
          sectionHeaderStyles.title,
          titleClassName
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            sectionHeaderStyles
              .description,
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </SectionHeaderContainer>
  );
};

export { SectionHeader };