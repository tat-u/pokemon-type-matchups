import z from "zod";

export const ReminderSchema = z.object({
  title: z.string().min(1, "入力してください"),
  message: z.string().min(1, "入力してください"),
  // TODO: Add this param
  // scheduledAt: z.date(),
});

export const ReminderKeySchema = ReminderSchema.keyof();

export type Reminder = z.infer<typeof ReminderSchema>;

export type ReminderKey = z.infer<typeof ReminderKeySchema>;
