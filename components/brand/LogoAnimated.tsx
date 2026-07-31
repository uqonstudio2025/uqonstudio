"use client";

import { motion } from "framer-motion";

import LogoMark from "./LogoMark";
import LogoWordmark from "./LogoWordmark";

export interface LogoAnimatedProps {
  variant?: "light" | "dark" | "amber";
  className?: string;
}

export default function LogoAnimated({
  variant = "light",
  className,
}: LogoAnimatedProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: .92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: .55,
        }}
        className="flex flex-col items-center"
      >
        {/* Logo */}

        <LogoMark
          size={96}
          animated
          showGrid
          variant={variant}
        />

        {/* Wordmark */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .85,
            duration: .45,
          }}
          className="mt-8"
        >
          <LogoWordmark
            stacked
            animated
            size="lg"
            variant={variant}
          />
        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 80,
          }}
          transition={{
            delay: 1.05,
            duration: .4,
          }}
          className="mt-5 h-px rounded-full bg-amber-500"
        />

        {/* Tagline */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: .85,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: .45,
          }}
          className="
            mt-5
            text-center
            text-sm
            uppercase
            tracking-[0.35em]
            text-slate-400
          "
        >
          Interior Design • Furniture Custom
        </motion.p>

        {/* Glow */}

        <motion.div
          animate={{
            opacity: [.15, .35, .15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-72
            w-72
            rounded-full
            bg-amber-500/20
            blur-[90px]
            -z-10
          "
        />
      </motion.div>
    </motion.div>
  );
}