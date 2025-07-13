import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeController } from "./ThemeController";

const meta = {
  title: "atoms/ThemeController",
  component: ThemeController,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ThemeController>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
