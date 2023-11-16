import type { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacing } from "../styles/styles.ts";
import Tab from "./Tab.tsx";

export type TabName = "articles" | "whales" | "pictures";

type Props = {
  tab: TabName;
  setTab: Dispatch<SetStateAction<TabName>>;
};

const Tabs = ({ tab, setTab }: Props) => (
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
