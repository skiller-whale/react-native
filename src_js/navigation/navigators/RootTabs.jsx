import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.jsx";
import { ArticlesTabIcon, CategoriesTabIcon, WhalesTabIcon } from "../components/Icons.jsx";
import WhalesIndex from "../components/WhalesIndex.jsx";
import ArticlesStack from "./ArticlesStack.jsx";
import CategoriesDrawer from "./CategoriesDrawer.jsx";
import WhalesStack from "./WhalesStack.jsx";

const tabBarStyles = {
  safeAreaInsets: { bottom: 0 },
  tabBarStyle: {
    backgroundColor: colors.orcaBlue,
  },
  tabBarInactiveTintColor: colors.white,
  tabBarActiveBackgroundColor: colors.turquoise,
  tabBarActiveTintColor: colors.orcaBlue,
};

const RootTabs = createBottomTabNavigator();

export default RootTabs;
