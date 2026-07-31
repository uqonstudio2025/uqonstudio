/* ==========================================================================
   Home Page
   ========================================================================== */

import type {
  Metadata,
} from "next";

import {
  createMetadata,
} from "@/lib/seo";

import {
  About,
} from "@/components/about";

import {
  Contact,
} from "@/components/contact";

import {
  CTA,
} from "@/components/cta";

import {
  FAQ,
} from "@/components/faq";

import {
  Hero,
} from "@/components/hero";

import {
  Portfolio,
} from "@/components/portfolio";

import {
  Services,
} from "@/components/services";

import {
  Testimonials,
} from "@/components/testimonials";

import {
  WhyChoose,
} from "@/components/whyChoose";

import {
  Workflow,
} from "@/components/workflow";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata =
  createMetadata();

/* ==========================================================================
   Component
   ========================================================================== */

export default function HomePage() {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <Portfolio />

      <Workflow />

      <WhyChoose />

      <Testimonials />

      <FAQ />

      <CTA />

      <Contact />
    </>
  );
}