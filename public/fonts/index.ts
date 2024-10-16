import { Roboto_Flex, Zen_Dots } from "next/font/google";

const roboto = Roboto_Flex({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-roboto"
});

const zen_dots = Zen_Dots({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-zen_dots"
});

export const fonts = [roboto, zen_dots];
