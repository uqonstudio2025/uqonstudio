import SectionBlock from "@/components/layout/SectionBlock";
import Grid from "@/components/layout/Grid";
import SectionHeading from "@/components/ui/SectionHeading";

import { workflowContent } from "@/data/workflow";

import { WorkflowStep } from "./WorkflowStep";

import type {
  WorkflowProps,
} from "./Workflow.types";

import {
  workflowStyles,
} from "./Workflow.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const Workflow = ({
  content = workflowContent,
}: Partial<WorkflowProps>) => {
  return (
    <SectionBlock
      id="workflow"
      spacing="xl"
    >
      <SectionHeading
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <Grid
        columns={4}
        gap="lg"
        className={workflowStyles.grid}
      >
        {content.steps.map((step) => (
          <WorkflowStep
            key={step.id}
            step={step}
          />
        ))}
      </Grid>
    </SectionBlock>
  );
};

export { Workflow };