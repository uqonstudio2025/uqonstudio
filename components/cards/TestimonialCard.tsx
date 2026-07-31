"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;

  quote: string;

  avatar: string;

  rating?: number;

  featured?: boolean;

  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  location,
  quote,
  avatar,
  rating = 5,
  featured = false,
  className,
}: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={cn("group h-full", className)}
    >
      <GlassCard
        className={cn(
          "relative flex h-full flex-col overflow-hidden p-8",
          featured && "border-amber-400/30"
        )}
      >
        {/* Quote Background */}

        <Quote
          className="
            absolute
            right-6
            top-6
            h-20
            w-20
            text-white/5
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:text-amber-400/10
          "
        />

        {/* Glow */}

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

        {/* Rating */}

        <div className="relative flex gap-1">
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Quote */}

        <blockquote
          className="
            relative
            mt-8
            flex-1
            text-lg
            leading-9
            text-slate-300
          "
        >
          “{quote}”
        </blockquote>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-amber-400/40 via-white/10 to-transparent" />

        {/* User */}

        <div className="relative flex items-center gap-4">

          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: .25,
            }}
            className="overflow-hidden rounded-full"
          >
            <Image
              src={avatar}
              alt={name}
              width={64}
              height={64}
              className="
                h-16
                w-16
                rounded-full
                object-cover
                ring-2
                ring-white/10
              "
            />
          </motion.div>

          <div>

            <h4 className="font-semibold text-white">
              {name}
            </h4>

            <p className="mt-1 text-sm text-slate-400">
              {role}
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-amber-400">
              {location}
            </p>

          </div>

        </div>

      </GlassCard>
    </motion.article>
  );
}