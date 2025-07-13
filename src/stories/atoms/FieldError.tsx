import { ComponentProps } from "react";

type Props = Omit<ComponentProps<"div">, "className">;

export function FieldError(props: Props) {
  return <div {...props} className="h-[24px] text-sm/[24px] text-red-600" />;
}
