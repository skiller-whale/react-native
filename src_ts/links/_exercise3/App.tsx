import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, View } from "react-native";
import articles from "../../../lib/data/articles.ts";
import { colors, fontFamilies, spacing } from "../../../lib/styles.ts";
import { BaseStackID, type BaseStackScreenParams } from "../routes.ts";
import ArticleScreen from "../screens/Article.tsx";
import HomeScreen from "../_exercise2/screens/Home.tsx";
import NotFoundScreen from "../screens/NotFound.tsx";

const Stack = createNativeStackNavigator<BaseStackScreenParams>();

const prefix = Linking.createURL("/ts/links/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: {
        screens: {
          ArticlesIndex: "articles",
          Help: "help",
        },
      },
      Article: "article/:id",
      NotFound: "*",
    },
  },
};

const App = () => {
  return (
    <NavigationContainer independent={true} linking={linking}>
      <Stack.Navigator
        id={BaseStackID}
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.orcaBlue },
          headerTintColor: colors.white,
          headerTitleStyle: { fontFamily: fontFamilies.sans },
          headerRight: () => (
            <Pressable onPress={Linking.openSettings}>
              <MaterialCommunityIcons name="cog" color="white" size={24} />
            </Pressable>
          ),    
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <View style={{ paddingRight: spacing.md }}>
                <MaterialCommunityIcons
                  name="dolphin"
                  color={colors.white}
                  size={28}
                />
              </View>
            ),
            headerTitle: "The Daily Whale",
          }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleScreen}
          options={({ route }) => {
            const { id } = route.params;
            const title =
              articles.find((article) => article.id === id)?.title ??
              "Article not found";
            return { title };
          }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Bad link" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;