import type { Metadata } from "next";

import "@/styles/globals.css";

import { Providers } from "@/providers";

import { fonts } from "../../public/fonts";

const fontVariables = fonts.map((font) => font.variable).join(" ");

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${fontVariables} font-roboto antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
