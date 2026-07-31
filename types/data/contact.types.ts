import type { LucideIcon } from "lucide-react";

export interface ContactInfo {
  title: string;

  value: string;

  href?: string;

  icon: LucideIcon;
}