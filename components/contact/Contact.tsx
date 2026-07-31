import SectionBlock from "@/components/layout/SectionBlock";
import Grid from "@/components/layout/Grid";

import SectionHeading from "@/components/ui/SectionHeading";

import { contactContent } from "@/data/contact";

import {
  ContactForm,
} from "./ContactForm";

import {
  ContactInfo,
} from "./ContactInfo";

import {
  contactStyles,
} from "./Contact.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const Contact = () => {
  return (
    <SectionBlock
      id="contact"
      spacing="xl"
    >
      <SectionHeading
        badge={contactContent.badge}
        title={contactContent.title}
        description={
          contactContent.description
        }
      />

      <Grid
        columns={2}
        gap="xl"
        className={
          contactStyles.grid
        }
      >
        <ContactInfo
          content={contactContent}
        />

        <ContactForm
          content={contactContent}
        />
      </Grid>
    </SectionBlock>
  );
};

export {
  Contact,
};