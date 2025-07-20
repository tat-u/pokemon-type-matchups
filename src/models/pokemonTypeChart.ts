import {
  PokemonType,
  pokemonType,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
} from "./pokemonDefinitions";
import { typedObjectKeys, unique } from "./pokemonUtils";

export const getEffectiveness = (
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

export const getDefensiveness = (
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

export const getInflictDamageMultiplier = (
  tPlayerMove: PokemonType,
  tOpponentA: PokemonType,
  tOpponentB: PokemonType | null
) => {
  const effectiveness = getEffectiveness(tPlayerMove, tOpponentA, tOpponentB);
  return Math.pow(1.6, effectiveness);
};

export const getReceiveDamageMultiplier = (
  tPlayerA: PokemonType,
  tPlayerB: PokemonType | null,
  tOpponentMove: PokemonType
) => {
  const defensiveness = getDefensiveness(tPlayerA, tPlayerB, tOpponentMove);
  return Math.pow(1.6, defensiveness);
};

export const generateAttackChart = (tPlayerMove: PokemonType) => {
  return typedObjectKeys(pokemonType)
    .map((t) => ({
      pokemonType: t,
      damageMultiplierPercent: Math.round(
        100 * getInflictDamageMultiplier(tPlayerMove, t, null)
      ),
    }))
    .sort((a, b) => b.damageMultiplierPercent - a.damageMultiplierPercent);
};

export const generateDefenseChart = (
  tPlayerA: PokemonType,
  tPlayerB: PokemonType | null
) => {
  return typedObjectKeys(pokemonType)
    .map((t) => ({
      pokemonType: t,
      damageMultiplierPercent: Math.round(
        100 * getReceiveDamageMultiplier(tPlayerA, tPlayerB, t)
      ),
    }))
    .sort((a, b) => a.damageMultiplierPercent - b.damageMultiplierPercent);
};

export const generateRecommendedChart = (
  tPlayerA: PokemonType,
  tPlayerB: PokemonType | null,
  tPlayerMove: PokemonType
) => {
  const hasGoodDefenseAgainst = generateDefenseChart(tPlayerA, tPlayerB).filter(
    (entry) => entry.damageMultiplierPercent < 100
  );
  const canInflictGoodDamageAgainst = generateAttackChart(tPlayerMove).filter(
    (entry) => entry.damageMultiplierPercent > 100
  );
  const hasPoorDefenseAgainst = generateDefenseChart(tPlayerA, tPlayerB).filter(
    (entry) => entry.damageMultiplierPercent > 100
  );
  const canInflictPoorDamageAgainst = generateAttackChart(tPlayerMove).filter(
    (entry) => entry.damageMultiplierPercent < 100
  );

  const excludeTypes = unique([
    ...hasPoorDefenseAgainst.map((entry) => entry.pokemonType),
    ...canInflictPoorDamageAgainst.map((entry) => entry.pokemonType),
  ]);

  const maybeGoodAgainst = hasGoodDefenseAgainst.filter((entry) =>
    excludeTypes.includes(entry.pokemonType)
  );
  const maybeBadAgainst = canInflictGoodDamageAgainst.filter((entry) =>
    excludeTypes.includes(entry.pokemonType)
  );

  return {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
    maybeGoodAgainst,
    maybeBadAgainst,
  };
};
