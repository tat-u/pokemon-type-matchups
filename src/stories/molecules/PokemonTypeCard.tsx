import { PokemonType } from "@/models/pokemonDefinitions";
import { PokemonChip } from "../atoms/PokemonChip";
import { getPokemonTypeColor } from "@/models/pokemonTypeChart";

type Props = { children: string; pokemonType: PokemonType; percentage: number };

export function PokemonTypeCard({ children, pokemonType, percentage }: Props) {
  return (
    <div
      className={`w-[144px] h-[32px] rounded-lg flex shrink-0 items-center shadow-sm overflow-hidden`}
    >
      <div
        style={{
          backgroundColor: getPokemonTypeColor(pokemonType),
        }}
        className={`w-[8px] h-full`}
      ></div>
      <div className="flex w-full h-full flex-row items-center justify-between px-[8px] bg-stone-100 text-black font-bold">
        <div className="text-sm/[14px]">{children}</div>
        <PokemonChip percentage={percentage}>{`${percentage}%`}</PokemonChip>
      </div>
    </div>
  );
}
