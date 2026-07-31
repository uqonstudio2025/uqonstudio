"use client";

import {
  useEffect,
  useState,
} from "react";

/* ==========================================================================
   Hook
   ========================================================================== */

const useMounted = () => {
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export { useMounted };