"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface LogoMarkProps {
  size?: number;
  animated?: boolean;
  showGrid?: boolean;
  variant?: "light" | "dark" | "amber";
  className?: string;
}

const palette = {
  light: {
    stroke: "#F8FAFC",
    accent: "#F59E0B",
    grid: "rgba(248,250,252,.10)",
    glow: "rgba(245,158,11,.22)",
  },

  dark: {
    stroke: "#020617",
    accent: "#F59E0B",
    grid: "rgba(2,6,23,.10)",
    glow: "rgba(245,158,11,.18)",
  },

  amber: {
    stroke: "#F59E0B",
    accent: "#FFFFFF",
    grid: "rgba(245,158,11,.18)",
    glow: "rgba(245,158,11,.25)",
  },
};

export default function LogoMark({
  size = 56,
  animated = false,
  showGrid = false,
  variant = "light",
  className,
}: LogoMarkProps) {
  const color = palette[variant];

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("overflow-visible", className)}
      initial={animated ? { opacity: 0 } : false}
      animate={animated ? { opacity: 1 } : undefined}
      transition={{ duration: .5 }}
    >
      {/* Glow */}

      <motion.circle
        cx="50"
        cy="50"
        r="44"
        fill={color.glow}
        initial={animated ? { scale: .6 } : false}
        animate={animated ? { scale: 1 } : undefined}
        transition={{
          duration: 1.2,
        }}
      />

      {/* Blueprint Grid */}

      {showGrid && (

        <g stroke={color.grid} strokeWidth=".5">

          {[10,20,30,40,50,60,70,80,90].map((n)=>(
            <g key={n}>
              <line x1={n} y1="0" x2={n} y2="100"/>
              <line x1="0" y1={n} x2="100" y2={n}/>
            </g>
          ))}

        </g>

      )}

      {/* Main Circle */}

      <motion.circle
        cx="50"
        cy="50"
        r="31"
        fill="none"
        stroke={color.stroke}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="194"
        initial={
          animated
            ? { strokeDashoffset: 194 }
            : false
        }
        animate={
          animated
            ? { strokeDashoffset: 0 }
            : undefined
        }
        transition={{
          duration: .9,
        }}
      />

      {/* Blueprint Ring */}

      <motion.circle
        cx="50"
        cy="50"
        r="39"
        fill="none"
        stroke={color.accent}
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity=".35"
        initial={
          animated
            ? { rotate: -90 }
            : false
        }
        animate={
          animated
            ? { rotate: 0 }
            : undefined
        }
        transition={{
          duration: 1.2,
        }}
        style={{
          transformOrigin: "50px 50px",
        }}
      />

      {/* Tail of Q */}

      <motion.path
        d="M69 69 L86 86"
        fill="none"
        stroke={color.accent}
        strokeWidth="5"
        strokeLinecap="round"
        initial={
          animated
            ? { pathLength: 0 }
            : false
        }
        animate={
          animated
            ? { pathLength: 1 }
            : undefined
        }
        transition={{
          delay: .4,
          duration: .45,
        }}
      />

      {/* Node */}

      <motion.circle
        cx="86"
        cy="86"
        r="4"
        fill={color.accent}
        initial={
          animated
            ? {
                scale: 0,
              }
            : false
        }
        animate={
          animated
            ? {
                scale: 1,
              }
            : undefined
        }
        transition={{
          delay: .8,
          type: "spring",
          stiffness: 240,
        }}
      />

      {/* Center Point */}

      <circle
        cx="50"
        cy="50"
        r="2.8"
        fill={color.accent}
      />

    </motion.svg>
  );
}