import Grid from "@/components/layout/Grid";
import SectionBlock from "@/components/layout/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";

import { portfolioContent } from "@/data/portfolio";

import { PortfolioCard } from "./PortfolioCard";

import type {
  PortfolioContent,
} from "./Portfolio.types";

import {
  portfolioStyles,
} from "./Portfolio.styles";

/* ==========================================================================
 * Types
 * ========================================================================== */

interface PortfolioProps {
  readonly content?: PortfolioContent;
}

/* ==========================================================================
 * Component
 * ========================================================================== */

const Portfolio = ({
  content = portfolioContent,
}: PortfolioProps) => {
  return (
    <SectionBlock
      id="portfolio"
      spacing="xl"
    >
      <SectionHeading
        badge={content.badge}
        title={content.title}
        description={content.description}
      />

      <Grid
        columns={3}
        gap="lg"
        className={portfolioStyles.grid}
      >
        {content.items.map((item) => (
          <PortfolioCard
            key={item.id}
            project={item}
          />
        ))}
      </Grid>
    </SectionBlock>
  );
};

export { Portfolio };