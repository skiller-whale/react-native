import { useReducer } from "react";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { type StackParamList, StackID } from "./routes.ts";
import { Text, View } from "../../lib/base.tsx";
import { stateReducer, initialState, StateContext, DispatchContext } from "./State.ts";
import articles from "./data/articles.ts";
import whales from "./data/whales.ts";
import HomeScreen from "./screens/Home.tsx";
import ArticleScreen from "./screens/Article.tsx";
import WhaleScreen from "./screens/Whale.tsx";
import { colors } from "../../lib/styles.ts";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      <HomeScreen />
      <ArticleScreen id="1" />
      <ArticleScreen id="2" />
      <WhaleScreen id="orca" />
      <WhaleScreen id="skiller" />
    </>
  );
};

export default App;
