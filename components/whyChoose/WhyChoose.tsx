import Grid from "@/components/layout/Grid";
import SectionBlock from "@/components/layout/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";

import { whyChooseContent } from "@/data/whyChoose";

import { WhyChooseCard } from "./WhyChooseCard";

import {
  whyChooseStyles,
} from "./WhyChoose.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const WhyChoose = () => {
  return (
    <SectionBlock
      id="why-choose"
      spacing="xl"
    >
      <SectionHeading
        badge={whyChooseContent.badge}
        title={whyChooseContent.title}
        description={
          whyChooseContent.description
        }
      />

      <Grid
        columns={3}
        gap="lg"
        className={
          whyChooseStyles.grid
        }
      >
        {whyChooseContent.items.map(
          (item) => (
            <WhyChooseCard
              key={item.id}
              item={item}
            />
          )
        )}
      </Grid>
    </SectionBlock>
  );
};

export {
  WhyChoose,
};