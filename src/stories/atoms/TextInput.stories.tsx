import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextInput } from "./TextInput";

const meta = {
  title: "atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
