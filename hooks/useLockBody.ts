"use client";

import { useEffect } from "react";

/* ==========================================================================
   Internal State
   ========================================================================== */

let lockCount = 0;

/* ==========================================================================
   Hook
   ========================================================================== */

const useLockBody = (
  locked = true
) => {
  useEffect(() => {
    if (!locked) {
      return;
    }

    const { body } = document;

    const previousOverflow =
      body.style.overflow;

    const previousPaddingRight =
      body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    lockCount += 1;

    if (lockCount === 1) {
      body.style.overflow = "hidden";

      if (scrollbarWidth > 0) {
        body.style.paddingRight =
          `${scrollbarWidth}px`;
      }
    }

    return () => {
      lockCount -= 1;

      if (lockCount === 0) {
        body.style.overflow =
          previousOverflow;

        body.style.paddingRight =
          previousPaddingRight;
      }
    };
  }, [locked]);
};

export { useLockBody };