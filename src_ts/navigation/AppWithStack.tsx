import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import { colors, spacing } from "../../lib/styles.ts";
import { StyledText as Text } from "../../lib/typography.tsx";
import { BaseStackID, type BaseStackScreenParams } from "./routes.ts";
import ArticleScreen from "./screens/Article.tsx";
import HomeScreen from "./screens/Home.tsx";
import WhaleScreen from "./screens/Whale.tsx";
import { getArticleTitleFromID, getWhaleNameFromID } from "./utils.ts";

const Stack = createNativeStackNavigator<BaseStackScreenParams>();

const AppWithStack = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator id={BaseStackID} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
      <Stack.Screen name="Whale" component={WhaleScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const HeaderLeft = () => (
  <View style={{ paddingLeft: spacing.md }}>
    <MaterialCommunityIcons name="dolphin" color={colors.white} size={28} />
  </View>
);

const HeaderTitle = () => (
  <Text size="lg" color="white">
    The Daily Whale
  </Text>
);

export default AppWithStack;
