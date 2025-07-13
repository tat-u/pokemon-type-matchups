import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonH1 } from "./PokemonH1";

const meta = {
  title: "atoms/PokemonH1",
  component: PokemonH1,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonH1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: "見出し1" },
};
