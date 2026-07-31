"use client";

import { ArrowRight, Check } from "lucide-react";

import {
  Badge,
  Button,
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type { AboutContentProps } from "./AboutContent.types";

import {
  AboutContentWrapper,
  aboutContentStyles,
} from "./AboutContent.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const AboutContent = ({
  content,
  className,
}: AboutContentProps) => {
  return (
    <AboutContentWrapper
      className={cn(
        aboutContentStyles.wrapper,
        className
      )}
      initial={{
        opacity: 0,
        x: 32,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Badge
        variant="glass"
        className={
          aboutContentStyles.badge
        }
      >
        {content.badge}
      </Badge>

      <h2
        className={
          aboutContentStyles.title
        }
      >
        {content.title}
      </h2>

      <p
        className={
          aboutContentStyles.description
        }
      >
        {content.description}
      </p>

      <div
        className={
          aboutContentStyles.features
        }
      >
        {content.features.map(
          (feature) => (
            <div
              key={feature.id}
              className={
                aboutContentStyles.feature
              }
            >
              <div
                className={
                  aboutContentStyles.featureIcon
                }
              >
                <Check size={18} />
              </div>

              <div
                className={
                  aboutContentStyles.featureContent
                }
              >
                <Span
                  weight="semibold"
                  className={
                    aboutContentStyles.featureTitle
                  }
                >
                  {feature.title}
                </Span>

                <Span
                  variant="muted"
                  className={
                    aboutContentStyles.featureDescription
                  }
                >
                  {feature.description}
                </Span>
              </div>
            </div>
          )
        )}
      </div>

      <div
        className={
          aboutContentStyles.footer
        }
      >
        <Button asChild>
          <a href={content.cta.href}>
            {content.cta.label}

            <ArrowRight size={18} />
          </a>
        </Button>
      </div>
    </AboutContentWrapper>
  );
};

export { AboutContent };