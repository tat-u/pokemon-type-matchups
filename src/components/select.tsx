import { ChevronDown } from "lucide-react";

export const Select = ({
  options,
  disabledOptions,
  defaultValue,
  name,
  onValueChange,
}: {
  options: Array<{ value: string; text: string }>;
  disabledOptions?: Array<string>;
  defaultValue: string;
  name: string;
  onValueChange?: (value: string) => void;
}) => {
  return (
    <div className="relative size-fit text-foreground">
      <select
        name={name}
        onChange={(e) => {
          onValueChange?.(e.target.value);
        }}
        defaultValue={defaultValue}
        className="appearance-none border-1 border-neutral-200 text-sm w-30 p-2 rounded-sm"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={disabledOptions?.includes(option.value)}
          >
            {option.text}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute size-4 top-1/2 -translate-y-1/2 right-2" />
    </div>
  );
};
