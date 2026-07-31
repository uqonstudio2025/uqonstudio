import type { IconName } from "@/lib/icons";
 

/* ==========================================================================
 * Business Models
 * ========================================================================== */

export interface WorkflowStepData {
  readonly id: string;

  readonly number: string;

  readonly title: string;

  readonly description: string;

  readonly icon: IconName;
}

export interface WorkflowContent {
  readonly badge: string;

  readonly title: string;

  readonly description: string;

  readonly steps: readonly WorkflowStepData[];
}

/* ==========================================================================
 * Component Props
 * ========================================================================== */

export interface WorkflowProps {
  readonly content: WorkflowContent;
}