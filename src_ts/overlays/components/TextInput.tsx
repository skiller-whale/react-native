import { TextInput as RNTextInput, StyleSheet, type TextInputProps } from "react-native";
import { colors, spacing } from "../../../lib/styles";

const TextInput = (props: TextInputProps) => (
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
