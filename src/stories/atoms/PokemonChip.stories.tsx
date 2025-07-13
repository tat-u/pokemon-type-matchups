import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonChip } from "./PokemonChip";

const meta = {
  title: "atoms/PokemonChip",
  component: PokemonChip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example256: Story = {
  args: { children: "256%", percentage: 256 },
};

export const Example160: Story = {
  args: { children: "160%", percentage: 160 },
};

export const Example100: Story = {
  args: { children: "100%", percentage: 100 },
};

export const Example63: Story = {
  args: { children: "63%", percentage: 63 },
};

export const Example39: Story = {
  args: { children: "39%", percentage: 39 },
};

export const Example24: Story = {
  args: { children: "24%", percentage: 24 },
};

export const Fallback: Story = {
  args: { children: "NaN", percentage: 0 },
};
