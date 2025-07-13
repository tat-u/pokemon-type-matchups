import {
  PokemonType,
  SupportedLanguages,
  pokemonTypes,
  noScalingVector,
  effectivenessTable,
  defensivenessTable,
  pokemonTypeNone,
} from "./pokemonDefinitions";
import { typedObjectKeys } from "./pokemonUtils";

export const getPokemonTypeIndex = (pokemonType: PokemonType): number => {
  return pokemonTypes[pokemonType].index;
};

export const getPokemonTypeColor = (
  pokemonType: PokemonType | "none"
): string => {
  if (pokemonType === "none") {
    return pokemonTypeNone.color;
  } else {
    return pokemonTypes[pokemonType].color;
  }
};

export const getPokemonTypeName = (
  pokemonType: PokemonType | "none",
  lang: SupportedLanguages
): string => {
  if (pokemonType === "none") {
    return pokemonTypeNone.name[lang];
  } else {
    return pokemonTypes[pokemonType].name[lang];
  }
};

export const getEffectiveness = (
  playerAttackType: PokemonType,
  opponentTypeA: PokemonType,
  opponentTypeB: PokemonType | null
) => {
  const effectivenessVector = effectivenessTable[playerAttackType];

  // NOTE: Opponent's type can be a single type or a dual type
  const effectivenessA =
    effectivenessVector[getPokemonTypeIndex(opponentTypeA)];
  const effectivenessB = opponentTypeB
    ? effectivenessVector[getPokemonTypeIndex(opponentTypeB)]
    : 0;

  return effectivenessA + effectivenessB;
};

export const getDefensiveness = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  opponentAttackType: PokemonType
) => {
  // NOTE: Player's type can be a single type or a dual type
  const defensivenessVectorA = defensivenessTable[playerTypeA];
  const defensivenessVectorB = playerTypeB
    ? defensivenessTable[playerTypeB]
    : noScalingVector;

  const defensivenessA =
    defensivenessVectorA[getPokemonTypeIndex(opponentAttackType)];
  const defensivenessB =
    defensivenessVectorB[getPokemonTypeIndex(opponentAttackType)];

  return defensivenessA + defensivenessB;
};

export const getInflictDamageMultiplier = (
  playerAttackType: PokemonType,
  opponentTypeA: PokemonType,
  opponentTypeB: PokemonType | null
) => {
  const effectiveness = getEffectiveness(
    playerAttackType,
    opponentTypeA,
    opponentTypeB
  );
  return Math.pow(1.6, effectiveness);
};

export const getReceiveDamageMultiplier = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  opponentAttackType: PokemonType
) => {
  const defensiveness = getDefensiveness(
    playerTypeA,
    playerTypeB,
    opponentAttackType
  );
  return Math.pow(1.6, defensiveness);
};

export const generateAttackChart = (playerAttackType: PokemonType) => {
  return typedObjectKeys(pokemonTypes)
    .map((pokemonType) => ({
      pokemonType,
      getEffectiveness: getEffectiveness(playerAttackType, pokemonType, null),
      damageMultiplierPercent: Math.round(
        100 * getInflictDamageMultiplier(playerAttackType, pokemonType, null)
      ),
    }))
    .sort((a, b) => b.damageMultiplierPercent - a.damageMultiplierPercent);
};

export const generateDefenseChart = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null
) => {
  return typedObjectKeys(pokemonTypes)
    .map((pokemonType) => ({
      pokemonType,
      getDefensiveness: getDefensiveness(playerTypeA, playerTypeB, pokemonType),
      damageMultiplierPercent: Math.round(
        100 * getReceiveDamageMultiplier(playerTypeA, playerTypeB, pokemonType)
      ),
    }))
    .sort((a, b) => a.damageMultiplierPercent - b.damageMultiplierPercent);
};

export const generateRecommendedChart = (
  playerTypeA: PokemonType,
  playerTypeB: PokemonType | null,
  playerAttackType: PokemonType
) => {
  const hasGoodDefenseAgainst = generateDefenseChart(
    playerTypeA,
    playerTypeB
  ).filter((entry) => entry.damageMultiplierPercent < 100);
  const canInflictGoodDamageAgainst = generateAttackChart(
    playerAttackType
  ).filter((entry) => entry.damageMultiplierPercent > 100);
  const hasPoorDefenseAgainst = generateDefenseChart(
    playerTypeA,
    playerTypeB
  ).filter((entry) => entry.damageMultiplierPercent > 100);
  const canInflictPoorDamageAgainst = generateAttackChart(
    playerAttackType
  ).filter((entry) => entry.damageMultiplierPercent < 100);
  // Recommendation
  const { gDmgFiltered: recommendationA, gDefFiltered: recommendationB } =
    calcRecommendation(
      JSON.parse(JSON.stringify(canInflictGoodDamageAgainst)),
      JSON.parse(JSON.stringify(hasGoodDefenseAgainst)),
      JSON.parse(JSON.stringify(canInflictPoorDamageAgainst)),
      JSON.parse(JSON.stringify(hasPoorDefenseAgainst))
    );

  return {
    hasGoodDefenseAgainst,
    canInflictGoodDamageAgainst,
    hasPoorDefenseAgainst,
    canInflictPoorDamageAgainst,
    recommendationA,
    recommendationB,
  };
};

// PRIVATE
// TODO: REFACTOR this to be more readable, typed, and efficient
const calcRecommendation = (gDmg, gDef, pDmg, pDef) => {
  const excludeTypes = pDmg.concat(pDef).map((e) => e.pokemonType);
  const gDmgFiltered = gDmg.filter(
    (e) => !excludeTypes.includes(e.pokemonType)
  );
  const gDefFiltered = gDef.filter(
    (e) => !excludeTypes.includes(e.pokemonType)
  );
  return { gDmgFiltered, gDefFiltered };
};
