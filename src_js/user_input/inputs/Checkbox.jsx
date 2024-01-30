import ExpoCheckbox from "expo-checkbox";
import { Pressable, StyleSheet } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

const Checkbox = ({ label, style, ...rest }) => (
  <Pressable key={label} style={[checkboxStyles.checkbox, style]}>
    <ExpoCheckbox {...rest} color={colors.orcaBlue} />
    <Text>{label}</Text>
  </Pressable>
);

const checkboxStyles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
});

export default Checkbox;
