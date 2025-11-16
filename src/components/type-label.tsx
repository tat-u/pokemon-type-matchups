import { cn } from "@/lib/cn";
import { getyBgTypeClassName } from "@/lib/get-bg-type-class-name";
import type { ComponentProps } from "react";

export const TypeLabel = ({
  className,
  type,
  ...props
}: ComponentProps<"div"> & { type: string }) => {
  return (
    <div
      {...props}
      className={cn(
        getyBgTypeClassName(type), // Background
        type === "none" && "invisible", // Visibility
        className
      )}
    />
  );
};
