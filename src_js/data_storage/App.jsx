import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Pressable, View } from "react-native";
import LoadingPlaceholder from "../../lib/LoadingPlaceholder.tsx";
import { colors, spacing } from "../../lib/styles.ts";
import ArticleDisplay from "./screens/ArticleDisplay.jsx";
import ArticlesIndex from "./screens/ArticlesIndex.jsx";
import Settings from "./screens/Settings.jsx";
import { ArticlesProvider, useArticles } from "./state/Articles.jsx";
import { DatabaseProvider, useDatabase } from "./state/Database.jsx";
import { SettingsProvider, useSettings } from "./state/Settings.jsx";

const Stack = createNativeStackNavigator();

const App = () => (
  <SettingsProvider>
    <DatabaseProvider>
      <ArticlesProvider>
        <AppStack />
      </ArticlesProvider>
    </DatabaseProvider>
  </SettingsProvider>
);

const AppStack = () => {
  const { dbIsReady, db } = useDatabase();
  const { articles, articlesAreReady } = useArticles();
  const { settingsAreReady } = useSettings();

  return !(dbIsReady && articlesAreReady && settingsAreReady) ? (
    <LoadingPlaceholder />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: colors.orcaBlue },
          headerTintColor: colors.white,
          title: "The Daily Whale",
          headerRight: () => (
            <View style={{ paddingHorizontal: spacing.md }}>
              <Pressable onPress={() => navigation.push("Settings")}>
                <MaterialCommunityIcons
                  name="cog"
                  size={20}
                  color={colors.white}
                />
              </Pressable>
            </View>
          ),
        })}
      >
        <Stack.Screen
          name="Index"
          component={ArticlesIndex}
          options={{
            headerLeft: () => (
              <View style={{ paddingHorizontal: spacing.md }}>
                <MaterialCommunityIcons
                  name="dolphin"
                  color={colors.white}
                  size={28}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleDisplay}
          options={({ route }) => {
            const { id } = route.params;
            const article = articles.find((article) => article.id === id);
            const headerTitle = article?.title ?? "article not found";
            return { headerTitle };
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
