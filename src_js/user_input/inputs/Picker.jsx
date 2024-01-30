import { Picker as RNPicker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { colors, fontFamilies, fontSizes, spacing } from "../../../lib/styles.ts";

const Picker = ({ label, options, ...rest }) => (
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
