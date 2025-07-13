import {
  Teko,
  Rubik,
  Cedarville_Cursive,
  Playwrite_DE_Grund,
  Playwrite_GB_S
} from "next/font/google";

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

export const cedarvilleCursiveFont = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const playwriteGBSFont = Playwrite_GB_S({
  weight: ["300", "400"],
  display: "swap",
});

export const playwriteDEGrundFont = Playwrite_DE_Grund({
  weight: ["300", "400"],
  display: "swap",
});
