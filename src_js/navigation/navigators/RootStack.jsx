import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import { WhaleHeaderIcon } from "../components/Icons.jsx";
import ArticleScreen from "../screens/Article.jsx";
import HomeScreen from "../screens/Home.jsx";
import WhaleScreen from "../screens/Whale.jsx";
import { getArticleTitleFromID, getWhaleNameFromID } from "../utils.js";
import RootTabs from "./RootTabs.jsx";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Article: ArticleScreen,
    Whale: WhaleScreen,
  },
});

export default RootStack;
