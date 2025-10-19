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
      <body className="m-auto max-w-120">{children}</body>
    </html>
  );
}
