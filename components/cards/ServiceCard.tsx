"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;

  icon: React.ElementType;

  features: string[];

  href?: string;

  className?: string;

  featured?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  href = "#kontak",
  featured = false,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: .25,
      }}
      className={cn("group h-full", className)}
    >
      <GlassCard
        className={cn(
          "relative flex h-full flex-col p-8",

          featured &&
            "border-amber-400/30"
        )}
      >

        {/* Icon */}

        <div
          className="
          flex
          h-16
          w-16
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
            h-8
            w-8
            text-amber-400
            transition-all
            duration-300
            group-hover:text-slate-900
          "
          />
        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>

        {/* Feature List */}

        <div className="mt-8 space-y-4">

          {features.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="h-2 w-2 rounded-full bg-amber-400" />

              <span className="text-sm text-slate-300">
                {item}
              </span>

            </div>

          ))}

        </div>

        <div className="mt-auto pt-10">

          <Link
            href={href}
            className="
            inline-flex
            items-center
            gap-2
            font-medium
            text-amber-400
            transition-all
            duration-300
            group-hover:gap-4
          "
          >

            Pelajari Lebih Lanjut

            <ArrowRight
              className="h-5 w-5"
            />

          </Link>

        </div>

      </GlassCard>
    </motion.div>
  );
}