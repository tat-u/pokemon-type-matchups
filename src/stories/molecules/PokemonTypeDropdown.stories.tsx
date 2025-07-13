import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PokemonTypeDropdown } from "./PokemonTypeDropdown";
import { useState } from "react";
import { PokemonType } from "@/models/pokemonDefinitions";

const meta = {
  title: "atoms/PokemonTypeDropdown",
  component: PokemonTypeDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PokemonTypeDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: ({
    currentChecked: _currentChecked,
    handleChange: _handleChange,
    ...rest
  }) => {
    const [currentChecked, setCurrentChecked] = useState<PokemonType | null>(
      null
    );
    return (
      <PokemonTypeDropdown
        {...rest}
        currentChecked={currentChecked}
        handleChange={setCurrentChecked}
      />
    );
  },
  args: {
    name: "pokemon_type",
    currentChecked: "normal",
    excludeTypes: ["fire", null],
    lang: "ja",
    handleChange: () => {},
  },
};
