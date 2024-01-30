import { useState, forwardRef } from "react";
import { TextInput as RNTextInput, StyleSheet, View } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { colors, fontFamilies, fontSizes, spacing } from "../../../lib/styles.ts";

const TextInput = forwardRef(({ label, style, nextInputRef, ...rest }, ref) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={textInputStyles.container}>
      <Text size="sm" style={textInputStyles.label}>
        {label}
      </Text>
      <RNTextInput
        ref={ref}
        {...rest}
        style={[textInputStyles.textInput, style]}
      />
    </View>
  );
});

const textInputStyles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    fontWeight: "bold",
  },
  textInput: {
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: colors.midGrey,
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.md,
  },
  focused: {
    borderColor: colors.oceanBlue,
  },
});

export default TextInput;
