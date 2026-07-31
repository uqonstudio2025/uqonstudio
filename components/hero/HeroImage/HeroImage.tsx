"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import type {
  HeroImageProps,
} from "./HeroImage.types";

import {
  HeroImageWrapper,
  heroImageStyles,
} from "./HeroImage.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const HeroImage = ({
  image,
  className,
}: HeroImageProps) => {
  return (
    <HeroImageWrapper
      className={cn(
        heroImageStyles.wrapper,
        className
      )}
      initial={{
        opacity: 0,
        x: 32,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div
        className={
          heroImageStyles.decoration
        }
      />

      <div
        className={
          heroImageStyles.card
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={700}
          priority
          className={
            heroImageStyles.image
          }
        />
      </div>
    </HeroImageWrapper>
  );
};

export { HeroImage };