import { Pressable, StyleSheet } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

const Button = ({ title, style, ...rest }) => (
  <Pressable
    style={[buttonStyles.button, typeof style === "object" ? style : {}]}
    {...rest}
  >
    <Text style={buttonStyles.buttonText}>{title}</Text>
  </Pressable>
);

const buttonStyles = StyleSheet.create({
  button: {
    padding: spacing.md,
    backgroundColor: colors.coralOrange,
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
  },
});

export default Button;
