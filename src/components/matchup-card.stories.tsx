import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MatchupCard } from "./matchup-card";

const meta = {
  component: MatchupCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MatchupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    type: "fire",
    text: "Fire",
    atkEffectiveness: 1,
    defEffectiveness: -1,
  },
};
