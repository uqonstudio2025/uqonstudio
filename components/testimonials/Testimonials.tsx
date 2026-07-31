import Grid from "@/components/layout/Grid";
import SectionBlock from "@/components/layout/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";

import { testimonials } from "@/data/testimonials";

import { TestimonialCard } from "./TestimonialCard";

import type {
  TestimonialsProps,
} from "./Testimonials.types";

import {
  testimonialsStyles,
} from "./Testimonials.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const Testimonials = ({
  className,
  content = testimonials,
}: TestimonialsProps) => {
  return (
    <SectionBlock
      id="testimonials"
      spacing="xl"
      className={className}
    >
      <SectionHeading
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <Grid
        columns={3}
        gap="lg"
        className={testimonialsStyles.grid}
      >
        {content.items.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
          />
        ))}
      </Grid>
    </SectionBlock>
  );
};

export { Testimonials };