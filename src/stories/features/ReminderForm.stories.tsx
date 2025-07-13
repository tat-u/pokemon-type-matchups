import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReminderForm } from "./ReminderForm";

const meta = {
  title: "features/ReminderForm",
  component: ReminderForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ReminderForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Visual test only
 */
export const Example: Story = {
  args: {},
};
