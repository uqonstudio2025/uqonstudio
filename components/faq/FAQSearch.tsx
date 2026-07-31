"use client";

import SearchInput from "@/components/sections/SearchInput";

import {
  faqStyles,
} from "./FAQ.styles";

/* ==========================================================================
 * Types
 * ========================================================================== */

interface FAQSearchProps {
  readonly value: string;

  readonly onChange: (
    value: string
  ) => void;
}

/* ==========================================================================
 * Component
 * ========================================================================== */

const FAQSearch = ({
  value,
  onChange,
}: FAQSearchProps) => {
  return (
    <div
      className={faqStyles.search}
    >
      <SearchInput
        placeholder="Cari pertanyaan..."
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
      />
    </div>
  );
};

export {
  FAQSearch,
};