import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

import { ctaContent } from "@/data/cta";

import SectionBlock from "@/components/layout/SectionBlock";

import {
  Badge,
  Button,
  Card,
} from "@/components/ui";

import {
  ctaStyles,
} from "./CTA.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const CTA = () => {
  return (
    <SectionBlock
      id="cta"
      spacing="xl"
    >
      <Card
        className={
          ctaStyles.card
        }
      >
        <div
          className={
            ctaStyles.decoration
          }
        />

        <div
          className={
            ctaStyles.content
          }
        >
          <Badge
            variant="glass"
            className={
              ctaStyles.badge
            }
          >
            {ctaContent.badge}
          </Badge>

          <h2
            className={
              ctaStyles.title
            }
          >
            {ctaContent.title}
          </h2>

          <p
            className={
              ctaStyles.description
            }
          >
            {ctaContent.description}
          </p>

          <Button
            asChild
            size="lg"
            className={
              ctaStyles.button
            }
          >
            <Link
              href={
                ctaContent.button.href
              }
            >
              {ctaContent.button.label}

              <ArrowRight
                size={18}
              />
            </Link>
          </Button>
        </div>
      </Card>
    </SectionBlock>
  );
};

export {
  CTA,
};