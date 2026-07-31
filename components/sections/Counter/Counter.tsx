"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

import type { CounterProps } from "./Counter.types";
import { counterStyles } from "./Counter.styles";

export default function Counter({
  value,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = false,
  className,
  ...props
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min(
        (timestamp - start) / (duration * 1000),
        1
      );

      const current =
        from + (value - from) * progress;

      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [
    isInView,
    value,
    from,
    duration,
  ]);

  const formatted = separator
    ? Number(display).toLocaleString(
        "id-ID",
        {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }
      )
    : Number(display).toFixed(decimals);

  return (
    <motion.span
      ref={ref}
      className={cn(
        counterStyles.root,
        className
      )}
      {...props}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}