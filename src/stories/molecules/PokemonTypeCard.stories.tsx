import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonTypeCard } from "./PokemonTypeCard";

const meta = {
  title: "atoms/PokemonTypeCard",
  component: PokemonTypeCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonTypeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { children: "ノーマル", type: "normal", percentage: 100 },
};

export const Fire: Story = {
  args: { children: "ほのお", type: "fire", percentage: 100 },
};

export const Water: Story = {
  args: { children: "みず", type: "water", percentage: 100 },
};

export const Electric: Story = {
  args: { children: "でんき", type: "electric", percentage: 100 },
};

export const Steel: Story = {
  args: { children: "はがね", type: "steel", percentage: 100 },
};
