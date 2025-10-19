import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Select } from "./select";

const meta = {
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "type1",
    options: [
      { value: "none", text: "なし" },
      { value: "normal", text: "ノーマル" },
      { value: "fire", text: "ほのお" },
      { value: "water", text: "みず" },
      { value: "grass", text: "くさ" },
    ],
    defaultValue: "normal",
    disabledOptions: ["none"],
    onValueChange: fn(),
  },
};
