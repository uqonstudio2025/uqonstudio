import { cn } from "@/lib/utils";

import type {
  ContainerProps,
} from "./Container.types";

import {
  getContainerClass,
} from "./Container.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const Container = ({
  as: Component = "div",
  className,
  children,
  size = "xl",
  centered = true,
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        getContainerClass(
          size,
          centered
        ),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;