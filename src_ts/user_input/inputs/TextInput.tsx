import { forwardRef, useState, type RefObject } from "react";
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  type TextInputProps,
} from "react-native";
import { colors, fontFamilies, fontSizes, spacing } from "../../../lib/styles";
import { StyledText as Text } from "../../../lib/typography";

type Props = TextInputProps & {
  label: string;
  nextInputRef?: RefObject<RNTextInput>;
};

const TextInput = forwardRef<RNTextInput, Props>(
  ({ label, style, nextInputRef, ...rest }, ref) => {
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
  },
);

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
