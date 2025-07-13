import { Teko, Rubik } from "next/font/google";

export const tekoFont = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const rubikFont = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
