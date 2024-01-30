import {
  Picker as RNPicker,
  type PickerProps,
} from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { StyledText as Text } from "../../../lib/typography";
import { colors, fontFamilies, fontSizes, spacing } from "../../../lib/styles";

type Props<Value extends string> = Omit<PickerProps<Value>, "children"> & {
  label: string;
  options: Array<{ label: string; value: Value }>;
};

const Picker = <Value extends string>({
  label,
  options,
  ...rest
}: Props<Value>) => (
  <View style={pickerStyles.container}>
    <Text size="sm" style={pickerStyles.label}>
      {label}
    </Text>
    <View style={pickerStyles.pickerContainer}>
      <RNPicker style={pickerStyles.picker} {...rest}></RNPicker>
    </View>
  </View>
);

const pickerStyles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  label: {
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.midGrey,
  },
  picker: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.md,
  },
});

export default Picker;
