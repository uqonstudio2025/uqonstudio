import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: number;

  title: string;

  slug: string;

  description: string;

  icon: LucideIcon;

  features: string[];
}