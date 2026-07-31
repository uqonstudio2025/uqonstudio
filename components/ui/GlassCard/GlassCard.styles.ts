import { cn } from "@/lib/utils";

interface GlassCardStyleOptions {
  hover?: boolean;

  border?: boolean;

  blur?: boolean;

  gradient?: boolean;

  className?: string;
}

export function glassCardStyles({
  hover = true,
  border = true,
  blur = true,
  gradient = false,
  className,
}: GlassCardStyleOptions) {
  return cn(
    `
    relative
    overflow-hidden
    rounded-3xl

    bg-white/5

    transition-all
    duration-300
    `,

    blur && "backdrop-blur-xl",

    border &&
      "border border-white/10",

    hover &&
      `
      hover:-translate-y-2
      hover:border-amber-400/30
      hover:bg-white/10
      hover:shadow-2xl
      hover:shadow-amber-400/10
      `,

    gradient &&
      `
      before:absolute
      before:inset-0
      before:bg-gradient-to-br
      before:from-white/10
      before:to-transparent
      before:pointer-events-none
      `,

    className
  );
}