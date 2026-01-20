import {
  createDrawerNavigator,
  type DrawerNavigationProp,
} from "@react-navigation/drawer";
import type { StaticParamList } from "@react-navigation/native";
import type { FC } from "react";
import { articleTags, type ArticleTag } from "../../../lib/data/articles.ts";
import { colors } from "../../../lib/styles.ts";
import CategoryScreen from "../screens/Category.tsx";

const drawerScreenOptions = {
  headerShown: false,
  drawerStyle: { backgroundColor: colors.orcaBlue },
  drawerContentContainerStyle: { padding: 0 },
  drawerItemStyle: { margin: 0, borderRadius: 0 },
  drawerInactiveTintColor: colors.white,
  drawerActiveTintColor: colors.orcaBlue,
  drawerActiveBackgroundColor: colors.turquoise,
};

const screens = articleTags.reduce(
  (screens, tag) => {
    screens[tag] = () => <CategoryScreen tag={tag} />;
    return screens;
  },
  {} as Record<ArticleTag, FC>,
);

const CategoriesDrawer = createDrawerNavigator();

export default CategoriesDrawer;

export type ScreenParams = StaticParamList<typeof CategoriesDrawer>;

export type Screen = keyof ScreenParams;

export type NavigationProp = DrawerNavigationProp<ScreenParams>;
