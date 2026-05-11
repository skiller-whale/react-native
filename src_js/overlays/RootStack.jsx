import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import articles from "../../lib/data/articles.ts";
import { colors, fontFamilies, spacing } from "../../lib/styles.ts";
import LoginButton from "./components/LoginButton.jsx";
import ArticleScreen from "./screens/Article.jsx";
import HomeScreen from "./screens/Home.jsx";
import LoginModal from "./screens/Login.jsx";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Home",
  screenOptions: {
    headerStyle: { backgroundColor: colors.orcaBlue },
    headerTintColor: colors.white,
    headerTitleStyle: { fontFamily: fontFamilies.sans },
    headerRight: LoginButton,
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
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
      },
    },
    Article: {
      screen: ArticleScreen,
      options: ({ route }) => {
        const { id } = route.params;
        const title =
          articles.find((article) => article.id === id)?.title ??
          "Article not found.";
        return { title };
      },
    },
  },
});

export default RootStack;
