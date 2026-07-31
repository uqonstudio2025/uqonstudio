import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui";

import type {
  SectionHeadingProps,
} from "./SectionHeading.types";

import {
  getSectionHeadingClass,
} from "./SectionHeading.styles";

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  maxWidth = "md",
  className,
  ...props
}: SectionHeadingProps) {
  const styles =
    getSectionHeadingClass(
      align,
      maxWidth
    );

  return (
    <div
      className={cn(
        styles.wrapper,
        className
      )}
      {...props}
    >
      {badge && (
        <div className={styles.badge}>
          <Badge>
            {badge}
          </Badge>
        </div>
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      {description && (
        <p
          className={
            styles.description
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}