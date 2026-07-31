import { cn } from "@/lib/utils";

import Container from "../Container";

import type {
  SectionBlockProps,
} from "./SectionBlock.types";

import {
  getSectionClass,
} from "./SectionBlock.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const SectionBlock = ({
  as: Component = "section",
  children,
  className,
  spacing = "xl",
  container = true,
  containerSize = "xl",
  ...props
}: SectionBlockProps) => {
  const content = container ? (
    <Container size={containerSize}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component
      className={cn(
        getSectionClass(spacing),
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
};

export default SectionBlock;