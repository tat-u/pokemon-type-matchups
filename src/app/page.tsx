"use client";

import { PokemonTypeCard } from "@/stories/molecules/PokemonTypeCard";
import { PokemonH1 } from "@/stories/atoms/PokemonH1";
import { PokemonH2 } from "@/stories/atoms/PokemonH2";
import {
  generateRecommendedChart,
  getPokemonTypeName,
} from "@/models/pokemonTypeChart";
import { PokemonType, pokemonI18n } from "@/models/pokemonDefinitions";
import { ThemeController } from "@/stories/atoms/ThemeController";
import { PokemonTypeDropdown } from "@/stories/molecules/PokemonTypeDropdown";
import { useState } from "react";
import { useLang } from "@/models/useLang";
import { LangController } from "@/stories/atoms/LangController";

export default function Home() {
  const { lang } = useLang();

  const [playerTypeA, setPlayerTypeA] = useState<PokemonType>("normal");
  const [playerTypeB, setPlayerTypeB] = useState<PokemonType | null>(null);
  const [playerAttackType, setPlayerAttackType] =
    useState<PokemonType>("normal");

  const handlePlayerTypeAChange = (value: PokemonType | null) => {
    if (value === null) {
      throw new Error();
    }
    setPlayerTypeA(value);
  };
  const handlePlayerTypeBChange = (value: PokemonType | null) => {
    setPlayerTypeB(value);
  };
  const handlePlayerAttackTypeChange = (value: PokemonType | null) => {
    if (value === null) {
      throw new Error();
    }
    setPlayerAttackType(value);
  };

  const {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
    recommendationA,
    recommendationB,
  } = generateRecommendedChart(playerTypeA, playerTypeB, playerAttackType);

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-shadow-lg/10 font-bold">
          {pokemonI18n.pageTitle[lang]}
        </span>
        <div>
          <ThemeController />
          <LangController />
        </div>
      </div>
      <div className="d-divider mt-0 mb-10 h-fit"></div>

      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          {pokemonI18n.playerTypeA[lang]}
          <PokemonTypeDropdown
            name="player_type_a"
            currentChecked={playerTypeA}
            excludeTypes={[null, playerTypeB]}
            lang={lang}
            handleChange={handlePlayerTypeAChange}
          />
        </div>
        <div className="flex flex-col items-center">
          {pokemonI18n.playerTypeB[lang]}
          <PokemonTypeDropdown
            name="player_type_b"
            currentChecked={playerTypeB}
            excludeTypes={[playerTypeA]}
            lang={lang}
            handleChange={handlePlayerTypeBChange}
          />
        </div>
        <div className="flex flex-col items-center">
          {pokemonI18n.attackType[lang]}
          <PokemonTypeDropdown
            name="player_attack_type"
            currentChecked={playerAttackType}
            excludeTypes={[null]}
            lang={lang}
            handleChange={handlePlayerAttackTypeChange}
          />
        </div>
      </div>

      <PokemonH1>{pokemonI18n.strongAgainst[lang]}</PokemonH1>
      <PokemonH2>{pokemonI18n.goodDamageAgainst[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {canInflictGoodDamageAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH2>{pokemonI18n.goodDefenseAgainst[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around">
        {hasGoodDefenseAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH1>{pokemonI18n.weakAgainst[lang]}</PokemonH1>
      <PokemonH2>{pokemonI18n.poorDamageAgainst[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {canInflictPoorDamageAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH2>{pokemonI18n.poorDefenseAgainst[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {hasPoorDefenseAgainst.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH1>{pokemonI18n.recommendation[lang]}</PokemonH1>
      <PokemonH2>{pokemonI18n.recommendationA[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {recommendationA.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <PokemonH2>{pokemonI18n.recommendationB[lang]}</PokemonH2>
      <div className="flex flex-wrap gap-2 justify-around ">
        {recommendationB.map((entry) => (
          <PokemonTypeCard
            key={entry.pokemonType}
            pokemonType={entry.pokemonType}
            percentage={entry.damageMultiplierPercent}
          >
            {getPokemonTypeName(entry.pokemonType, lang)}
          </PokemonTypeCard>
        ))}
      </div>
      <div className="my-10"></div>
    </>
  );
}
