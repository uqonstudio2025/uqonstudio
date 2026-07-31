import { cn } from "@/lib/utils";

import type {
  SectionHeadingAlign,
} from "./SectionHeading.types";

const alignVariants = {
  left: {
    wrapper: "text-left items-start",

    description: "mx-0",
  },

  center: {
    wrapper: "text-center items-center",

    description: "mx-auto",
  },
} satisfies Record<
  SectionHeadingAlign,
  {
    wrapper: string;

    description: string;
  }
>;

const widthVariants = {
  sm: "max-w-xl",

  md: "max-w-2xl",

  lg: "max-w-3xl",
};

export function getSectionHeadingClass(
  align: SectionHeadingAlign = "center",

  maxWidth: "sm" | "md" | "lg" = "md"
) {
  return {
    wrapper: cn(
      "mb-16 flex flex-col",

      alignVariants[align].wrapper
    ),

    badge: cn(
      "mb-4"
    ),

    title: cn(
      "text-4xl font-bold tracking-tight",
      "text-white",
      "md:text-5xl"
    ),

    description: cn(
      "mt-6 text-lg leading-8",
      "text-slate-400",

      widthVariants[maxWidth],

      alignVariants[align]
        .description
    ),
  };
}