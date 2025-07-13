"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reminder, ReminderSchema } from "@/models/reminder";
import { TextField } from "../molecules/TextField";
import { SubmitButton } from "../atoms/SubmitButton";

export function ReminderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Reminder>({
    resolver: zodResolver(ReminderSchema),
  });
  const submitHandler: SubmitHandler<Reminder> = async (data) => {
    await fetch("/api/reminder", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
  const submitErrorHandler: SubmitErrorHandler<Reminder> = () => {
    // ほとんどの場合、バリデーションエラーによって呼び出される
    console.log("Validation error");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler, submitErrorHandler)}
      className="m-[16px] w-fit flex flex-col gap-[8px] items-center"
    >
      <TextField
        label="タイトル"
        registerReturn={register("title")}
        error={errors.title?.message}
      />
      <TextField
        label="本文"
        registerReturn={register("message")}
        error={errors.message?.message}
      />
      <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
    </form>
  );
}
