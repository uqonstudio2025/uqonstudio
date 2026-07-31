"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;

  href?: string;

  className?: string;

  featured?: boolean;
}

export default function PortfolioCard({
  title,
  category,
  image,
  description,
  href = "#",

  className,
  featured = false,
}: PortfolioCardProps) {
  return (
    <motion.article
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
          "overflow-hidden p-0",

          featured &&
            "border-amber-400/30"
        )}
      >
        {/* Image */}

        <div className="relative overflow-hidden">

          <Image
            src={image}
            alt={title}
            width={900}
            height={700}
            className="
              aspect-[4/3]
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950
              via-slate-950/20
              to-transparent
            "
          />

          {/* Category */}

          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-amber-400
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-slate-900
            "
          >
            {category}
          </div>

        </div>

        {/* Content */}

        <div className="p-7">

          <h3
            className="
              text-2xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-amber-400
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-4
              leading-8
              text-slate-400
            "
          >
            {description}
          </p>

          <Link
            href={href}
            className="
              mt-8
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
            Lihat Detail

            <ArrowUpRight
              className="h-5 w-5"
            />
          </Link>

        </div>

      </GlassCard>
    </motion.article>
  );
}