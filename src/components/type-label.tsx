import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export const TypeLabel = ({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & { variant: "circle" | "square" }) => {
  if (variant === "square") {
    return <div {...props} className={cn("w-2 h-full", className)} />;
  } else if (variant === "circle") {
    return (
      <div
        {...props}
        className={cn("rounded-full size-4 shadow-sm", className)}
      />
    );
  } else {
    const exhaustiveCheck: never = variant;
    return exhaustiveCheck;
  }
};
