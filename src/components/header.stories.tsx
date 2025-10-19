import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./header";

const meta = {
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
