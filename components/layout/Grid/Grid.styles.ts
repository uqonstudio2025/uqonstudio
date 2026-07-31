import { cn } from "@/lib/utils";

import type {
  GridAlign,
  GridColumns,
  GridGap,
} from "./Grid.types";

/* ==========================================================================
   Maps
   ========================================================================== */

const columnMap: Record<
  GridColumns,
  string
> = {
  1: "grid-cols-1",

  2: "grid-cols-1 lg:grid-cols-2",

  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",

  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",

  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",

  6: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
};

const gapMap: Record<
  GridGap,
  string
> = {
  none: "gap-0",

  sm: "gap-4",

  md: "gap-6",

  lg: "gap-8",

  xl: "gap-12",
};

const alignMap: Record<
  GridAlign,
  string
> = {
  start: "items-start",

  center: "items-center",

  end: "items-end",

  stretch: "items-stretch",
};

/* ==========================================================================
   Styles
   ========================================================================== */

export const getGridClass = (
  columns: GridColumns,
  gap: GridGap,
  align: GridAlign
) =>
  cn(
    "grid",
    columnMap[columns],
    gapMap[gap],
    alignMap[align]
  );