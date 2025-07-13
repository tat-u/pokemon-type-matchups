export const languages = {
  en: { id: "en", name: "English" },
  ja: { id: "ja", name: "日本語" },
} as const;

export type SupportedLanguages = keyof typeof languages;

export const isAvailableLanguage = (
  lang: string
): lang is SupportedLanguages => {
  return Object.keys(languages).includes(lang);
};
