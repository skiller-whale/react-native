import { Pressable, StyleSheet } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({ title, onPress }: Props) => (
  <Pressable style={buttonStyles.button} onPress={onPress}>
    <Text style={buttonStyles.buttonText}>{title}</Text>
  </Pressable>
);

const buttonStyles = StyleSheet.create({
  button: {
    padding: spacing.md,
    backgroundColor: colors.coralOrange,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
  },
});

export default Button;
