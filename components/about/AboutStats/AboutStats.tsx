"use client";

import { Card, Span } from "@/components/ui";

import { cn } from "@/lib/utils";

import type { AboutStatsProps } from "./AboutStats.types";

import {
  AboutStatsWrapper,
  aboutStatsStyles,
} from "./AboutStats.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const AboutStats = ({
  stats,
  className,
}: AboutStatsProps) => {
  return (
    <AboutStatsWrapper
      className={cn(
        aboutStatsStyles.wrapper,
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
      <div
        className={
          aboutStatsStyles.grid
        }
      >
        {stats.map((stat, index) => (
          <Card
            key={stat.id}
            className={
              aboutStatsStyles.card
            }
          >
            <Span
              weight="bold"
              className={
                aboutStatsStyles.value
              }
            >
              {stat.value}
            </Span>

            <Span
              variant="muted"
              className={
                aboutStatsStyles.label
              }
            >
              {stat.label}
            </Span>
          </Card>
        ))}
      </div>
    </AboutStatsWrapper>
  );
};

export { AboutStats };