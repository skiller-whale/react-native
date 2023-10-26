import { Pressable, Text } from "../styles/core.jsx";
import { colors, sizes, spacing, styles } from "../styles/styles.js";

const Tab = ({ onPress, active, children }) => (
  <Pressable onPress={onPress} style={tabStyles.tab}>
    <Text style={tabStyles.tabText}>{children}</Text>
  </Pressable>
);

const tabStyles = {
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
};

export default Tab;
