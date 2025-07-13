import { ComponentProps } from "react";

type Props = Omit<ComponentProps<"label">, "className">;

export function Label(props: Props) {
  return <label {...props} className="block h-fit text-sm/[24px]" />;
}
