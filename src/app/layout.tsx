import "./globals.css";
import { notoSansJP } from "@/lib/font";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matchups",
  description: "Pokemon Type Matchup Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSansJP.className}>
      <body className="flex justify-center">
        <div className="max-w-120">{children}</div>
      </body>
    </html>
  );
}
