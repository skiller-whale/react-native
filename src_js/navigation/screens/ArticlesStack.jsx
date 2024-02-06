import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../lib/styles.ts";
import ArticlesIndex from "../components/ArticlesIndex.jsx";
import { getArticleTitleFromID } from "../utils.js";
import ArticleScreen from "./Article.jsx";

const Stack = createNativeStackNavigator();

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
