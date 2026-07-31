"use client";

import Link from "next/link";

import {
  ArrowRight,
  Check,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  ServiceCardProps,
} from "./ServiceCard.types";

import {
  ServiceCardWrapper,
  serviceCardStyles,
} from "./ServiceCard.styles";

import { icons } from "@/lib/icons";


/* ==========================================================================
 * Component
 * ========================================================================== */

const ServiceCard = ({
  service,
  className,
}: ServiceCardProps) => {
  const Icon = icons[service.icon];


  return (
    <ServiceCardWrapper
      className={cn(
        serviceCardStyles.wrapper,
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
          serviceCardStyles.card,
          service.highlight &&
            serviceCardStyles.highlight
        )}
      >
        <div
          className={
            serviceCardStyles.content
          }
        >
          <div
            className={
              serviceCardStyles.iconWrapper
            }
          >
            <Icon
              size={30}
            />
          </div>

          {service.highlight && (
            <Badge
              variant="default"
              className={
                serviceCardStyles.badge
              }
            >
              Paling Populer
            </Badge>
          )}

          <h3
            className={
              serviceCardStyles.title
            }
          >
            {service.title}
          </h3>

          <p
            className={
              serviceCardStyles.description
            }
          >
            {service.description}
          </p>

          <div
            className={
              serviceCardStyles.features
            }
          >
            {service.features.map(
              (feature) => (
                <div
                  key={feature.id}
                  className={
                    serviceCardStyles.feature
                  }
                >
                  <Check
                    size={16}
                    className={
                      serviceCardStyles.featureIcon
                    }
                  />

                  <Span
                    className={
                      serviceCardStyles.featureLabel
                    }
                  >
                    {feature.label}
                  </Span>
                </div>
              )
            )}
          </div>

          <div
            className={
              serviceCardStyles.footer
            }
          >
            <Button
              asChild
              className={
                serviceCardStyles.button
              }
            >
              <Link
                href={
                  service.cta.href
                }
              >
                {service.cta.label}

                <ArrowRight
                  size={18}
                />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </ServiceCardWrapper>
  );
};

export {
  ServiceCard,
};