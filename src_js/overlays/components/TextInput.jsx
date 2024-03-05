import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";

const TextInput = (props) => (
  <RNTextInput {...props} style={textInputStyles.input} />
);

const textInputStyles = StyleSheet.create({
  input: {
    padding: spacing.sm,
    borderColor: colors.midGrey,
    borderWidth: 1,
  },
});

export default TextInput;
