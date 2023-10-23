import type { TextStyle, ViewStyle } from "react-native";

export const colors = {
  orcaBlue: "#012e57",
  oceanBlue: "#0063fc",
  turquoise: "#12e6de",
  electricAqua: "#7bf7ff",
  coralOrange: "#fd846f",
  rayYellow: "#ffe380",
  lightGrey: "#f4f5f7",
  midGrey: "#9099b4",
  white: "#ffffff",
} as const;

export type Color = keyof typeof colors;

export const fontFamilies = {
  sans: "Exo",
  serif: "Alegreya",
  monospace: "SourceCodePro",
} as const;

export type Font = keyof typeof fontFamilies;

export const fontSizes = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
} as const;

export type FontSize = keyof typeof fontSizes;

export const lineHeightMultipliers = {
  sm: 1.5,
  md: 1.5,
  lg: 1.3,
  xl: 1.2,
} as const;

export const text = ({
  font = "sans",
  size = "md",
  color = "orcaBlue",
}: {
  font?: Font;
  size?: FontSize;
  color?: Color;
}): TextStyle => {
  const fontFamily = fontFamilies[font];
  const fontSize = fontSizes[size];
  const lineHeight = fontSize * lineHeightMultipliers[size];
  const colorValue = colors[color];
  return {
    fontFamily,
    fontSize,
    lineHeight,
    color: colorValue,
  };
};

export const container: ViewStyle = {
  backgroundColor: colors.white,
  flex: 1,
};

export const row: ViewStyle = {
  flexDirection: "row",
};

export default {
  text,
  container,
  row,
};
