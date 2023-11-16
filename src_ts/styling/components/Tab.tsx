import { Pressable, StyleSheet } from "react-native";
import { StyledText as Text } from "../styles/typography.tsx";
import { colors, sizes, spacing, styles } from "../styles/styles.ts";

type Props = {
  onPress: () => void;
  active: boolean;
  children: string;
};

const Tab = ({ onPress, active, children }: Props) => (
  <Pressable onPress={onPress} style={tabStyles.tab}>
    <Text style={tabStyles.tabText}>{children}</Text>
  </Pressable>
);

const tabStyles = StyleSheet.create({
  tab: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: sizes.sm,
  },
  tabText: {
    ...styles.text,
    color: colors.blue,
  },
  activeTab: {
    backgroundColor: colors.blue,
  },
  activeTabText: {
    color: colors.white,
  },
});

export default Tab;
