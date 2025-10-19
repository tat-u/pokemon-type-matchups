import Image from "next/image";
import { cn } from "@/lib/cn";

export const Header = () => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0",
        "flex w-full h-12 px-2",
        "gap-2 items-center content-center",
        "border-b border-neutral-200 bg-white"
      )}
    >
      <Image
        src="/header-logo.png"
        alt="Header Logo"
        width={32}
        height={32}
        className="size-8"
      />
      ざっくり相性チェック
    </header>
  );
};
