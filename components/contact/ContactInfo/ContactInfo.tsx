"use client";

import FadeIn from "@/components/motion/FadeIn";

import {
  Badge,
  Card,
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  ContactInfoProps,
} from "../Contact.types";

import {
  contactInfoStyles,
} from "./ContactInfo.styles";

import { getIcon } from "@/lib/icons";

/* ==========================================================================
 * Component
 * ========================================================================== */

const ContactInfo = ({
  content,
  className,
}: ContactInfoProps) => {
  return (
    <FadeIn>
      <div
        className={cn(
          contactInfoStyles.wrapper,
          className
        )}
      >
        <Card
          className={
            contactInfoStyles.card
          }
        >
          <Badge variant="glass">
            Contact Information
          </Badge>

          <div
            className={
              contactInfoStyles.cardContent
            }
          >
            <div
              className={
                contactInfoStyles.list
              }
            >
              {content.info.map(
                (item) => {
                  // const Icon =
                  //   item.icon;
                    const Icon = getIcon(item.icon);

                  const Wrapper =
                    item.href
                      ? "a"
                      : "div";

                  return (
                    <Wrapper
                      key={item.id}
                      {...(item.href
                        ? {
                            href: item.href,
                            target:
                              "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className={
                        contactInfoStyles.item
                      }
                    >
                      <div
                        className={
                          contactInfoStyles.icon
                        }
                      >
                        <Icon
                          size={22}
                        />
                      </div>

                      <div
                        className={
                          contactInfoStyles.infoContent
                        }
                      >
                        <Span
                          weight="semibold"
                          className={
                            contactInfoStyles.title
                          }
                        >
                          {
                            item.title
                          }
                        </Span>

                        <Span
                          variant="muted"
                          className={
                            contactInfoStyles.value
                          }
                        >
                          {
                            item.value
                          }
                        </Span>
                      </div>
                    </Wrapper>
                  );
                }
              )}
            </div>
          </div>
        </Card>
      </div>
    </FadeIn>
  );
};

export {
  ContactInfo,
};