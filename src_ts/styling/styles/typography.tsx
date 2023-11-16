import { type TextProps, Text } from "react-native";
import { styles } from "./styles.ts";

export const StyledText = ({ children, style, ...rest }: TextProps) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);
