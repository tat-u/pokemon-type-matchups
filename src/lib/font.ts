import { Noto_Sans_JP } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
