"use client";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

import type {
  SearchInputProps,
} from "./SearchInput.types";

export default function SearchInput({
  className,
  onValueChange,
  onChange,
  ...props
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        size={18}
        className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        {...props}
        onChange={(event) => {
          onChange?.(event);
          onValueChange?.(event.target.value);
        }}
        className={cn(
          "w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-white outline-none transition focus:border-amber-400",
          className
        )}
      />
    </div>
  );
}