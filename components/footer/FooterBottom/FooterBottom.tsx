import Link from "next/link";

import {
  Span,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  FooterBottomProps,
} from "../Footer.types";

import {
  footerBottomStyles,
} from "./FooterBottom.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const FooterBottom = ({
  social,
  copyright,
  className,
}: FooterBottomProps) => {
  return (
    <div
      className={cn(
        footerBottomStyles.root,
        className
      )}
    >
      <Span
        variant="muted"
        className={
          footerBottomStyles.copyright
        }
      >
        {copyright}
      </Span>

      <div
        className={
          footerBottomStyles.social
        }
      >
        {social.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={
                footerBottomStyles.socialItem
              }
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export {
  FooterBottom,
};