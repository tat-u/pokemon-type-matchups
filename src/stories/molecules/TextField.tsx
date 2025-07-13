import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../atoms/Label";
import { TextInput } from "../atoms/TextInput";
import { FieldError } from "../atoms/FieldError";

type Props = {
  label: string;
  error: string | undefined;
  registerReturn?: UseFormRegisterReturn | undefined;
};

export function TextField({ label, registerReturn, error }: Props) {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <TextInput id={id} {...registerReturn} />
      <FieldError>{error}</FieldError>
    </div>
  );
}

// TODO: aria-describedby を使った a11y 対応
