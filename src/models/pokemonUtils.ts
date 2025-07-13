import { _pokemonTypes, PokemonType } from "./pokemonDefinitions";

/**
 * Utility function to get the keys of an object as a typed array.
 * Prevents falling back to `string[]` type.
 */
export const typedObjectKeys = <T extends Record<string, unknown>>(
  obj: T
): (keyof T)[] => {
  return Object.keys(obj);
};

/**
 * Utility function to check if a value is included in an array.
 * Widens the type to `unknown` to avoid TypeScript errors with excessive null checks.
 */
export const unTypedIncludes = (array: readonly unknown[], value: unknown) => {
  return array.includes(value);
};

export const isPokemonType = (value: unknown): value is PokemonType => {
  return unTypedIncludes(_pokemonTypes, value);
};
