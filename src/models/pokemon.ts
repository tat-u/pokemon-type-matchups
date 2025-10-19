export const pokemonTypeArray = [
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

export type PokemonType = (typeof pokemonTypeArray)[number];

export type PokemonTypeNone = "none";

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

/**
 * NOTE: Defensiveness table is just a transpose of the effectiveness table.
 */
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
const pokemonTypeColor = {
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

export const pokemonType = {
  normal: {
    index: 0,
    name: { en: "Normal", ja: "ノーマル" },
    color: pokemonTypeColor.normal,
  },
  fire: {
    index: 1,
    name: { en: "Fire", ja: "ほのお" },
    color: pokemonTypeColor.fire,
  },
  water: {
    index: 2,
    name: { en: "Water", ja: "みず" },
    color: pokemonTypeColor.water,
  },
  electric: {
    index: 3,
    name: { en: "Electric", ja: "でんき" },
    color: pokemonTypeColor.electric,
  },
  grass: {
    index: 4,
    name: { en: "Grass", ja: "くさ" },
    color: pokemonTypeColor.grass,
  },
  ice: {
    index: 5,
    name: { en: "Ice", ja: "こおり" },
    color: pokemonTypeColor.ice,
  },
  fighting: {
    index: 6,
    name: { en: "Fighting", ja: "かくとう" },
    color: pokemonTypeColor.fighting,
  },
  poison: {
    index: 7,
    name: { en: "Poison", ja: "どく" },
    color: pokemonTypeColor.poison,
  },
  ground: {
    index: 8,
    name: { en: "Ground", ja: "じめん" },
    color: pokemonTypeColor.ground,
  },
  flying: {
    index: 9,
    name: { en: "Flying", ja: "ひこう" },
    color: pokemonTypeColor.flying,
  },
  psychic: {
    index: 10,
    name: { en: "Psychic", ja: "エスパー" },
    color: pokemonTypeColor.psychic,
  },
  bug: {
    index: 11,
    name: { en: "Bug", ja: "むし" },
    color: pokemonTypeColor.bug,
  },
  rock: {
    index: 12,
    name: { en: "Rock", ja: "いわ" },
    color: pokemonTypeColor.rock,
  },
  ghost: {
    index: 13,
    name: { en: "Ghost", ja: "ゴースト" },
    color: pokemonTypeColor.ghost,
  },
  dragon: {
    index: 14,
    name: { en: "Dragon", ja: "ドラゴン" },
    color: pokemonTypeColor.dragon,
  },
  dark: {
    index: 15,
    name: { en: "Dark", ja: "あく" },
    color: pokemonTypeColor.dark,
  },
  steel: {
    index: 16,
    name: { en: "Steel", ja: "はがね" },
    color: pokemonTypeColor.steel,
  },
  fairy: {
    index: 17,
    name: { en: "Fairy", ja: "フェアリー" },
    color: pokemonTypeColor.fairy,
  },
} as const satisfies Record<
  PokemonType,
  { index: number; name: Record<SupportedLanguages, string>; color: string }
>;

export const pokemonTypeNone = {
  name: { en: "None", ja: "なし" },
  color: "#ffffff",
} as const satisfies {
  name: Record<SupportedLanguages, string>;
  color: string;
};

export type SupportedLanguages = "en" | "ja";
