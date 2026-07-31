"use client";

import Image from "next/image";

import { ArrowRight, MapPin } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type { PortfolioCardProps } from "./PortfolioCard.types";

import {
  PortfolioCardWrapper,
  portfolioCardStyles,
} from "./PortfolioCard.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const PortfolioCard = ({
  project,
  className,
}: PortfolioCardProps) => {
  return (
    <PortfolioCardWrapper
      className={cn(
        portfolioCardStyles.wrapper,
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
        duration: 0.5,
      }}
    >
      <Card
        className={cn(
          portfolioCardStyles.card,
          project.featured &&
            portfolioCardStyles.featured
        )}
      >
        <div
          className={
            portfolioCardStyles.imageWrapper
          }
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="
              (max-width:768px) 100vw,
              (max-width:1280px) 50vw,
              33vw
            "
            className={
              portfolioCardStyles.image
            }
          />

          <div
            className={
              portfolioCardStyles.overlay
            }
          />
        </div>

        <CardContent
          className={
            portfolioCardStyles.content
          }
        >
          <Badge
            variant="secondary"
            className={
              portfolioCardStyles.category
            }
          >
            {project.category.label}
          </Badge>

          <h3
            className={
              portfolioCardStyles.title
            }
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-2">
            <MapPin size={16} />

            <Span
              variant="muted"
              className={
                portfolioCardStyles.location
              }
            >
              {project.location}
            </Span>
          </div>

          <p
            className={
              portfolioCardStyles.description
            }
          >
            {project.description}
          </p>

          <div
            className={
              portfolioCardStyles.tags
            }
          >
            {project.tags.map((tag) => (
              <Badge
                key={tag.id}
                variant="outline"
              >
                {tag.label}
              </Badge>
            ))}
          </div>

          <div
            className={
              portfolioCardStyles.footer
            }
          >
            <Button
              asChild
              className={
                portfolioCardStyles.button
              }
            >
              <a href={project.cta.href}>
                {project.cta.label}

                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </PortfolioCardWrapper>
  );
};

export { PortfolioCard };