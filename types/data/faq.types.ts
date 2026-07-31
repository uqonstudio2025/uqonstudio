export type FAQCategory =
  | "all"
  | "services"
  | "pricing"
  | "process"
  | "materials"
  | "warranty";

export interface FAQItem {
  id: number;

  question: string;

  answer: string;

  category: FAQCategory;
}