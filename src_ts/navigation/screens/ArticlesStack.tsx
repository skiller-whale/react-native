import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.tsx";
import type { ArticlesStackScreenParams } from "../routes.ts";
import { getArticleTitleFromID } from "../utils.ts";
import ArticleScreen from "./Article.tsx";

const Stack = createNativeStackNavigator<ArticlesStackScreenParams>();

const ArticlesStackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.orcaBlue },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen
      name="ArticlesIndex"
      component={ArticlesIndex}
      options={{
        headerLeft: () => null,
        headerTitle: "Articles",
      }}
    />
    <Stack.Screen
      name="Article"
      component={ArticleScreen}
      options={({ route }) => {
        const { id } = route.params;
        return { title: getArticleTitleFromID(id) };
      }}
    />
  </Stack.Navigator>
);

export default ArticlesStackScreen;
