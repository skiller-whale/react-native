import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.tsx";
import ArticleScreen, {
  type ArticleScreenParams,
} from "../screens/Article.tsx";
import { getArticleTitleFromID } from "../utils.ts";

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
        const { id } = route.params as ArticleScreenParams;
        return { title: getArticleTitleFromID(id) };
      },
    },
  },
});

export default ArticlesStack;
