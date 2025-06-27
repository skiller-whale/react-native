import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
import { Pressable, View } from "react-native";
import articles from "../../lib/data/articles.ts";
import { colors, fontFamilies, spacing } from "../../lib/styles.ts";
import { BaseStackID } from "./routes.js";
import ArticleScreen from "./screens/Article.jsx";
import HomeScreen from "./screens/Home.jsx";
import NotFoundScreen from "./screens/NotFound.jsx";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          id={BaseStackID}
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: colors.orcaBlue },
            headerTintColor: colors.white,
            headerTitleStyle: { fontFamily: fontFamilies.sans },
            headerRight: () => (
              <Pressable>
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
                "Article not found.";
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
    </NavigationIndependentTree>
  );
};

export default App;
