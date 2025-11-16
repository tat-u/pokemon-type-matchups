import {
  PokemonType,
  pokemonType,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
} from "../models/pokemon";

export const getAtkEffectiveness = (
  tPlayerMove: PokemonType,
  tOpponentA: PokemonType,
  tOpponentB: PokemonType | null
) => {
  const effectivenessVector = effectivenessTable[tPlayerMove];

  // NOTE: Opponent's type can be a single type or a dual type
  const effectivenessA = effectivenessVector[pokemonType[tOpponentA].index];
  const effectivenessB = tOpponentB
    ? effectivenessVector[pokemonType[tOpponentB].index]
    : 0;

  return effectivenessA + effectivenessB;
};

export const getDefEffectiveness = (
  tPlayerA: PokemonType,
  tPlayerB: PokemonType | null,
  tOpponentMove: PokemonType
) => {
  // NOTE: Player's type can be a single type or a dual type
  const defensivenessVectorA = defensivenessTable[tPlayerA];
  const defensivenessVectorB = tPlayerB
    ? defensivenessTable[tPlayerB]
    : noScalingVector;

  const defensivenessA = defensivenessVectorA[pokemonType[tOpponentMove].index];
  const defensivenessB = defensivenessVectorB[pokemonType[tOpponentMove].index];

  return defensivenessA + defensivenessB;
};
