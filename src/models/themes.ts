export const themes = {
  bumblebee: { id: "bumblebee", name: "Bumblebee" },
  halloween: { id: "halloween", name: "Halloween" },
  lofi: { id: "lofi", name: "Lofi" },
  valentine: { id: "valentine", name: "Valentine" },
  caramellatte: { id: "caramellatte", name: "Caramel Latte" },
  autumn: { id: "autumn", name: "Autumn" },
  aqua: { id: "aqua", name: "Aqua" },
  synthwave: { id: "synthwave", name: "Synthwave" },
  night: { id: "night", name: "Night" },
} as const;

export type Theme = keyof typeof themes;

export const isAvailableTheme = (theme: string): theme is Theme => {
  return Object.keys(themes).includes(theme);
};
