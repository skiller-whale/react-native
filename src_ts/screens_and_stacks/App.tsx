import {
  createStaticNavigation,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { useReducer } from "react";
import {
  DispatchContext,
  initialState,
  StateContext,
  stateReducer,
} from "./State.ts";
import { Stack } from "./routes.ts";
import ArticleScreen from "./screens/Article.tsx";
import HomeScreen from "./screens/Home.tsx";
import WhaleScreen from "./screens/Whale.tsx";

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <NavigationIndependentTree>
      <HomeScreen />
      <ArticleScreen />
      <WhaleScreen />
    </NavigationIndependentTree>
  );
};

export default App;
