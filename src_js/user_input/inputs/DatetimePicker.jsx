import { useState } from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { colors, spacing } from "../../../lib/styles.ts";

const DateTimePicker = ({ label, value, onChange, ...rest }) => {
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
