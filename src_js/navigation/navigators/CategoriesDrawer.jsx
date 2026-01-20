import { createDrawerNavigator } from "@react-navigation/drawer";
import { articleTags } from "../../../lib/data/articles.ts";
import { colors } from "../../../lib/styles.ts";
import CategoryScreen from "../screens/Category.jsx";

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
  {},
);

const CategoriesDrawer = createDrawerNavigator();

export default CategoriesDrawer;
