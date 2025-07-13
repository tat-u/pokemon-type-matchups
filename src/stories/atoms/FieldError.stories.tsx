import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FieldError } from "./FieldError";

const meta = {
  title: "atoms/FieldError",
  component: FieldError,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FieldError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "タイトルが長すぎます" },
};
