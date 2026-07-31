import Container from "@/components/layout/Container";

import { cn } from "@/lib/utils";

import { footerContent } from "@/data/footer";

import type {
  FooterProps,
} from "./Footer.types";

import {
  FooterBottom,
} from "./FooterBottom";

import {
  FooterContent,
} from "./FooterContent";

import {
  FooterCTA,
} from "./FooterCTA";

import {
  footerStyles,
} from "./Footer.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const Footer = ({
  className,
  content = footerContent,
}: FooterProps) => {
  return (
    <footer
      className={cn(
        footerStyles.footer,
        className
      )}
    >
      <Container
        className={
          footerStyles.container
        }
      >
        <FooterCTA
          cta={content.cta}
        />

        <FooterContent
          brand={content.brand}
          sections={content.sections}
          navigation={
            content.navigation
          }
          services={
            content.services
          }
          contact={
            content.contact
          }
        />

        <FooterBottom
          social={
            content.social
          }
          copyright={
            content.copyright
          }
        />
      </Container>
    </footer>
  );
};

export {
  Footer,
};