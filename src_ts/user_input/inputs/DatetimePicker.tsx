import RNDateTimePicker, {
  type AndroidNativeProps,
  type DateTimePickerEvent,
  type IOSNativeProps,
  type WindowsNativeProps,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import { colors, spacing } from "../../../lib/styles";
import { StyledText as Text } from "../../../lib/typography";

type Props = (IOSNativeProps | AndroidNativeProps | WindowsNativeProps) & {
  label: string;
};

const DateTimePicker = ({ label, value, onChange, ...rest }: Props) => {
  return (
    <View style={dateTimePickerStyles.container}>
      <Text size="sm" style={dateTimePickerStyles.label}>
        {label}
      </Text>
      {Platform.OS === "android" ? (
        <View style={dateTimePickerStyles.input}>{/* TODO */}</View>
      ) : (
        <View style={dateTimePickerStyles.input}>
          <RNDateTimePicker value={value} onChange={onChange} {...rest} />
        </View>
      )}
    </View>
  );
};

const dateTimePickerStyles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.midGrey,
    paddingHorizontal: spacing.sm,
    paddingVertical: 10,
  },
});

export default DateTimePicker;
