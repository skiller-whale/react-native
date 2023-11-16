import { Text } from "react-native";
import { styles } from "./styles.js";

export const StyledText = ({ children, style, ...rest }) => (
  <Text style={[styles.text, style]} {...rest}>
    {children}
  </Text>
);
