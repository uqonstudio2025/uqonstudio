"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui";

import type {
  FAQCategoryProps,
} from "./FAQCategory.types";

import {
  faqCategoryStyles,
} from "./FAQCategory.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const FAQCategory = ({
  categories,
  activeCategory,
  onChange,
  className,
}: FAQCategoryProps) => {
  return (
    <div
      className={cn(
        faqCategoryStyles.container,
        className
      )}
    >
      {categories.map((category) => {
        const isActive =
          activeCategory === category.id;

        return (
          <Button
            key={category.id}
            type="button"
            size="sm"
            variant={
              isActive
                ? "default"
                : "ghost"
            }
            className={
              faqCategoryStyles.button
            }
            aria-pressed={isActive}
            onClick={() =>
              onChange(category.id)
            }
          >
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};

export {
  FAQCategory,
};