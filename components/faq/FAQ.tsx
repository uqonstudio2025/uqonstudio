"use client";

import { useMemo, useState } from "react";

import { faqContent } from "@/data/faq";

import SectionBlock from "@/components/layout/SectionBlock";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
} from "@/components/ui";

import { FAQCategory } from "./FAQCategory";

import {
  faqStyles,
} from "./FAQ.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const FAQ = () => {
  const [activeCategory, setActiveCategory] =
    useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return faqContent.items;
    }

    return faqContent.items.filter(
      (item) =>
        item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <SectionBlock
      id="faq"
      spacing="xl"
    >
      <SectionHeading
        badge={faqContent.badge}
        title={faqContent.title}
        description={faqContent.description}
      />

      <FAQCategory
        categories={faqContent.categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className={faqStyles.body}>
        <Card
          className={faqStyles.accordion}
        >
          <Accordion
            type="single"
            collapsible
          >
            {filteredItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={faqStyles.item}
              >
                <AccordionTrigger
                  className={faqStyles.trigger}
                >
                  <div
                    className={
                      faqStyles.triggerContent
                    }
                  >
                    <h3
                      className={
                        faqStyles.question
                      }
                    >
                      {item.question}
                    </h3>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className={
                    faqStyles.content
                  }
                >
                  <div
                    className={
                      faqStyles.answer
                    }
                  >
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </SectionBlock>
  );
};

export { FAQ };