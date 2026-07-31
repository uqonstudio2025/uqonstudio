import type { Variants } from "framer-motion";

export function createFadeInVariant(
  y: number
): Variants {
  return {
    hidden: {
      opacity: 0,
      y,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };
}