"use client";

import { heroContent } from "@/data/hero";

import SectionBlock from "@/components/layout/SectionBlock";
import Grid from "@/components/layout/Grid";

import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

import { heroStyles } from "./Hero.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Hero = () => {
  return (
    <SectionBlock
      id="hero"
      spacing="xl"
      className={heroStyles.section}
    >
      <Grid
        columns={2}
        gap="xl"
        align="center"
        className={heroStyles.grid}
      >
        <HeroContent
          content={heroContent}
        />

        <HeroImage
          image={heroContent.image}
        />
      </Grid>
    </SectionBlock>
  );
};

export { Hero };