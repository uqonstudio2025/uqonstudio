import type { Variants } from "framer-motion";

export function createFloatingVariant(
  distance: number
): Variants {
  return {
    animate: {
      y: [
        0,
        -distance,
        0,
      ],
    },
  };
}