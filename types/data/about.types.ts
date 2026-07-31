import type { LucideIcon } from "lucide-react";

export interface AboutStat {
  value: number;

  suffix?: string;

  label: string;

  icon: LucideIcon;
}

export interface AboutHighlight {
  title: string;

  icon: LucideIcon;
}