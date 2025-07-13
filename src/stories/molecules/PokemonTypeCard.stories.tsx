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
  args: { children: "ノーマル", pokemonType: "normal", percentage: 100 },
};

export const Fire: Story = {
  args: { children: "ほのお", pokemonType: "fire", percentage: 100 },
};

export const Water: Story = {
  args: { children: "みず", pokemonType: "water", percentage: 100 },
};

export const Electric: Story = {
  args: { children: "でんき", pokemonType: "electric", percentage: 100 },
};

export const Steel: Story = {
  args: { children: "はがね", pokemonType: "steel", percentage: 100 },
};
