/**
 * ==========================================
 * Rating Summary
 * ==========================================
 */

export interface TestimonialRating {
  readonly value: number;

  readonly max: number;

  readonly totalReviews: number;

  readonly label: string;
}

/**
 * ==========================================
 * Testimonial Item
 * ==========================================
 */

export interface TestimonialItem {
  readonly id: string;

  readonly name: string;

  readonly role: string;

  readonly location: string;

  readonly avatar: string;

  readonly rating: number;

  readonly review: string;

  readonly project: string;
}

/**
 * ==========================================
 * CTA
 * ==========================================
 */

export interface TestimonialsCTA {
  readonly label: string;

  readonly href: string;
}

/**
 * ==========================================
 * Testimonials Content
 * ==========================================
 */

export interface TestimonialsContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly summary: TestimonialRating;

  readonly items: readonly TestimonialItem[];

  readonly cta: TestimonialsCTA;
}

/**
 * ==========================================
 * Testimonials Component
 * ==========================================
 */

export interface TestimonialsProps {
  readonly className?: string;

  readonly content?: TestimonialsContent;
}

/**
 * ==========================================
 * Testimonial Card Component
 * ==========================================
 */

export interface TestimonialCardProps {
  readonly item: TestimonialItem;

  readonly className?: string;
}