import SectionBlock from "@/components/layout/SectionBlock";
import Grid from "@/components/layout/Grid";
import SectionHeading from "@/components/ui/SectionHeading";

import { servicesContent } from "@/data/services";

import { ServiceCard } from "./ServiceCard";

import { servicesStyles } from "./Services.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Services = () => {
  return (
    <SectionBlock
      id="services"
      spacing="xl"
    >
      <SectionHeading
        badge={servicesContent.badge}
        title={servicesContent.title}
        description={
          servicesContent.description
        }
      />

      <Grid
        columns={3}
        gap="lg"
        className={servicesStyles.grid}
      >
        {servicesContent.items.map(
          (service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          )
        )}
      </Grid>
    </SectionBlock>
  );
};

export { Services };