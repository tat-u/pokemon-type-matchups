import { cn } from "@/lib/cn";
import { Select as RadixSelect } from "radix-ui";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

type Item = {
  value: string;
  text: string;
};

export const Select = ({
  items,
  disabledItems,
  renderTriggerContent,
  renderItemContent,
  ...props
}: ComponentProps<typeof RadixSelect.Root> & {
  /** value は必須とする */
  value: string;
} & {
  items: Array<{ value: string; text: string }>;
  disabledItems?: Array<string>;
  /** トリガーの左側をレンダーする */
  renderTriggerContent?: (item: Item) => React.ReactNode;
  /** 項目の中身をレンダーする */
  renderItemContent?: (item: Item) => React.ReactNode;
}) => {
  const selectedItem = items.find((item) => item.value === props.value)!;

  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className={cn(
          "w-35 h-8", // Size
          "flex justify-between items-center px-2", // Layout
          "border border-neutral-200 rounded-sm bg-white", // Style
          "cursor-pointer hover:bg-neutral-50" // Interaction
        )}
      >
        <div className="flex items-center gap-1">
          {renderTriggerContent?.(selectedItem) ?? (
            <RadixSelect.Value className="text-sm" />
          )}
        </div>
        <RadixSelect.Icon>
          <ChevronDown className="size-4" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Content
        className={cn(
          "p-2 flex flex-col", // Layout
          "border border-neutral-200 rounded-sm bg-white shadow-md" // Style
        )}
      >
        <RadixSelect.Viewport>
          {items.map((item) => (
            <RadixSelect.Item
              key={item.value}
              value={item.value}
              disabled={disabledItems?.includes(item.value)}
              className={cn(
                "w-30 h-8", // Size
                "flex px-1 gap-1 items-center rounded-sm bg-white", // Layout
                "cursor-pointer hover:bg-neutral-50", // Interaction
                "data-[highlighted]:outline-none data-[highlighted]:bg-neutral-50" // ハイライト時のスタイルを上書き
              )}
            >
              {renderItemContent?.(item) ?? (
                <RadixSelect.ItemText className="text-sm">
                  {item.text}
                </RadixSelect.ItemText>
              )}
            </RadixSelect.Item>
          ))}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Root>
  );
};
