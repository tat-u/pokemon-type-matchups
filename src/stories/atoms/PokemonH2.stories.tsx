import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonH2 } from "./PokemonH2";

const meta = {
  title: "atoms/PokemonH2",
  component: PokemonH2,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonH2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "見出し2" },
};
