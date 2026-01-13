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
} from "./State.js";
import ArticleScreen from "./screens/Article.jsx";
import HomeScreen from "./screens/Home.jsx";
import WhaleScreen from "./screens/Whale.jsx";

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
