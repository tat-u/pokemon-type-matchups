import { useSearchParams } from "next/navigation";
import { isAvailableLanguage } from "./lang";

export const useLang = () => {
  const searchParams = useSearchParams();
  const langParam = searchParams.get("lang") || "ja";
  const lang = isAvailableLanguage(langParam) ? langParam : "ja";

  return { lang };
};
