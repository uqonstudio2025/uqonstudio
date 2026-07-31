"use client";

import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

import {
  Badge,
  Button,
  Card,
} from "@/components/ui";

import { footerCTAStyles } from "./FooterCTA.styles";
import type {
  FooterCTAProps,
} from "../Footer.types";
/* ==========================================================================
 * Component
 * ========================================================================== */

const FooterCTA = ({
  cta,
  className,
}: FooterCTAProps) => {
  return (
    <Card
      className={
        footerCTAStyles.card
      }
    >
      <div
        className={
          footerCTAStyles.decoration
        }
      />

      <div
        className={
          footerCTAStyles.content
        }
      >
        <div
          className={
            footerCTAStyles.text
          }
        >
          <Badge
            variant="glass"
            className={
              footerCTAStyles.badge
            }
          >
            {cta.badge}
          </Badge>

          <h2
            className={
              footerCTAStyles.title
            }
          >
            {cta.title}
          </h2>

          <p
            className={
              footerCTAStyles.description
            }
          >
            {cta.description}
          </p>
        </div>

        <div
          className={
            footerCTAStyles.action
          }
        >
          <Button
            asChild
            size="lg"
            className={
              footerCTAStyles.button
            }
          >
            <Link href={cta.buttonHref}>
              {cta.buttonLabel}

              <ArrowRight
                size={18}
              />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export {
  FooterCTA,
};

export type {
  FooterCTAProps,
};