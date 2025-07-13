import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "./Label";

const meta = {
  title: "atoms/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "入力欄" },
};
