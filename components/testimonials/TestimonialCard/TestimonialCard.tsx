import Image from "next/image";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  TestimonialCardProps,
} from "./TestimonialCard.types";

import {
  testimonialCardStyles,
} from "./TestimonialCard.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const TestimonialCard = ({
  item,
  className,
}: TestimonialCardProps) => {
  return (
    <article
      className={cn(
        testimonialCardStyles.card,
        className
      )}
    >
      <div className={testimonialCardStyles.header}>
        <Image
          src={item.avatar}
          alt={item.name}
          width={56}
          height={56}
          className={testimonialCardStyles.avatar}
        />

        <div className={testimonialCardStyles.meta}>
          <h3 className={testimonialCardStyles.name}>
            {item.name}
          </h3>

          <p className={testimonialCardStyles.role}>
            {item.role}
          </p>

          <p className={testimonialCardStyles.location}>
            {item.location}
          </p>
        </div>
      </div>

      <div className={testimonialCardStyles.rating}>
        {Array.from({
          length: item.rating,
        }).map((_, index) => (
          <Star
            key={index}
            size={16}
            fill="currentColor"
          />
        ))}
      </div>

      <blockquote
        className={testimonialCardStyles.review}
      >
        "{item.review}"
      </blockquote>

      <div className={testimonialCardStyles.footer}>
        {item.project}
      </div>
    </article>
  );
};

export {
  TestimonialCard,
};