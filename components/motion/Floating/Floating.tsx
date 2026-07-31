"use client";

import { motion } from "framer-motion";

import {
  createFloatingVariant,
} from "./Floating.styles";

import type {
  FloatingProps,
} from "./Floating.types";

export default function Floating({
  children,

  distance = 12,

  duration = 4,

  delay = 0,

  transition,

  ...props
}: FloatingProps) {
  return (
    <motion.div
      variants={createFloatingVariant(
        distance
      )}
      animate="animate"
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}