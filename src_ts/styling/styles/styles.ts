import { StyleSheet } from "react-native";

// colors
export const colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  darkGray: "#666666",
  lightGray: "#eeeeee",
  blue: "#012e57",
  turquoise: "#12e6de",
} as const;

// font families and sizes
export const fonts = {
  sans: "Exo",
  serif: "Alegreya",
} as const;

export const sizes = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
} as const;

// margins and padding
export const spacing = {
  sm: 4,
  md: 12,
  lg: 18,
} as const;

// style groups
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  paddedContainer: {
    flex: 1,
    backgroundColor: colors.white,
    padding: spacing.md,
    gap: spacing.md,
  },
  shadow: {
    shadowColor: colors.darkGray,
    shadowOpacity: 0.3,
    shadowRadius: spacing.sm,
  },
  text: {
    fontFamily: fonts.sans,
    fontSize: sizes.md,
    color: colors.black,
    lineHeight: 1.5 * sizes.md,
  },
});
