"use client";

import { motion } from "framer-motion";

import {
  createFadeInVariant,
} from "./FadeIn.styles";

import type {
  FadeInProps,
} from "./FadeIn.types";

export default function FadeIn({
  children,

  delay = 0,

  duration = 0.6,

  y = 24,

  once = true,

  transition,

  viewport,

  ...props
}: FadeInProps) {
  return (
    <motion.div
      variants={createFadeInVariant(y)}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.25,
        ...viewport,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}