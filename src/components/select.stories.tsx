import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Select } from "./select";

const meta = {
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { value: "none", text: "なし" },
      { value: "normal", text: "ノーマル" },
      { value: "fire", text: "ほのお" },
      { value: "water", text: "みず" },
      { value: "grass", text: "くさ" },
      { value: "electric", text: "でんき" },
      { value: "ice", text: "こおり" },
      { value: "fighting", text: "かくとう" },
      { value: "poison", text: "どく" },
      { value: "ground", text: "じめん" },
      { value: "flying", text: "ひこう" },
      { value: "psychic", text: "エスパー" },
      { value: "bug", text: "むし" },
      { value: "rock", text: "いわ" },
      { value: "ghost", text: "ゴースト" },
      { value: "dragon", text: "ドラゴン" },
      { value: "dark", text: "あく" },
      { value: "steel", text: "はがね" },
      { value: "fairy", text: "フェアリー" },
    ],
    disabledItems: ["fire", "water"],
    value: "grass",
    onValueChange: fn(),
  },
};
