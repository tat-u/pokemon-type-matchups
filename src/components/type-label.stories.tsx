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

export const Circle: Story = {
  args: {
    variant: "circle",
    className: "bg-red-500",
  },
};

export const Square: Story = {
  args: {
    variant: "square",
    className: "bg-red-500 h-8",
  },
};
