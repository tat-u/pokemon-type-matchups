import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TypeLabel } from "./type-label";

const meta = {
  component: TypeLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TypeLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { type: "fire", className: "size-10" },
};
