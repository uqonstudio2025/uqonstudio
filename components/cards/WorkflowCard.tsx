"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface WorkflowCardProps {
  step: number;
  title: string;
  description: string;
  icon: React.ElementType;

  className?: string;
  isLast?: boolean;
}

export default function WorkflowCard({
  step,
  title,
  description,
  icon: Icon,
  className,
  isLast = false,
}: WorkflowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn("relative", className)}
    >
      <GlassCard className="group relative h-full overflow-hidden p-8">
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-amber-400/5
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Step Number */}

        <div className="flex items-center justify-between">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-amber-400/10
              transition-all
              duration-300
              group-hover:bg-amber-400
            "
          >
            <Icon
              className="
                h-7
                w-7
                text-amber-400
                transition-colors
                duration-300
                group-hover:text-slate-900
              "
            />
          </div>

          <span
            className="
              text-5xl
              font-black
              text-white/10
              transition-colors
              duration-300
              group-hover:text-amber-400/20
            "
          >
            {String(step).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-slate-400">
            {description}
          </p>
        </div>

        {/* Bottom */}

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            Step {step}
          </span>

          {!isLast && (
            <ArrowRight className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-amber-400" />
          )}
        </div>

        {/* Accent Line */}

        <div
          className="
            mt-6
            h-[2px]
            w-16
            rounded-full
            bg-gradient-to-r
            from-amber-400
            to-transparent
          "
        />
      </GlassCard>

      {/* Connector Line (Desktop) */}

      {!isLast && (
        <div
          className="
            absolute
            left-full
            top-1/2
            hidden
            h-px
            w-8
            -translate-y-1/2
            bg-gradient-to-r
            from-amber-400/50
            to-transparent
            xl:block
          "
        />
      )}
    </motion.div>
  );
}