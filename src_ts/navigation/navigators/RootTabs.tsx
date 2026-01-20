import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.tsx";
import { ArticlesTabIcon, CategoriesTabIcon, WhalesTabIcon } from "../components/Icons.tsx";
import WhalesIndex from "../components/WhalesIndex.tsx";
import ArticlesStack from "./ArticlesStack.tsx";
import CategoriesDrawer from "./CategoriesDrawer.tsx";
import WhalesStack from "./WhalesStack.tsx";

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
