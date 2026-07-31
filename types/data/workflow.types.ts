import type { LucideIcon } from "lucide-react";

export interface WorkflowStep {
  step: number;

  title: string;

  description: string;

  icon: LucideIcon;
}