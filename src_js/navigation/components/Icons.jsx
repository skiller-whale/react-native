import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";

export const WhaleHeaderIcon = () => (
  <View style={{ paddingRight: spacing.md }}>
    <MaterialCommunityIcons name="dolphin" color={colors.white} size={28} />
  </View>
);

export const ArticlesTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="newspaper" color={color} size={size} />
);

export const WhalesTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="dolphin" color={color} size={size} />
);

export const CategoriesTabIcon = ({ color, size }) => (
  <MaterialCommunityIcons name="apps" color={color} size={size} />
);
