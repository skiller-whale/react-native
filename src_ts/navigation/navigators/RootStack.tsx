import type { StaticParamList } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import { WhaleHeaderIcon } from "../components/Icons.tsx";
import ArticleScreen, {
  type ArticleScreenParams,
} from "../screens/Article.tsx";
import HomeScreen from "../screens/Home.tsx";
import WhaleScreen, { type WhaleScreenParams } from "../screens/Whale.tsx";
import { getArticleTitleFromID, getWhaleNameFromID } from "../utils.ts";
import RootTabs from "./RootTabs.tsx";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Article: ArticleScreen,
    Whale: WhaleScreen,
  },
});

export default RootStack;

export type ScreenParams = StaticParamList<typeof RootStack>;

export type Screen = keyof ScreenParams;

export type NavigationProp = NativeStackNavigationProp<ScreenParams>;
