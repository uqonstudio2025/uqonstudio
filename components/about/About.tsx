import { aboutContent } from "@/data/about";

import Grid from "@/components/layout/Grid";
import SectionBlock from "@/components/layout/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";
import { AboutStats } from "./AboutStats";

import {
  aboutStyles,
} from "./About.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const About = () => {
  return (
    <SectionBlock
      id="about"
      spacing="xl"
    >
      <SectionHeading
        badge={aboutContent.badge}
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <Grid
        columns={2}
        gap="xl"
        className={aboutStyles.grid}
      >
        <AboutImage
          className={aboutStyles.image}
          image={aboutContent.image}
        />

        <AboutContent
          className={aboutStyles.content}
          content={aboutContent}
        />
      </Grid>

      <AboutStats
        className={aboutStyles.stats}
        stats={aboutContent.stats}
      />
    </SectionBlock>
  );
};

export {
  About,
};