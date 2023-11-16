import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../styles/styles.js";
import Tab from "./Tab.jsx";

const Tabs = ({ tab, setTab }) => (
  <View style={tabsStyles.tabs}>
    <Tab onPress={() => setTab("articles")} active={tab === "articles"}>
      Articles
    </Tab>
    <Tab onPress={() => setTab("whales")} active={tab === "whales"}>
      Whales
    </Tab>
    <Tab onPress={() => setTab("pictures")} active={tab === "pictures"}>
      Pictures
    </Tab>
  </View>
);

const tabsStyles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    backgroundColor: colors.turquoise,
    justifyContent: "space-around",
    paddingVertical: spacing.md,
  },
});

export default Tabs;
