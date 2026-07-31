import { cn } from "@/lib/utils";

import type {
  GridProps,
} from "./Grid.types";

import {
  getGridClass,
} from "./Grid.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Grid = ({
  className,
  columns = 1,
  gap = "lg",
  align = "stretch",
  children,
  ...props
}: GridProps) => {
  return (
    <div
      className={cn(
        getGridClass(
          columns,
          gap,
          align
        ),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;