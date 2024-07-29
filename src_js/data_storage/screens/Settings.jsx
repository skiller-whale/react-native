import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import {
  colors,
  fontFamilies,
  fontSizes,
  spacing,
  styles,
} from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import { useSetSettings, useSettings } from "../state/Settings.jsx";

const Settings = () => {
  const { fontFamily, fontSize } = useSettings();
  const { setFontSize, setFontFamily } = useSetSettings();

  return (
    <View style={settingsStyles.container}>
      <View style={settingsStyles.input}>
        <Text id="fontSizeLabel" style={settingsStyles.label}>
          Font Family
        </Text>
        <Picker
          aria-labelledby="fontFamilyLabel"
          selectedValue={fontFamily}
          onValueChange={setFontFamily}
          style={settingsStyles.picker}
          itemStyle={settingsStyles.pickerItem}
        >
          <Picker.Item label="Serif" value="serif" />
          <Picker.Item label="Sans Serif" value="sans" />
        </Picker>
      </View>
      <View style={settingsStyles.input}>
        <Text id="fontFamilyLabel" style={settingsStyles.label}>
          Font Size
        </Text>
        <Picker
          aria-labelledby="fontFamilyLabel"
          selectedValue={fontSize}
          onValueChange={setFontSize}
          style={settingsStyles.picker}
          itemStyle={settingsStyles.pickerItem}
        >
          <Picker.Item label="small" value="sm" />
          <Picker.Item label="medium" value="md" />
          <Picker.Item label="large" value="lg" />
        </Picker>
      </View>
    </View>
  );
};

const settingsStyles = StyleSheet.create({
  container: {
    ...styles.container,
    padding: spacing.md,
    gap: spacing.md,
  },
  input: {
    gap: spacing.md,
  },
  label: {
    fontWeight: "700",
  },
  picker: {
    backgroundColor: colors.lightGrey,
  },
  pickerItem: {
    fontFamily: fontFamilies.sans,
    fontSize: fontSizes.md,
  },
});

export default Settings;
