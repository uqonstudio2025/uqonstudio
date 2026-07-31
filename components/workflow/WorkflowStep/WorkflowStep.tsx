import type {
  WorkflowStepProps,
} from "./WorkflowStep.types";

import {
  workflowStepStyles,
} from "./WorkflowStep.styles";

import { icons } from "@/lib/icons";


/* ==========================================================================
   Component
   ========================================================================== */

const WorkflowStep = ({
  step,
}: WorkflowStepProps) => {
  const Icon = icons[step.icon];


  return (
    <article
      className={
        workflowStepStyles.card
      }
    >
      <span
        className={
          workflowStepStyles.number
        }
      >
        {step.number}
      </span>

      <div
        className={
          workflowStepStyles.iconWrapper
        }
      >
        <Icon
          className={
            workflowStepStyles.icon
          }
        />
      </div>

      <h3
        className={
          workflowStepStyles.title
        }
      >
        {step.title}
      </h3>

      <p
        className={
          workflowStepStyles.description
        }
      >
        {step.description}
      </p>
    </article>
  );
};

export { WorkflowStep };