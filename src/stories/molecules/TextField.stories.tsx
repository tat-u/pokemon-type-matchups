import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextField } from "./TextField";

const meta = {
  title: "molecules/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { label: "タイトル", error: "入力してください" },
};
