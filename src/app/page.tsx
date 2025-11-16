"use client";
import { getAtkEffectiveness, getDefEffectiveness } from "@/lib/pokemon";

import { useState } from "react";

import { Sword, Shield } from "lucide-react";
import { Header } from "../components/header";
import { TypeSelect } from "./_components/type-select";
import { MatchupCard } from "@/components/matchup-card";

import { typeSelectOptions } from "./_constants/type-select-options";

import type { PokemonType } from "@/models/pokemon";

export default function Page() {
  const [type1, setType1] = useState("normal");
  const [type2, setType2] = useState("none");
  const [moveType, setMoveType] = useState("normal");

  return (
    <>
      <Header className="w-full sticky top-0" />
      <main className="flex flex-col gap-5 items-center p-5">
        <p className="w-full text-sm text-center">
          あなたのポケモンのタイプとわざのタイプから、各タイプの相手ポケモンとの相性を調べます。
        </p>

        <div className="w-70 flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Sword className="size-5" />
            <span className="text-sm w-full">
              このタイプのポケモンを攻撃したときの有利・不利
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Shield className="size-5" />
            <span className="text-sm w-full">
              このタイプのわざを受けたときの有利・不利
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-60">
          <div className="flex justify-between items-center">
            <span className="text-sm">タイプ 1</span>
            <TypeSelect
              name="type1"
              items={typeSelectOptions}
              value={type1}
              onValueChange={setType1}
              disabledItems={["none", type2]}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">タイプ 2</span>
            <TypeSelect
              name="type2"
              items={typeSelectOptions}
              value={type2}
              onValueChange={setType2}
              disabledItems={[type1]}
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">わざのタイプ</span>
            <TypeSelect
              name="moveType"
              items={typeSelectOptions}
              value={moveType}
              onValueChange={setMoveType}
              disabledItems={["none"]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {typeSelectOptions.map(({ value, text }) => (
            <MatchupCard
              key={value}
              type={value}
              text={text}
              atkEffectiveness={getAtkEffectiveness(
                moveType as PokemonType,
                value as PokemonType,
                null
              )}
              defEffectiveness={getDefEffectiveness(
                type1 as PokemonType,
                type2 === "none" ? null : (type2 as PokemonType),
                value as PokemonType
              )}
            />
          ))}
        </div>
      </main>
    </>
  );
}
