import { ReminderSchema } from "@/models/reminder";
import { setTimeout } from "timers/promises";

export async function POST(req: Request) {
  const reminder = ReminderSchema.parse(JSON.parse(await req.text()));
  console.log("Awaiting backend...", reminder);
  await setTimeout(2000);
  console.log("Done!");
  return new Response("Response text", { status: 200 });
}
