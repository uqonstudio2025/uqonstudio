"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

import type { AboutImageProps } from "./AboutImage.types";

import {
  AboutImageWrapper,
  aboutImageStyles,
} from "./AboutImage.styles";

/* ==========================================================================
   Component
   ========================================================================== */

const AboutImage = ({
  image,
  className,
}: AboutImageProps) => {
  return (
    <AboutImageWrapper
      className={cn(
        aboutImageStyles.wrapper,
        className
      )}
      initial={{
        opacity: 0,
        x: -32,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div
        className={
          aboutImageStyles.decoration
        }
      />

      <div
        className={
          aboutImageStyles.frame
        }
      >
        <div
          className={
            aboutImageStyles.imageWrapper
          }
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={false}
            sizes="
              (max-width:768px) 100vw,
              (max-width:1280px) 50vw,
              40vw
            "
            className={
              aboutImageStyles.image
            }
          />
        </div>
      </div>
    </AboutImageWrapper>
  );
};

export { AboutImage };