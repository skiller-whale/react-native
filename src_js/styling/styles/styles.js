// colors
export const colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  darkGray: "#666666",
  lightGray: "#eeeeee",
  blue: "#012e57",
  turquoise: "#12e6de",
};

// font families and sizes
export const fonts = {
  sans: "Exo",
  serif: "Alegreya",
};

export const sizes = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 26,
};

// margins and padding
export const spacing = {
  sm: 4,
  md: 12,
  lg: 18,
};

// style groups
const container = {
  flex: 1,
  backgroundColor: colors.white,
};

const paddedContainer = {
  ...container,
  padding: spacing.md,
  gap: spacing.md,
};

const shadow = {
  shadowColor: colors.darkGray,
  shadowOpacity: 0.3,
  shadowRadius: spacing.sm,
};

const text = {
  fontFamily: fonts.sans,
  fontSize: sizes.md,
  color: colors.black,
  lineHeight: 1.5 * sizes.md,
};

export const styles = {
  container,
  paddedContainer,
  shadow,
  text,
};
