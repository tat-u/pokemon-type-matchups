import {
  PokemonType,
  pokemonType,
  effectivenessTable,
} from "../models/pokemon";

export const getEffectiveness = (
  moveType: PokemonType,
  targetType1: PokemonType,
  targetType2: PokemonType | null
) => {
  const vector = effectivenessTable[moveType];

  const effectivenessA = vector[pokemonType[targetType1].index];
  const effectivenessB = targetType2
    ? vector[pokemonType[targetType2].index]
    : 0;

  return effectivenessA + effectivenessB;
};
