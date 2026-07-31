export interface Testimonial {
  id: number;

  name: string;

  company?: string;

  position?: string;

  message: string;

  rating: number;

  avatar?: string;
}