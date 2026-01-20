import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.jsx";
import ArticleScreen from "../screens/Article.jsx";
import { getArticleTitleFromID } from "../utils.js";

const ArticlesStack = createNativeStackNavigator({
  initialRouteName: "ArticlesIndex",
  screenOptions: {
    headerTransparent: true,
    headerStyle: { backgroundColor: colors.orcaBlue },
    headerTintColor: colors.white,
  },
  screens: {
    ArticlesIndex: {
      screen: ArticlesIndex,
      options: {
        headerLeft: () => null,
        headerTitle: "Articles",
      },
    },
    Article: {
      screen: ArticleScreen,
      options: ({ route }) => {
        const { id } = route.params;
        return { title: getArticleTitleFromID(id) };
      },
    },
  },
});

export default ArticlesStack;
