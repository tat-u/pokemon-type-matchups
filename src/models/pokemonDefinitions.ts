/**
 * NOTE: Should be imported in this module only
 */
export const _pokemonTypes = [
  "normal", // 0
  "fire", // 1
  "water", // 2
  "electric", // 3
  "grass", // 4
  "ice", // 5
  "fighting", // 6
  "poison", // 7
  "ground", // 8
  "flying", // 9
  "psychic", // 10
  "bug", // 11
  "rock", // 12
  "ghost", // 13
  "dragon", // 14
  "dark", // 15
  "steel", // 16
  "fairy", // 17
] as const;

export type PokemonType = (typeof _pokemonTypes)[number];

export type Vector18 = [
  number, // 0
  number, // 1
  number, // 2
  number, // 3
  number, // 4
  number, // 5
  number, // 6
  number, // 7
  number, // 8
  number, // 9
  number, // 10
  number, // 11
  number, // 12
  number, // 13
  number, // 14
  number, // 15
  number, // 16
  number // 17
];

export const effectivenessTable = {
  normal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -2, 0, 0, -1, 0],
  fire: [0, -1, -1, 0, 1, 1, 0, 0, 0, 0, 0, 1, -1, 0, -1, 0, 1, 0],
  water: [0, 1, -1, 0, -1, 0, 0, 0, 1, 0, 0, 0, 1, 0, -1, 0, 0, 0],
  electric: [0, 0, 1, -1, -1, 0, 0, 0, -2, 1, 0, 0, 0, 0, -1, 0, 0, 0],
  grass: [0, -1, 1, 0, -1, 0, 0, -1, 1, -1, 0, -1, 1, 0, -1, 0, -1, 0],
  ice: [0, -1, -1, 0, 1, -1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, -1, 0],
  fighting: [1, 0, 0, 0, 0, 1, 0, -1, 0, -1, -1, -1, 1, -2, 0, 1, 1, -1],
  poison: [0, 0, 0, 0, 1, 0, 0, -1, -1, 0, 0, 0, -1, -1, 0, 0, -2, 1],
  ground: [0, 1, 0, 1, -1, 0, 0, 1, 0, -2, 0, -1, 1, 0, 0, 0, 1, 0],
  flying: [0, 0, 0, -1, 1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, -1, 0],
  psychic: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, -1, 0, 0, 0, 0, -2, -1, 0],
  bug: [0, -1, 0, 0, 1, 0, -1, -1, 0, -1, 1, 0, 0, -1, 0, 1, -1, -1],
  rock: [0, 1, 0, 0, 0, 1, -1, 0, -1, 1, 0, 1, 0, 0, 0, 0, -1, 0],
  ghost: [-2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, -1, 0, 0],
  dragon: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, -1, -2],
  dark: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, -1, 0, -1],
  steel: [0, -1, -1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -1, 1],
  fairy: [0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, 1, 1, -1, 0],
} as const satisfies Record<PokemonType, Vector18>;

export const defensivenessTable = {
  normal: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, -2, 0, 0, 0, 0],
  fire: [0, -1, 1, 0, -1, -1, 0, 0, 1, 0, 0, -1, 1, 0, 0, 0, -1, -1],
  water: [0, -1, -1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  electric: [0, 0, 0, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, 0, 0, -1, 0],
  grass: [0, 1, -1, -1, -1, 1, 0, 1, -1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  ice: [0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  fighting: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, -1, -1, 0, 0, -1, 0, 1],
  poison: [0, 0, 0, 0, -1, 0, -1, -1, 1, 0, 1, -1, 0, 0, 0, 0, 0, -1],
  ground: [0, 0, 1, -2, 1, 1, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  flying: [0, 0, 0, 1, -1, 1, -1, 0, -2, 0, 0, -1, 1, 0, 0, 0, 0, 0],
  psychic: [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 1, 0, 1, 0, 1, 0, 0],
  bug: [0, 1, 0, 0, -1, 0, -1, 0, -1, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  rock: [-1, -1, 1, 0, 1, 0, 1, -1, 1, -1, 0, 0, 0, 0, 0, 0, 1, 0],
  ghost: [-2, 0, 0, 0, 0, 0, -2, -1, 0, 0, 0, -1, 0, 1, 0, 1, 0, 0],
  dragon: [0, -1, -1, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  dark: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1, 0, -1, 0, -1, 0, 1],
  steel: [-1, 1, 0, 0, -1, -1, 1, -2, 1, -1, -1, -1, -1, 0, -1, 0, -1, -1],
  fairy: [0, 0, 0, 0, 0, 0, -1, 1, 0, 0, 0, -1, 0, 0, -2, -1, 1, 0],
} as const satisfies Record<PokemonType, Vector18>;

export const noScalingVector = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
] as const satisfies Vector18;

// PRIVATE
const pokemonTypeColors = {
  normal: "#A1ABB3",
  fire: "#C73637",
  water: "#2975D6",
  electric: "#EDBD05",
  grass: "#37A320",
  ice: "#2FBFCF",
  fighting: "#DE7400",
  poison: "#8F4AC4",
  ground: "#804A1F",
  flying: "#78A9DB",
  psychic: "#D64777",
  bug: "#8A9919",
  rock: "#A8A37B",
  ghost: "#6E346E",
  dragon: "#4959D1",
  dark: "#4A3733",
  steel: "#62A2B9",
  fairy: "#E667E6",
} as const satisfies Record<PokemonType, string>;

export const pokemonTypes: Record<
  PokemonType,
  { index: number; name: Record<SupportedLanguages, string>; color: string }
> = {
  normal: {
    index: 0,
    name: { en: "Normal", ja: "ノーマル" },
    color: pokemonTypeColors.normal,
  },
  fire: {
    index: 1,
    name: { en: "Fire", ja: "ほのお" },
    color: pokemonTypeColors.fire,
  },
  water: {
    index: 2,
    name: { en: "Water", ja: "みず" },
    color: pokemonTypeColors.water,
  },
  electric: {
    index: 3,
    name: { en: "Electric", ja: "でんき" },
    color: pokemonTypeColors.electric,
  },
  grass: {
    index: 4,
    name: { en: "Grass", ja: "くさ" },
    color: pokemonTypeColors.grass,
  },
  ice: {
    index: 5,
    name: { en: "Ice", ja: "こおり" },
    color: pokemonTypeColors.ice,
  },
  fighting: {
    index: 6,
    name: { en: "Fighting", ja: "かくとう" },
    color: pokemonTypeColors.fighting,
  },
  poison: {
    index: 7,
    name: { en: "Poison", ja: "どく" },
    color: pokemonTypeColors.poison,
  },
  ground: {
    index: 8,
    name: { en: "Ground", ja: "じめん" },
    color: pokemonTypeColors.ground,
  },
  flying: {
    index: 9,
    name: { en: "Flying", ja: "ひこう" },
    color: pokemonTypeColors.flying,
  },
  psychic: {
    index: 10,
    name: { en: "Psychic", ja: "エスパー" },
    color: pokemonTypeColors.psychic,
  },
  bug: {
    index: 11,
    name: { en: "Bug", ja: "むし" },
    color: pokemonTypeColors.bug,
  },
  rock: {
    index: 12,
    name: { en: "Rock", ja: "いわ" },
    color: pokemonTypeColors.rock,
  },
  ghost: {
    index: 13,
    name: { en: "Ghost", ja: "ゴースト" },
    color: pokemonTypeColors.ghost,
  },
  dragon: {
    index: 14,
    name: { en: "Dragon", ja: "ドラゴン" },
    color: pokemonTypeColors.dragon,
  },
  dark: {
    index: 15,
    name: { en: "Dark", ja: "あく" },
    color: pokemonTypeColors.dark,
  },
  steel: {
    index: 16,
    name: { en: "Steel", ja: "はがね" },
    color: pokemonTypeColors.steel,
  },
  fairy: {
    index: 17,
    name: { en: "Fairy", ja: "フェアリー" },
    color: pokemonTypeColors.fairy,
  },
} as const;

/**
 * 👇 Localization 👇
 *
 * 📌Other than "specific" Pokemon types
 * 📌Texts for display in the frontend
 */

export type SupportedLanguages = "en" | "ja";

export const pokemonTypeNone = {
  name: { en: "None", ja: "なし" },
  color: "#ffffff",
} as const satisfies {
  name: Record<SupportedLanguages, string>;
  color: string;
};

export const pokemonI18n = {
  pageTitle: {
    en: "Quick type matchups",
    ja: "ざっくりタイプ相性ツール",
  },
  strongAgainst: {
    en: "Strong against",
    ja: "得意な相手",
  },
  weakAgainst: {
    en: "Weak against",
    ja: "苦手な相手",
  },
  goodDamageAgainst: {
    en: "Can inflict good damage against",
    ja: "ダメージが通りやすい相手ポケモン",
  },
  goodDefenseAgainst: {
    en: "Has good defense against",
    ja: "ダメージを受けにくい相手のわざ",
  },
  poorDamageAgainst: {
    en: "Can inflict poor damage against",
    ja: "ダメージが通りにくい相手ポケモン",
  },
  poorDefenseAgainst: {
    en: "Has poor defense against",
    ja: "ダメージを受けやすい相手のわざ",
  },
  recommendation: {
    en: "Rough suggestions",
    ja: "おすすめの相手",
  },
  recommendationA: {
    en: "Opponent's type",
    ja: "相手ポケモンのタイプ",
  },
  recommendationB: {
    en: "Opponent's move type",
    ja: "相手のわざのタイプ",
  },
  playerTypeA: {
    en: "Type 1",
    ja: "タイプ1",
  },
  playerTypeB: {
    en: "Type 2",
    ja: "タイプ2",
  },
  attackType: {
    en: "Move type",
    ja: "わざのタイプ",
  },
};
