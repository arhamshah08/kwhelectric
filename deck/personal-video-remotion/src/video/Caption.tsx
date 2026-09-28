import React from "react";
import {Easing, interpolate, useCurrentFrame} from "remotion";
import {COLORS, FONT} from "./theme";

export const Caption: React.FC<{
  children: React.ReactNode;
  from: number;
  to: number;
  align?: "left" | "center";
}> = ({children, from, to, align = "left"}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        position: "absolute",
        left: align === "center" ? 240 : 96,
        right: align === "center" ? 240 : 920,
        top: align === "center" ? 370 : 86,
        zIndex: 100,
        color: COLORS.ink,
        fontFamily: FONT,
        fontSize: 64,
        fontWeight: 600,
        lineHeight: 1.08,
        letterSpacing: "-0.035em",
        textAlign: align,
        opacity: interpolate(
          frame,
          [from, from + 16, to - 16, to],
          [0, 1, 1, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
        translate: interpolate(
          frame,
          [from, from + 20, to - 16, to],
          ["0px 22px", "0px 0px", "0px 0px", "0px -14px"],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
      }}
    >
      {children}
    </div>
  );
};

export const Label: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({children, style}) => (
  <div
    style={{
      color: COLORS.ink,
      fontFamily: FONT,
      fontSize: 22,
      fontWeight: 500,
      lineHeight: 1.35,
      ...style,
    }}
  >
    {children}
  </div>
);
