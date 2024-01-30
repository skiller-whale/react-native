import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
  type PressableProps,
} from "react-native";
import { spacing, styles } from "../../../lib/styles";
import { StyledText as Text } from "../../../lib/typography.tsx";

type ButtonProps = PressableProps & {
  children?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ disabled, children, style, icon, ...rest }: ButtonProps) => (
  <Pressable
    style={({ pressed }) => [
      styles.button,
      { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
      pressed || disabled ? styles.buttonPressed : {},
      disabled ? styles.buttonDisabled : {},
      icon ? buttonStyles.icon : {},
      style,
    ]}
    {...rest}
  >
    {children ? <Text style={styles.buttonText}>{children}</Text> : null}
    {icon ? (
      <MaterialIcons name={icon} size={24} color={styles.buttonText.color} />
    ) : null}
  </Pressable>
);

const buttonStyles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between",
  },
});

export default Button;
