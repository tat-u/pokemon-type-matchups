import { Select } from "@/components/select";
import { TypeLabel } from "@/components/type-label";
import { Select as RadixSelect } from "radix-ui";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";

export const TypeSelect = (
  props: Omit<
    ComponentProps<typeof Select>,
    "renderItemContent" | "renderTriggerContent"
  >
) => {
  return (
    <Select
      {...props}
      renderTriggerContent={(item) => (
        <>
          <TypeLabel
            type={item.value}
            className="rounded-full size-4 shadow-sm"
          />
          <span className="text-sm">{item.text}</span>
        </>
      )}
      renderItemContent={(item) => (
        <>
          <TypeLabel
            type={item.value}
            className="rounded-full size-4 shadow-sm"
          />
          <span className="text-sm">{item.text}</span>
          <RadixSelect.ItemIndicator>
            <Check className="size-4" />
          </RadixSelect.ItemIndicator>
        </>
      )}
    />
  );
};
