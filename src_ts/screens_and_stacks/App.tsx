import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useReducer } from "react";
import {
  DispatchContext,
  StateContext,
  initialState,
  stateReducer,
} from "./State.ts";
import type { ScreenParams } from "./routes.ts";
import ArticleScreen from "./screens/Article.tsx";
import HomeScreen from "./screens/Home.tsx";
import WhaleScreen from "./screens/Whale.tsx";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <>
      <HomeScreen />
      <ArticleScreen />
      <WhaleScreen />
    </>
  );
};

export default App;
