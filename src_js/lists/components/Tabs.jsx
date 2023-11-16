import { Pressable, StyleSheet, View } from "react-native";
import { colors, spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";

const Tabs = ({ tab, setTab }) => (
  <View style={tabsStyles.container}>
    <Pressable onPress={() => setTab("news")} style={tabsStyles.tab}>
      <Text
        style={[
          tabsStyles.tabText,
          tab === "news" ? tabsStyles.activeTabText : {},
        ]}
      >
        News
      </Text>
    </Pressable>
    <Pressable onPress={() => setTab("other")} style={tabsStyles.tab}>
      <Text
        style={[
          tabsStyles.tabText,
          tab === "other" ? tabsStyles.activeTabText : {},
        ]}
      >
        Other
      </Text>
    </Pressable>
  </View>
);

const tabsStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    flex: 1,
  },
  tabText: {
    backgroundColor: colors.lightGrey,
    color: colors.orcaBlue,
    padding: spacing.sm,
    textAlign: "center",
  },
  activeTabText: {
    backgroundColor: colors.orcaBlue,
    color: colors.white,
  },
});

export default Tabs;
