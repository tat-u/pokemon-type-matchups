export const getyBgTypeClassName = (str: string) => {
  switch (str) {
    case "none":
      return "bg-white";

    case "normal": // 0
      return "bg-type-normal";
    case "fire": // 1
      return "bg-type-fire";
    case "water": // 2
      return "bg-type-water";
    case "electric": // 3
      return "bg-type-electric";
    case "grass": // 4
      return "bg-type-grass";
    case "ice": // 5
      return "bg-type-ice";
    case "fighting": // 6
      return "bg-type-fighting";
    case "poison": // 7
      return "bg-type-poison";
    case "ground": // 8
      return "bg-type-ground";
    case "flying": // 9
      return "bg-type-flying";
    case "psychic": // 10
      return "bg-type-psychic";
    case "bug": // 11
      return "bg-type-bug";
    case "rock": // 12
      return "bg-type-rock";
    case "ghost": // 13
      return "bg-type-ghost";
    case "dragon": // 14
      return "bg-type-dragon";
    case "dark": // 15
      return "bg-type-dark";
    case "steel": // 16
      return "bg-type-steel";
    case "fairy": // 17
      return "bg-type-fairy";

    default:
      console.warn(`Unknown input: ${str}`);
      return "";
  }
};
