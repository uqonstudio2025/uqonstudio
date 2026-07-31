import Link from "next/link";

import {
  Badge,
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  FooterContentProps,
} from "../Footer.types";

import {
  footerContentStyles,
} from "./FooterContent.styles";

import { getIcon } from "@/lib/icons";

/* ==========================================================================
 * Component
 * ========================================================================== */

const FooterContent = ({
  brand,
  sections,
  navigation,
  services,
  contact,
  className,
}: FooterContentProps) => {
  return (
    <div
      className={cn(
        footerContentStyles.grid,
        className
      )}
    >
      {/* =======================================================
          Brand
      ======================================================= */}

      <div
        className={
          footerContentStyles.brand
        }
      >
        <Badge variant="secondary">
          {brand.tagline}
        </Badge>

        <h3
          className={
            footerContentStyles.brandName
          }
        >
          {brand.name}
        </h3>

        <p
          className={
            footerContentStyles.description
          }
        >
          {brand.description}
        </p>
      </div>

      {/* =======================================================
          Navigation
      ======================================================= */}

      <div
        className={
          footerContentStyles.column
        }
      >
        <Span
          weight="semibold"
          className={
            footerContentStyles.columnTitle
          }
        >
          {navigation.title}
        </Span>

        <nav
          className={
            footerContentStyles.list
          }
        >
          {navigation.items.map(
            (item) => (
              <Link
                key={item.id}
                href={item.href}
                className={
                  footerContentStyles.link
                }
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* =======================================================
          Services
      ======================================================= */}

      <div
        className={
          footerContentStyles.column
        }
      >
        <Span
          weight="semibold"
          className={
            footerContentStyles.columnTitle
          }
        >
          {services.title}
        </Span>

        <nav
          className={
            footerContentStyles.list
          }
        >
          {services.items.map(
            (item) => (
              <Link
                key={item.id}
                href={item.href}
                className={
                  footerContentStyles.link
                }
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* =======================================================
          Contact
      ======================================================= */}

      <div
        className={
          footerContentStyles.column
        }
      >
        <Span
          weight="semibold"
          className={
            footerContentStyles.columnTitle
          }
        >
          {sections.contact}
        </Span>

        <div
          className={
            footerContentStyles.list
          }
        >
          {contact.map((item) => {
            const Icon = getIcon(item.icon);

            const content = (
              <>
                <div
                  className={
                    footerContentStyles.contactIcon
                  }
                >
                  <Icon size={18} />
                </div>

                <div
                  className={
                    footerContentStyles.contactContent
                  }
                >
                  <Span
                    className={
                      footerContentStyles.contactLabel
                    }
                  >
                    {item.label}
                  </Span>

                  <Span
                    className={
                      footerContentStyles.contactValue
                    }
                  >
                    {item.value}
                  </Span>
                </div>
              </>
            );

            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={
                    footerContentStyles.contact
                  }
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                className={
                  footerContentStyles.contact
                }
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export {
  FooterContent,
};