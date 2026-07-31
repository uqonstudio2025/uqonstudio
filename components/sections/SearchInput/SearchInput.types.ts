import type {
  InputHTMLAttributes,
} from "react";

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (
    value: string
  ) => void;
}