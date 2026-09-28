import {loadFont} from "@remotion/google-fonts/DMSans";

const {fontFamily} = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const FONT = fontFamily;

export const COLORS = {
  ink: "#111111",
  green: "#16A34A",
  greenSoft: "#DCFCE7",
  greenPale: "#F0FDF4",
  paper: "#FFFFFF",
  warm: "#FAFAF7",
  surface: "#F5F5F2",
  line: "#DEDED8",
  lineStrong: "#B8B8B0",
};

export const clamp = (value: number) => Math.max(0, Math.min(1, value));

export const smooth = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

export const range = (frame: number, from: number, to: number) =>
  smooth((frame - from) / (to - from));

export const windowOpacity = (
  frame: number,
  from: number,
  to: number,
  edge = 14,
) => Math.min(clamp((frame - from) / edge), clamp((to - frame) / edge));
