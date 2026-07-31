"use client";

import FadeIn from "@/components/motion/FadeIn";

import {
  Card,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  ContactMapProps,
} from "../Contact.types";

import {
  contactMapStyles,
} from "./ContactMap.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const ContactMap = ({
  content,
  className,
}: ContactMapProps) => {
  return (
    <FadeIn
      delay={0.2}
    >
      <div
        className={cn(
          contactMapStyles.wrapper,
          className
        )}
      >
        <Card
          className={
            contactMapStyles.card
          }
        >
          <iframe
    title={content.title}
    src={content.embedUrl}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className={contactMapStyles.iframe}
/>
        </Card>
      </div>
    </FadeIn>
  );
};

export {
  ContactMap,
};