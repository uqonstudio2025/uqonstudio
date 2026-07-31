import { cn } from "@/lib/utils";

import type { ContainerSize } from "./Container.types";

const sizes = {
    sm:"max-w-3xl",

    md:"max-w-5xl",

    lg:"max-w-6xl",

    xl:"max-w-7xl",

    "2xl":"max-w-screen-2xl",

    content:"max-w-prose",

    full:"max-w-full",
}

export function getContainerClass(
  size: ContainerSize = "xl",
  centered = true
) {
  return cn(

centered && "mx-auto",

sizes[size],

"w-full",

"px-6",

"lg:px-8"

)
}
