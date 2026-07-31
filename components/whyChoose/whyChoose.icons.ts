import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import type { WhyChooseIcon } from "./WhyChoose.types";

export const whyChooseIconMap: Readonly<
  Record<WhyChooseIcon, LucideIcon>
> = {
  ShieldCheck,

  BadgeCheck,

  Clock3,

  Sparkles,
};