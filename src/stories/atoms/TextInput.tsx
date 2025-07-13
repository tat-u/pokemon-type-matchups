import { useRef, ComponentProps } from "react";

type Props = Omit<ComponentProps<"input">, "className" | "type">;

export function TextInput({ ref, ...rest }: Props) {
  // Share input ref
  const altRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => altRef.current?.focus();

  return (
    <div
      onClick={handleClick}
      className="w-[320px] h-[40px] px-[16px] rounded-sm bg-slate-100 hover:bg-slate-200 flex items-center"
    >
      <input
        type="text"
        className="h-fit text-sm/[24px] outline-0 flex-1"
        ref={(e) => {
          if (typeof ref === "function") {
            ref(e);
          }
          altRef.current = e;
        }}
        {...rest}
      />
    </div>
  );
}
