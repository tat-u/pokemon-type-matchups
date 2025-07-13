import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode, Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon type matchups",
  description: "A tool for Pokemon beginners to quickly check type matchups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // WARN: Suppress hydration warning to forcibly set the theme on the client side.
    <html suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[600px] mx-auto px-[16px]`}
      >
        {/* WARN: Maybe need to sanitize */}
        {/* TODO: Investigate when the script is executed */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("theme");
            if (theme) {
              document.documentElement.setAttribute("data-theme", theme);
            }
            `,
          }}
        ></script>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
