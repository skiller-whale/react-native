import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { articleTags } from "../../../lib/data/articles.ts";
import { colors } from "../../../lib/styles.ts";
import { toTitleCase } from "../utils.js";
import CategoryScreen from "./Category.jsx";

const CategoriesScreen = () => (
  <View>{/* implement the CategoriesScreen component... */}</View>
);

const drawerScreenOptions = (tag) => ({
  title: toTitleCase(tag),
  drawerStyle: { backgroundColor: colors.orcaBlue },
  drawerContentContainerStyle: { padding: 0 },
  drawerItemStyle: { margin: 0, borderRadius: 0 },
  drawerInactiveTintColor: colors.white,
  drawerActiveTintColor: colors.orcaBlue,
  drawerActiveBackgroundColor: colors.turquoise,
});

export default CategoriesScreen;
