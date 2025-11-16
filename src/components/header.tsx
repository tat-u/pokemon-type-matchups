import { cn } from "@/lib/cn";
import Image from "next/image";
import type { ComponentProps } from "react";

export const Header = ({ className, ...props }: ComponentProps<"header">) => {
  return (
    <header
      {...props}
      className={cn(
        "h-12", // Size
        "px-2 flex gap-2 items-center", // Layout
        "border-b border-neutral-200 bg-white", // Style
        className
      )}
    >
      <Image
        src="/header-logo.png"
        alt="Pokemon Type Matchups Logo"
        width={32}
        height={32}
        className="size-8"
      />
      <span>ざっくり相性チェック</span>
    </header>
  );
};
