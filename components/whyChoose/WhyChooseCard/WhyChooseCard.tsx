"use client";

import { Card, Span } from "@/components/ui";

import { cn } from "@/lib/utils";

import type { WhyChooseCardProps } from "./WhyChooseCard.types";

import {
  WhyChooseCardWrapper,
  whyChooseCardStyles,
} from "./WhyChooseCard.styles";

import { getIcon } from "@/lib/icons";


/* ==========================================================================
   Component
   ========================================================================== */

const WhyChooseCard = ({
  item,
  className,
}: WhyChooseCardProps) => {
  const Icon = getIcon(item.icon);

  return (
    <WhyChooseCardWrapper
      className={cn(
        whyChooseCardStyles.wrapper,
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
        duration: 0.45,
      }}
    >
      <Card
        className={
          whyChooseCardStyles.card
        }
      >
        <div
          className={
            whyChooseCardStyles.icon
          }
        >
          <Icon size={24} />
        </div>

        <div
          className={
            whyChooseCardStyles.content
          }
        >
          <Span
            weight="semibold"
            className={
              whyChooseCardStyles.title
            }
          >
            {item.title}
          </Span>

          <Span
            variant="muted"
            className={
              whyChooseCardStyles.description
            }
          >
            {item.description}
          </Span>
        </div>
      </Card>
    </WhyChooseCardWrapper>
  );
};

export { WhyChooseCard };