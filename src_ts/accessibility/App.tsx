import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import articles from "../../lib/data/articles.ts";
import { colors, spacing } from "../../lib/styles.ts";
import { StyledText as Text } from "../../lib/typography.tsx";
import AccessibilityStateProvider from "./AccessibilityState.tsx";
import { BaseStackID, type BaseStackScreenParams } from "./routes.ts";
import ArticleDisplay from "./screens/ArticleDisplay.tsx";
import ArticlesIndex from "./screens/ArticlesIndex.tsx";

const Stack = createNativeStackNavigator<BaseStackScreenParams>();

const App = () => (
  <NavigationContainer independent={true}>
    <AccessibilityStateProvider>
      <Stack.Navigator
        id={BaseStackID}
        initialRouteName="Index"
        screenOptions={{
          headerStyle: { backgroundColor: colors.orcaBlue },
          headerTintColor: colors.white,
        }}
      >
        <Stack.Screen
          name="Index"
          component={ArticlesIndex}
          options={{
            headerLeft: HeaderLeft,
            headerTitle: () => <HeaderTitle title="The Daily Whale" />,
          }}
        />
        <Stack.Screen
          name="Article"
          component={ArticleDisplay}
          options={({ route }) => {
            const { id } = route.params;
            const title = articles.find((article) => article.id === id)!.title;
            return {
              headerTitle: () => <HeaderTitle title={title} />,
            };
          }}
        />
      </Stack.Navigator>
    </AccessibilityStateProvider>
  </NavigationContainer>
);

const HeaderLeft = () => (
  <View style={{ paddingLeft: spacing.md }}>
    <MaterialCommunityIcons name="dolphin" color={colors.white} size={28} />
  </View>
);

const HeaderTitle = ({ title }: { title: string }) => (
  <Text size="lg" color="white" numberOfLines={1} ellipsizeMode="tail">
    {title}
  </Text>
);

export default App;
